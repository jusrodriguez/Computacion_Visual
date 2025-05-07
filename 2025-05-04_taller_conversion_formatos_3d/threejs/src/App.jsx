import React, { useState, useEffect } from 'react';
import './App.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html, useGLTF } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';

const Model = ({ modelPath, format, onModelLoaded }) => {
  const [model, setModel] = useState(null);

  useEffect(() => {
    const validateModel = async () => {
      try {
        const response = await fetch(modelPath);
        if (!response.ok) {
          onModelLoaded(false);
          return;
        }
      } catch (error) {
        console.error('Error al verificar el archivo:', error);
        onModelLoaded(false);
        return;
      }

      let loadedModel;
      if (format === 'obj') {
        loadedModel = useLoader(OBJLoader, modelPath);
      } else if (format === 'stl') {
        loadedModel = useLoader(STLLoader, modelPath);
      } else if (format === 'glb') {
        loadedModel = useGLTF(modelPath);
      }

      // Validar si el modelo fue cargado correctamente
      if (loadedModel) {
        setModel(loadedModel);
        onModelLoaded(true);
      } else {
        onModelLoaded(false);
      }
    };

    validateModel();
  }, [modelPath, format, onModelLoaded]);

  // Mostrar cargando si el modelo aún no se ha cargado
  if (!model) return <Html center>Loading...</Html>;

  return (
    <group>
      {format === 'glb' ? (
        // Mostrar el modelo GLB si ha sido cargado
        <primitive object={model.scene} />
      ) : (
        // Mostrar los modelos OBJ o STL
        <primitive object={model} />
      )}
    </group>
  );
};

const App = () => {
  const [modelType, setModelType] = useState('obj');
  const [modelFound, setModelFound] = useState(true);  // Estado que valida si el modelo fue encontrado
  const [vertices, setVertices] = useState(0);

  // Rutas de los modelos 3D
  const modelPaths = {
    obj: '/models/model.obj',
    stl: '/models/model.stl',
    glb: '/models/model.glb',
  };

  const handleModelChange = (event) => {
    setModelType(event.target.value);
  };

  const handleModelLoaded = (fileFound) => {
    setModelFound(fileFound);  // Cambia el estado de si el modelo fue encontrado
  };

  return (
    <div className="App">
      <h1>Modelos 3D con React Three Fiber</h1>
      <select onChange={handleModelChange} value={modelType}>
        <option value="obj">OBJ</option>
        <option value="stl">STL</option>
        <option value="glb">GLTF/GLB</option>
      </select>
      {modelFound ? (
        <p>Vértices del modelo: {vertices}</p>
      ) : (
        <p style={{ color: 'red' }}>¡Error! El archivo no fue encontrado en la ruta proporcionada.</p>
      )}

      <Canvas style={{ height: '500px' }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
        <Model
          modelPath={modelPaths[modelType]}
          format={modelType}
          onModelLoaded={handleModelLoaded}
        />
      </Canvas>
    </div>
  );
};

export default App;
