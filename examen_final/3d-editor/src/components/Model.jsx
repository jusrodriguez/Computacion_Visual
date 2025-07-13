// Model.jsx
import React from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import { meshStandardMaterial } from 'three';

const Model = ({ materialType }) => {
  const { scene } = useGLTF('/path/to/your/model.result.gltf'); // Asegúrate de usar la ruta correcta

  // Cargar texturas
  const normalMap = useTexture('/textures/normalMap.jpg');
  const roughnessMap = useTexture('/textures/roughnessMap.jpg');
  const metalnessMap = useTexture('/textures/metalnessMap.jpg');

  const getMaterial = () => {
    switch (materialType) {
      case 'metallic':
        return (
          <meshStandardMaterial
            color="orange"
            normalMap={normalMap}
            roughnessMap={roughnessMap}
            metalnessMap={metalnessMap}
            metalness={1}
            roughness={0.2}
          />
        );
      case 'rough':
        return (
          <meshStandardMaterial
            color="green"
            normalMap={normalMap}
            roughnessMap={roughnessMap}
            metalness={0}
            roughness={1}
          />
        );
      default:
        return <meshStandardMaterial color="blue" />;
    }
  };

  return (
    <primitive object={scene} scale={[1, 1, 1]}>
      {getMaterial()}  {/* Aplicar material dinámicamente */}
    </primitive>
  );
};

export default Model;
