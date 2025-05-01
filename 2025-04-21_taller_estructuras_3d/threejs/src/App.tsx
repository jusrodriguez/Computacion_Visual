// src/App.tsx

import React, { Suspense, useState } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { OrbitControls, Edges } from '@react-three/drei'
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader'

type Mode = 'faces' | 'edges' | 'points'

/** Componente que renderiza el .stl según el modo seleccionado */
function STLModel({ url, mode }: { url: string; mode: Mode }) {
  const geometry = useLoader(STLLoader, url)

  return (
    <>
      {/* Modo caras */}
      {mode === 'faces' && (
        <mesh geometry={geometry}>
          <meshStandardMaterial
            color="lightgray"
            metalness={0.3}
            roughness={0.6}
          />
        </mesh>
      )}

      {/* Modo aristas */}
      {mode === 'edges' && (
        <Edges
          geometry={geometry}
          scale={1.01}      /* un pelín mayor para que destaque */
          threshold={5}     /* ángulo mínimo para dibujar la arista */
          color="cyan"
        />
      )}

      {/* Modo puntos */}
      {mode === 'points' && (
        <points geometry={geometry}>
          <pointsMaterial
            size={0.005}
            sizeAttenuation={true}
            color="magenta"
          />
        </points>
      )}
    </>
  )
}

export default function App() {
  const [mode, setMode] = useState<Mode>('faces')

  return (
    <>
      {/* UI para cambiar modo */}
      <div
        style={{
          position: 'absolute',
          top: 20,
          left: 20,
          zIndex: 10,
          background: 'rgba(0,0,0,0.5)',
          padding: '0.5rem',
          borderRadius: '4px',
          color: 'white',
        }}
      >
        {(['faces', 'edges', 'points'] as Mode[]).map(m => (
          <button
            key={m}
            onClick={() => setMode(m)}
            style={{
              margin: '0 4px',
              padding: '4px 8px',
              background: mode === m ? '#347' : '#555',
              border: 'none',
              borderRadius: '3px',
              cursor: 'pointer',
              color: 'white',
            }}
          >
            {m}
          </button>
        ))}
      </div>

      {/* Lienzo 3D */}
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        style={{ height: '100vh', width: '100vw' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        <Suspense fallback={null}>
          <STLModel url="/models/model.stl" mode={mode} />
        </Suspense>

        <OrbitControls />
      </Canvas>
    </>
  )
}
