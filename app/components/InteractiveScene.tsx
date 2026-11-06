"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars, Sparkles, Environment, ContactShadows, OrbitControls } from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

function EnergyCore() {
  const group = useRef<THREE.Group>(null);
  const inner = useRef<THREE.Mesh>(null);
  const ringA = useRef<THREE.Mesh>(null);
  const ringB = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.18;
      group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.22) * 0.12;
    }
    if (inner.current) inner.current.rotation.y -= delta * 0.45;
    if (ringA.current) ringA.current.rotation.z += delta * 0.24;
    if (ringB.current) ringB.current.rotation.x -= delta * 0.18;
  });

  return (
    <group ref={group}>
      <mesh ref={inner}>
        <icosahedronGeometry args={[1.05, 2]} />
        <meshStandardMaterial color="#8b5cf6" metalness={0.75} roughness={0.18} emissive="#4c1d95" emissiveIntensity={1.25} wireframe />
      </mesh>
      <mesh scale={0.73}>
        <icosahedronGeometry args={[1, 2]} />
        <meshPhysicalMaterial color="#22d3ee" metalness={0.55} roughness={0.12} transmission={0.25} thickness={0.8} emissive="#0891b2" emissiveIntensity={0.65} />
      </mesh>
      <mesh ref={ringA} rotation={[Math.PI / 2.6, 0.2, 0]}>
        <torusGeometry args={[1.62, 0.018, 12, 180]} />
        <meshBasicMaterial color="#67e8f9" />
      </mesh>
      <mesh ref={ringB} rotation={[0.4, Math.PI / 2.5, 0.6]}>
        <torusGeometry args={[1.88, 0.012, 10, 180]} />
        <meshBasicMaterial color="#a78bfa" />
      </mesh>
      <mesh scale={2.05}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color="#8b5cf6" transparent opacity={0.035} side={THREE.BackSide} />
      </mesh>
    </group>
  );
}

function OrbitingNodes() {
  const nodes = useMemo(() => Array.from({ length: 9 }, (_, i) => ({
    angle: (i / 9) * Math.PI * 2,
    radius: 2.35 + (i % 3) * 0.24,
    y: Math.sin(i * 1.7) * 0.8,
    size: i % 3 === 0 ? 0.105 : 0.065,
  })), []);
  const group = useRef<THREE.Group>(null);
  useFrame((_, delta) => { if (group.current) group.current.rotation.y += delta * 0.12; });

  return (
    <group ref={group}>
      {nodes.map((node, i) => (
        <Float key={i} speed={1.4 + i * 0.12} rotationIntensity={1.1} floatIntensity={0.55}>
          <mesh position={[Math.cos(node.angle) * node.radius, node.y, Math.sin(node.angle) * node.radius]}>
            <octahedronGeometry args={[node.size, 0]} />
            <meshStandardMaterial color={i % 2 ? "#a78bfa" : "#67e8f9"} emissive={i % 2 ? "#7c3aed" : "#0891b2"} emissiveIntensity={2.2} metalness={0.4} roughness={0.2} />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

export default function InteractiveScene() {
  return (
    <div className="three-scene" aria-label="Interactive animated 3D energy core">
      <Canvas camera={{ position: [0, 0, 7.1], fov: 42 }} dpr={[1, 1.7]} gl={{ antialias: true, alpha: true }}>
        <color attach="background" args={["#080914"]} />
        <ambientLight intensity={0.8} />
        <pointLight position={[4, 3, 4]} intensity={32} color="#67e8f9" />
        <pointLight position={[-4, -2, 2]} intensity={28} color="#8b5cf6" />
        <Suspense fallback={null}>
          <Stars radius={65} depth={45} count={1300} factor={3} saturation={0.2} fade speed={0.6} />
          <Sparkles count={90} scale={8} size={2.3} speed={0.35} opacity={0.65} color="#b9a5ff" />
          <EnergyCore />
          <OrbitingNodes />
          <Environment preset="city" />
          <ContactShadows position={[0, -2.5, 0]} opacity={0.25} scale={8} blur={2.5} far={5} />
          <OrbitControls enablePan={false} minDistance={5.5} maxDistance={9} enableDamping dampingFactor={0.06} autoRotate autoRotateSpeed={0.35} />
        </Suspense>
      </Canvas>
    </div>
  );
}
