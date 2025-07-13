// Scene.jsx
import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from './Model';
import MaterialControls from './MaterialControls';

const Scene = () => {
  const [materialType, setMaterialType] = useState('basic'); // Estado para tipo de material

  return (
    <>
      <Canvas style={{ height: '100vh' }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        {/* Cargar y mostrar el modelo 3D */}
        <Model materialType={materialType} />
        
        <OrbitControls />
      </Canvas>

      {/* Controles para cambiar materiales */}
      <MaterialControls setMaterialType={setMaterialType} />
    </>
  );
};

export default Scene;
