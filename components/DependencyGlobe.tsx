'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  PerspectiveCamera,
  OrbitControls,
  Stars,
  Line,
} from '@react-three/drei';
import * as THREE from 'three';

// ============================================================================
// TYPES
// ============================================================================
interface DataFlowProps {
  start: [number, number]; // [lat, lon]
  end: [number, number];   // [lat, lon]
  color: THREE.Color;
}

// ============================================================================
// UTILITIES
// ============================================================================

/**
 * Convertit des coordonnées (latitude, longitude) en Vector3 sur une sphère
 * @param lat Latitude en degrés
 * @param lon Longitude en degrés
 * @param radius Rayon de la sphère
 */
function latLonToVector3(lat: number, lon: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);

  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const y = radius * Math.cos(phi);
  const z = radius * Math.sin(phi) * Math.sin(theta);

  return new THREE.Vector3(x, y, z);
}

/**
 * Crée un point de contrôle pour la courbe de Bézier
 * Le point est élevé au-dessus de la surface de la sphère
 */
function getControlPoint(start: THREE.Vector3, end: THREE.Vector3, altitude: number): THREE.Vector3 {
  const mid = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);
  const distance = start.distanceTo(end);
  const elevationFactor = Math.min(distance * 0.5, 1.5);
  return mid.normalize().multiplyScalar(2 + altitude + elevationFactor);
}

// ============================================================================
// COMPONENTS
// ============================================================================

/**
 * Globe principal avec texture noir profond et émission bleue
 */
function Globe() {
  return (
    <mesh>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial
        color="#0a0f1a"
        emissive="#1e3a8a"
        emissiveIntensity={0.15}
        roughness={0.7}
        metalness={0.3}
      />
    </mesh>
  );
}

/**
 * Grille wireframe par-dessus le globe pour l'effet "Tech"
 */
function WireframeGrid() {
  return (
    <mesh>
      <sphereGeometry args={[2.03, 48, 48]} />
      <meshBasicMaterial
        color="#3b5998"
        wireframe
        transparent
        opacity={0.12}
      />
    </mesh>
  );
}

/**
 * Arc de flux de données animé entre deux points
 */
function DataFlowArc({ start, end, color }: DataFlowProps) {
  const dotRef = useRef<THREE.Mesh>(null);
  const haloRef = useRef<THREE.Mesh>(null);
  const dotProgress = useRef(0);

  // Calcul des points de la courbe
  const { curve, points } = useMemo(() => {
    const startVec = latLonToVector3(start[0], start[1], 2);
    const endVec = latLonToVector3(end[0], end[1], 2);
    const controlPoint = getControlPoint(startVec, endVec, 0.5);

    const bezierCurve = new THREE.QuadraticBezierCurve3(startVec, controlPoint, endVec);
    const curvePoints = bezierCurve.getPoints(50);

    return { curve: bezierCurve, points: curvePoints };
  }, [start, end]);

  // Couleurs pour le dégradé (bleu Europe → orange/rouge USA)
  const colors = useMemo(() => {
    const colorArray: THREE.Color[] = [];
    const startColor = new THREE.Color('#3b82f6'); // Bleu Europe
    const endColor = new THREE.Color('#ef4444');   // Rouge danger USA

    for (let i = 0; i <= 50; i++) {
      const t = i / 50;
      const interpColor = new THREE.Color().lerpColors(startColor, endColor, t);
      colorArray.push(interpColor);
    }

    return colorArray;
  }, []);

  // Animation du point mobile
  useFrame((_, delta) => {
    dotProgress.current = (dotProgress.current + delta * 0.3) % 1;

    const position = curve.getPoint(dotProgress.current);
    if (dotRef.current) {
      dotRef.current.position.copy(position);
    }
    if (haloRef.current) {
      haloRef.current.position.copy(position);
    }
  });

  return (
    <group>
      {/* Arc principal avec dégradé */}
      <Line
        points={points}
        vertexColors={colors}
        lineWidth={2}
        transparent
        opacity={0.8}
        dashed
        dashSize={0.1}
        gapSize={0.05}
      />

      {/* Point mobile de données */}
      <mesh ref={dotRef}>
        <sphereGeometry args={[0.04, 16, 16]} />
        <meshBasicMaterial color={color} />
      </mesh>

      {/* Halo lumineux autour du point */}
      <mesh ref={haloRef}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial color={color} transparent opacity={0.3} />
      </mesh>
    </group>
  );
}

/**
 * Point animé qui voyage le long de l'arc
 */
