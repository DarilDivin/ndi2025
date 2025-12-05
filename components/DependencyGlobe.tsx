'use client';

import React, { useRef, Suspense, useMemo } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Stars, QuadraticBezierLine } from '@react-three/drei';
import * as THREE from 'three';

// --- CONFIGURATION : LE MONDE ENTIER VERS LES USA ---
// Cible 1 : Virginie du Nord (Hub Data Centers mondial) -> [39.04, -77.48]
// Cible 2 : Silicon Valley (Sièges GAFAM) -> [37.38, -122.08]

const US_EAST = [39.04, -77.48];
const US_WEST = [37.38, -122.08];

const DATA_ARCS = [
  // EUROPE (Vers East Coast)
  { start: [48.85, 2.35], end: US_EAST },   // Paris
  { start: [52.52, 13.40], end: US_EAST },  // Berlin
  { start: [51.50, -0.12], end: US_EAST },  // Londres
  { start: [41.90, 12.49], end: US_EAST },  // Rome
  { start: [55.75, 37.61], end: US_EAST },  // Moscou

  // ASIE (Vers West Coast)
  { start: [35.67, 139.65], end: US_WEST }, // Tokyo
  { start: [31.23, 121.47], end: US_WEST }, // Shanghai
  { start: [19.07, 72.87], end: US_EAST },  // Mumbai (Route via Europe souvent, mais ici direct)
  { start: [1.35, 103.81], end: US_WEST },  // Singapour
  { start: [25.20, 55.27], end: US_EAST },  // Dubai

  // AMÉRIQUE DU SUD (Vers East Coast)
  { start: [-23.55, -46.63], end: US_EAST }, // São Paulo
  { start: [-34.60, -58.38], end: US_EAST }, // Buenos Aires
  { start: [4.71, -74.07], end: US_EAST },   // Bogota

  // AFRIQUE (Vers East Coast)
  { start: [30.04, 31.23], end: US_EAST },   // Le Caire
  { start: [-33.92, 18.42], end: US_EAST },  // Le Cap
  { start: [6.52, 3.37], end: US_EAST },     // Lagos

  // OCÉANIE (Vers West Coast)
  { start: [-33.86, 151.20], end: US_WEST }, // Sydney
];

const getPosition = (lat: number, lon: number, radius: number) => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
};

// --- COMPOSANT LIGNE ANIMÉE ---
const AnimatedDataArc = ({ start, end, radius = 2 }: { start: number[], end: number[], radius?: number }) => {
  const lineRef = useRef<any>(null);

  const { startPos, midPoint, endPos } = useMemo(() => {
    const s = getPosition(start[0], start[1], radius);
    const e = getPosition(end[0], end[1], radius);
    // On calcule la distance pour ajuster la hauteur de l'arc
    const distance = s.distanceTo(e);
    // Plus la distance est grande, plus l'arc monte haut
    const midHeight = 1 + distance * 0.5; 
    
    const m = s.clone().add(e).multiplyScalar(0.5).normalize().multiplyScalar(radius * midHeight);
    return { startPos: s, midPoint: m, endPos: e };
  }, [start, end, radius]);

  useFrame((state, delta) => {
    if (lineRef.current && lineRef.current.material) {
      // Vitesse variable aléatoire pour un effet plus naturel
      lineRef.current.material.dashOffset -= delta * 1.5;
    }
  });

  return (
    <QuadraticBezierLine
      ref={lineRef}
      start={startPos}
      mid={midPoint}
      end={endPos}
      color="#38bdf8" // Cyan clair
      lineWidth={1}   // Ligne très fine
      dashed={true}
      dashScale={15}
      dashSize={0.5}
      gapSize={0.5}
      transparent
      opacity={0.6}
    />
  );
};

const EarthContent = () => {
  const colorMap = useLoader(THREE.TextureLoader, '/earth-dark.jpg');
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0005; // Rotation lente
    }
  });

  return (
    <group ref={groupRef}>
      
      {/* OCÉANS */}
      <mesh>
        <sphereGeometry args={[2, 64, 64]} />
        <meshBasicMaterial color="#020617" />
      </mesh>

      {/* CONTINENTS LUMINEUX */}
      <mesh>
        <sphereGeometry args={[2.005, 64, 64]} />
        <meshStandardMaterial
          map={colorMap}
          transparent={true}
          opacity={0.8}
          color="#1e293b"
          emissive="#3b82f6"
          emissiveIntensity={0.5}
          emissiveMap={colorMap}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* FLUX GLOBAUX */}
      {DATA_ARCS.map((arc, i) => (
        <AnimatedDataArc key={`arc-${i}`} start={arc.start} end={arc.end} radius={2} />
      ))}
      
      {/* SOURCES (Petits points blancs partout) */}
      {DATA_ARCS.map((arc, i) => (
        <mesh key={`dot-${i}`} position={getPosition(arc.start[0], arc.start[1], 2.01)}>
          <sphereGeometry args={[0.015, 8, 8]} />
          <meshBasicMaterial color="white" />
        </mesh>
      ))}

      {/* CIBLES USA (Gros points Rouges qui pulsent) */}
      {[US_EAST, US_WEST].map((target, i) => (
        <mesh key={`target-${i}`} position={getPosition(target[0], target[1], 2.01)}>
          <sphereGeometry args={[0.04, 16, 16]} />
          <meshBasicMaterial color="#f43f5e" toneMapped={false} />
          <pointLight distance={0.5} intensity={2} color="#f43f5e" />
        </mesh>
      ))}

    </group>
  );
};

// Fallback si l'image ne charge pas
const FallbackEarth = () => (
  <mesh>
    <sphereGeometry args={[2, 32, 32]} />
    <meshBasicMaterial color="#0f172a" wireframe />
  </mesh>
);

export default function DependencyGlobe() {
  return (
    <div className="absolute inset-0 w-full h-full z-0 bg-[#020410]">
      <Canvas camera={{ position: [0, 0, 5.8], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={0.2} />
        <Stars radius={200} depth={50} count={3000} factor={4} fade speed={0.5} />
        <Suspense fallback={<FallbackEarth />}>
          <EarthContent />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} minPolarAngle={Math.PI / 3} maxPolarAngle={Math.PI / 1.5} />
      </Canvas>
    </div>
  );
}