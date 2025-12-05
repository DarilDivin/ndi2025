'use client';

import React, { useRef, Suspense, useMemo } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Stars, QuadraticBezierLine } from '@react-three/drei';
import * as THREE from 'three';

// --- CONFIGURATION ---
const DATA_ARCS = [
  { start: [48.85, 2.35], end: [38.90, -77.03] }, // Paris -> Washington
  { start: [52.52, 13.40], end: [38.90, -77.03] }, // Berlin -> Washington
  { start: [40.41, -3.70], end: [38.90, -77.03] }, // Madrid -> Washington
  { start: [51.50, -0.12], end: [37.77, -122.41] }, // Londres -> Silicon Valley
  { start: [41.90, 12.49], end: [40.71, -74.00] }, // Rome -> NYC
];

const getPosition = (lat: number, lon: number, radius: number) => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
};

// --- FLUX ANIMÉS AMÉLIORÉS ---
const AnimatedDataArc = ({ start, end, radius = 2 }: { start: number[], end: number[], radius?: number }) => {
  const lineRef = useRef<any>(null);

  const { startPos, midPoint, endPos } = useMemo(() => {
    const s = getPosition(start[0], start[1], radius);
    const e = getPosition(end[0], end[1], radius);
    // Courbure plus prononcée pour bien sortir du globe
    const m = s.clone().add(e).multiplyScalar(0.5).normalize().multiplyScalar(radius * 1.6);
    return { startPos: s, midPoint: m, endPos: e };
  }, [start, end, radius]);

  useFrame((state, delta) => {
    if (lineRef.current && lineRef.current.material) {
      // Vitesse augmentée pour effet "High Speed Data"
      lineRef.current.material.dashOffset -= delta * 1.5;
    }
  });

  return (
    <QuadraticBezierLine
      ref={lineRef}
      start={startPos}
      mid={midPoint}
      end={endPos}
      color="#22d3ee" // Cyan clair très lumineux
      lineWidth={1.5} // Ligne fine
      dashed={true}
      dashScale={20} // Beaucoup de petits tirets
      dashSize={0.4} // Taille du tiret
      gapSize={0.2}  // Espace petit pour un effet continu
      transparent
      opacity={0.8}
    />
  );
};

// --- GLOBE AUTO-ILLUMINÉ ---
const EarthContent = () => {
  // Charge la texture
  const colorMap = useLoader(THREE.TextureLoader, '/earth-dark.jpg');
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0003; // Rotation très lente et majestueuse
    }
  });

  return (
    <group ref={groupRef}>
      
      {/* 1. SURFACE DE L'OCÉAN (BASE SOMBRE) */}
      <mesh>
        <sphereGeometry args={[2, 64, 64]} />
        <meshBasicMaterial color="#020617" /> {/* Noir profond, pas de reflets */}
      </mesh>

      {/* 2. CONTINENTS (AUTO-LUMINEUX) */}
      {/* On utilise la texture pour dire où afficher la couleur */}
      <mesh>
        <sphereGeometry args={[2.005, 64, 64]} /> {/* Légèrement plus grand pour éviter le z-fighting */}
        <meshStandardMaterial
          map={colorMap}
          transparent={true}
          opacity={0.9}
          color="#1e293b" // Base bleu gris
          emissive="#3b82f6" // Les continents émettent de la lumière bleue
          emissiveIntensity={0.8} // Force de la lumière
          emissiveMap={colorMap} // Seuls les continents brillent
          blending={THREE.AdditiveBlending} // Effet "Hologramme"
        />
      </mesh>

      {/* 3. ATMOSPHÈRE (HALO) */}
      <mesh scale={[1.02, 1.02, 1.02]}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshBasicMaterial
          color="#60a5fa"
          transparent
          opacity={0.05}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* 4. FLUX DE DONNÉES */}
      {DATA_ARCS.map((arc, i) => (
        <AnimatedDataArc key={`arc-${i}`} start={arc.start} end={arc.end} radius={2} />
      ))}
      
      {/* 5. MARQUEURS DISCRETS (Sources Europe) */}
      {DATA_ARCS.map((arc, i) => (
        <mesh key={`dot-${i}`} position={getPosition(arc.start[0], arc.start[1], 2.01)}>
          {/* Cercle minuscule */}
          <sphereGeometry args={[0.015, 8, 8]} /> 
          <meshBasicMaterial color="#ffffff" toneMapped={false} />
          {/* Petit halo autour du point */}
          <pointLight distance={0.2} intensity={0.5} color="white" />
        </mesh>
      ))}

      {/* 6. MARQUEUR DISCRET (Destination USA) */}
      <mesh position={getPosition(38.90, -77.03, 2.01)}>
          <sphereGeometry args={[0.03, 16, 16]} />
          <meshBasicMaterial color="#f472b6" toneMapped={false} />
          <pointLight distance={0.5} intensity={1} color="#f472b6" />
      </mesh>

    </group>
  );
};

// --- FALLBACK (Si pas d'image) ---
const FallbackEarth = () => (
  <mesh>
    <sphereGeometry args={[2, 32, 32]} />
    <meshBasicMaterial color="#0f172a" wireframe />
  </mesh>
);

export default function DependencyGlobe() {
  return (
    <div className="absolute inset-0 w-full h-full z-0 bg-[#020410]">
      <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }} dpr={[1, 2]}>
        {/* Lumières minimales (Le globe s'éclaire lui-même maintenant) */}
        <ambientLight intensity={0.2} />
        
        {/* Étoiles en fond */}
        <Stars radius={200} depth={50} count={2000} factor={4} fade speed={0.5} />
        
        <Suspense fallback={<FallbackEarth />}>
          <EarthContent />
        </Suspense>
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          minPolarAngle={Math.PI / 3} 
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  );
}