function TravelingDataPoint({ curve, color, speed = 0.3, delay = 0 }: {
  curve: THREE.QuadraticBezierCurve3;
  color: string;
  speed?: number;
  delay?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const progress = useRef(delay);

  useFrame((_, delta) => {
    progress.current = (progress.current + delta * speed) % 1;
    if (meshRef.current) {
      const position = curve.getPoint(progress.current);
      meshRef.current.position.copy(position);
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.05, 16, 16]} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
}

/**
 * Ensemble des flux de données Europe → USA
 */
function DataFlows() {
  // Coordonnées des capitales européennes et de la Virginie (Data Centers)
  const routes: { name: string; start: [number, number]; end: [number, number] }[] = [
    { name: 'Paris → Virginia', start: [48.8566, 2.3522], end: [37.4316, -78.6569] },
    { name: 'Berlin → Virginia', start: [52.5200, 13.4050], end: [37.4316, -78.6569] },
    { name: 'Madrid → Virginia', start: [40.4168, -3.7038], end: [37.4316, -78.6569] },
  ];

  // Créer les courbes pour les points mobiles supplémentaires
  const curves = useMemo(() => {
    return routes.map(route => {
      const startVec = latLonToVector3(route.start[0], route.start[1], 2);
      const endVec = latLonToVector3(route.end[0], route.end[1], 2);
      const controlPoint = getControlPoint(startVec, endVec, 0.5);
      return new THREE.QuadraticBezierCurve3(startVec, controlPoint, endVec);
    });
  }, []);

  return (
    <group>
      {routes.map((route, index) => (
        <DataFlowArc
          key={route.name}
          start={route.start}
          end={route.end}
          color={new THREE.Color('#f97316')}
        />
      ))}

      {/* Points de données supplémentaires avec délais différents */}
      {curves.map((curve, index) => (
        <group key={`extra-dots-${index}`}>
          <TravelingDataPoint
            curve={curve}
            color="#fbbf24"
            speed={0.4}
            delay={0.33}
          />
          <TravelingDataPoint
            curve={curve}
            color="#f97316"
            speed={0.35}
            delay={0.66}
          />
        </group>
      ))}
    </group>
  );
}

/**
 * Marqueurs de localisation (points lumineux sur les villes)
 */
function LocationMarkers() {
  const locations = [
    { name: 'Paris', coords: [48.8566, 2.3522] as [number, number], color: '#3b82f6' },
    { name: 'Berlin', coords: [52.5200, 13.4050] as [number, number], color: '#3b82f6' },
    { name: 'Madrid', coords: [40.4168, -3.7038] as [number, number], color: '#3b82f6' },
    { name: 'Virginia', coords: [37.4316, -78.6569] as [number, number], color: '#ef4444' },
  ];

  return (
    <group>
      {locations.map((loc) => {
        const position = latLonToVector3(loc.coords[0], loc.coords[1], 2.03);
        return (
          <group key={loc.name} position={position}>
            {/* Point principal */}
            <mesh>
              <sphereGeometry args={[0.05, 16, 16]} />
              <meshBasicMaterial color={loc.color} />
            </mesh>
            {/* Halo lumineux */}
            <mesh>
              <sphereGeometry args={[0.1, 16, 16]} />
              <meshBasicMaterial color={loc.color} transparent opacity={0.3} />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}

/**
 * Composant de pulsation pour le point de destination (Virginia)
 */
function DestinationPulse() {
  const pulseRef = useRef<THREE.Mesh>(null);
  const position = latLonToVector3(37.4316, -78.6569, 2.03);

  useFrame((state) => {
    if (pulseRef.current) {
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.3;
      pulseRef.current.scale.setScalar(scale);
      (pulseRef.current.material as THREE.MeshBasicMaterial).opacity = 
        0.5 - Math.sin(state.clock.elapsedTime * 2) * 0.3;
    }
  });

  return (
    <mesh ref={pulseRef} position={position}>
      <sphereGeometry args={[0.15, 16, 16]} />
      <meshBasicMaterial color="#ef4444" transparent opacity={0.3} />
    </mesh>
  );
}

/**
 * Scène 3D complète
 */
function Scene() {
  return (
    <>
      {/* Caméra - rapprochée pour un globe géant */}
      <PerspectiveCamera makeDefault position={[0, 0, 3.5]} />

      {/* Contrôles - rotation manuelle activée, zoom désactivé */}
      <OrbitControls
        enableZoom={false}
        enableRotate={true}
        autoRotate
        autoRotateSpeed={0.3}
        enablePan={false}
        minPolarAngle={Math.PI * 0.25}
        maxPolarAngle={Math.PI * 0.75}
        rotateSpeed={0.5}
      />

      {/* Éclairage */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#3b82f6" />

      {/* Étoiles en arrière-plan */}
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />

      {/* Globe */}
      <Globe />
      <WireframeGrid />

      {/* Marqueurs de localisation */}
      <LocationMarkers />
      <DestinationPulse />

      {/* Flux de données */}
      <DataFlows />
    </>
  );
}

// ============================================================================
// MAIN EXPORT
// ============================================================================

/**
 * Composant DependencyGlobe - Data Viz montrant les flux de données
 * partant de l'Europe vers les USA
 */
export default function DependencyGlobe() {
  return (
    <Canvas
      className="absolute inset-0 z-0 bg-[#020410]"
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
    >
      <Scene />
    </Canvas>
  );
}
