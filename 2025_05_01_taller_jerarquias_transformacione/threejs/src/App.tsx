import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stats } from '@react-three/drei'
import { useControls } from 'leva'

function HierarchyScene() {
  // Controles de Leva para el nodo padre
  const { tx, ty, tz, rx, ry, rz } = useControls('Padre', {
    tx: { label: 'Traslación X', min: -5, max: 5, value: 0, step: 0.1 },
    ty: { label: 'Traslación Y', min: -5, max: 5, value: 0, step: 0.1 },
    tz: { label: 'Traslación Z', min: -5, max: 5, value: 0, step: 0.1 },
    rx: { label: 'Rotación X (rad)', min: 0, max: Math.PI * 2, value: 0, step: 0.01 },
    ry: { label: 'Rotación Y (rad)', min: 0, max: Math.PI * 2, value: 0, step: 0.01 },
    rz: { label: 'Rotación Z (rad)', min: 0, max: Math.PI * 2, value: 0, step: 0.01 },
  })

  return (
    <group position={[tx, ty, tz]} rotation={[rx, ry, rz]}>
      {/* Nivel 1: Padre */}
      {/* Nivel 2: Dos hijos sencillos */}
      <mesh position={[2, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="salmon" />
      </mesh>
      <mesh position={[-2, 0, 0]}>
        <sphereGeometry args={[0.7, 32, 32]} />
        <meshStandardMaterial color="skyblue" />
      </mesh>

      {/* Nivel 3 (bonus): Un nieto dentro de un grupo hijo */}
      <group position={[0, 2, 0]} rotation={[0, 0, Math.PI / 4]}>
        {/* Este grupo “nieto” hereda transformaciones del padre */}
        <mesh position={[0, 1.5, 0]}>
          <coneGeometry args={[0.5, 1.5, 32]} />
          <meshStandardMaterial color="gold" />
        </mesh>
      </group>
    </group>
  )
}

export default function App() {
  return (
    <>
      <Canvas
        camera={{ position: [0, 5, 10], fov: 50 }}
        style={{ height: '100vh', width: '100vw' }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 10, 7]} intensity={1} />

        {/* Escena jerárquica */}
        <HierarchyScene />

        <OrbitControls />
        <Stats />
      </Canvas>
    </>
  )
}