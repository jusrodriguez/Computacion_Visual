import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useControls } from 'leva'

function EscenaInteractiva() {
  // Controles dinámicos de la interfaz (leva)
  const {
    escalaGlobal,     // Escala general para todos los objetos
    colorCaja,        // Color de la caja
    rotarGrupo,       // Booleano que define si todo el grupo rota
    velocidadRotacion // Velocidad de rotación del grupo
  } = useControls({
    escalaGlobal: { value: 1, min: 0.1, max: 3, step: 0.1 },
    colorCaja: '#ff0000',
    rotarGrupo: true,
    velocidadRotacion: { value: 0.01, min: 0, max: 0.1, step: 0.005 },
  })

  // Referencia al grupo de objetos para aplicar rotación
  const referenciaGrupo = useRef()

  // Hook que se ejecuta en cada frame del renderizado
  useFrame(() => {
    if (rotarGrupo && referenciaGrupo.current) {
      referenciaGrupo.current.rotation.y += velocidadRotacion
    }
  })

  // Lista de objetos 3D a renderizar en la escena
  const listaObjetos = [
    {
      id: 'objeto1',
      tipo: 'caja',
      posicion: [-2, 0, 0],
      escala: [1, 1, 1],
      color: colorCaja,
      rotacion: [0, 0, 0],
    },
    {
      id: 'objeto2',
      tipo: 'esfera',
      posicion: [2, 0, 0],
      escala: [1.5, 1.5, 1.5],
      color: '#00ff00',
      rotacion: [0, 0, 0],
    },
    {
      id: 'objeto3',
      tipo: 'cono',
      posicion: [0, 2, 0],
      escala: [1, 2, 1],
      color: '#0000ff',
      rotacion: [0, 0, 0],
    },
  ]

  return (
    // Agrupación de todos los objetos (con posible rotación)
    <group ref={referenciaGrupo}>
      {listaObjetos.map((objeto) => (
        <mesh
          key={objeto.id}
          position={objeto.posicion}
          scale={objeto.escala.map(valor => valor * escalaGlobal)}
          rotation={objeto.rotacion}
        >
          {/* Selección del tipo de geometría según el tipo */}
          {objeto.tipo === 'caja' && <boxGeometry args={[1, 1, 1]} />}
          {objeto.tipo === 'esfera' && <sphereGeometry args={[1, 32, 32]} />}
          {objeto.tipo === 'cono' && <coneGeometry args={[1, 2, 32]} />}

          {/* Aplicación del color a través del material */}
          <meshStandardMaterial color={objeto.color} />
        </mesh>
      ))}
    </group>
  )
}

export default EscenaInteractiva

