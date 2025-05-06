# 🧪 Taller - Jerarquías y Transformaciones: El Árbol del Movimiento

## 🔍 Objetivo del taller

Aplicar estructuras jerárquicas y árboles de transformación para organizar escenas y simular movimiento relativo entre objetos. Se busca comprender cómo las transformaciones afectan a los nodos hijos en una estructura padre-hijo y cómo visualizar estos efectos en tiempo real.

---

## 🧠 Conceptos Aprendidos

- Jerarquía de objetos en escenas 3D.
- Propagación de transformaciones en grupos (padre-hijo-nieto).
- Uso de Three.js y React Three Fiber para manipulación de escenas.
- Controles interactivos de parámetros con Leva.

---

## 🔧 Herramientas y Entornos

- Three.js / React Three Fiber (JavaScript, React, Vite)
- @react-three/drei (OrbitControls, Stats)
- Vite (entorno de desarrollo)

---

## 📁 Estructura del Proyecto

```

threejs/
│   ├── public/
│   │   └── vite.svg
│   ├── src/
│   │   ├── App.css
│   │   ├── App.tsx
│   │   ├── index.css
│   │   ├── main.tsx
│   │   ├── vite-env.d.ts
│   │   └── assets/
│   │       └── react.svg
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── tsconfig.app.json
│   ├── tsconfig.json
│   ├── tsconfig.node.json
│   └── vite.config.ts

```

---

## 🧪 Implementación

### 🔹 Etapas realizadas

1. Creación de un proyecto con Vite y React Three Fiber.
2. Definición de una escena jerárquica con grupos y objetos hijos/nietos.
3. Implementación de controles interactivos para modificar transformaciones del nodo padre.
4. Visualización en el navegador con controles de órbita y estadísticas de renderizado.

---

### 🔹 Código relevante

A continuación se muestra un fragmento representativo de cómo se implementó la jerarquía y las transformaciones animadas/interactivas:

#### Three.js / React Three Fiber (TypeScript)

```tsx
// src/App.tsx
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stats } from "@react-three/drei";
import { useControls } from "leva";

function HierarchyScene() {
  // Controles interactivos para el nodo padre
  const { tx, ty, tz, rx, ry, rz } = useControls("Padre", {
    tx: { label: "Traslación X", min: -5, max: 5, value: 0, step: 0.1 },
    ty: { label: "Traslación Y", min: -5, max: 5, value: 0, step: 0.1 },
    tz: { label: "Traslación Z", min: -5, max: 5, value: 0, step: 0.1 },
    rx: {
      label: "Rotación X (rad)",
      min: 0,
      max: Math.PI * 2,
      value: 0,
      step: 0.01,
    },
    ry: {
      label: "Rotación Y (rad)",
      min: 0,
      max: Math.PI * 2,
      value: 0,
      step: 0.01,
    },
    rz: {
      label: "Rotación Z (rad)",
      min: 0,
      max: Math.PI * 2,
      value: 0,
      step: 0.01,
    },
  });

  return (
    <group position={[tx, ty, tz]} rotation={[rx, ry, rz]}>
      {/* Nivel 1: Padre */}
      {/* Nivel 2: Dos hijos */}
      <mesh position={[2, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="salmon" />
      </mesh>
      <mesh position={[-2, 0, 0]}>
        <sphereGeometry args={[0.7, 32, 32]} />
        <meshStandardMaterial color="skyblue" />
      </mesh>
      {/* Nivel 3: Nieto */}
      <group position={[0, 2, 0]} rotation={[0, 0, Math.PI / 4]}>
        <mesh position={[0, 1.5, 0]}>
          <coneGeometry args={[0.5, 1.5, 32]} />
          <meshStandardMaterial color="gold" />
        </mesh>
      </group>
    </group>
  );
}

export default function App() {
  return (
    <Canvas
      camera={{ position: [0, 5, 10], fov: 50 }}
      style={{ height: "100vh", width: "100vw" }}
    >
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 10, 7]} intensity={1} />
      <HierarchyScene />
      <OrbitControls />
      <Stats />
    </Canvas>
  );
}
```

---

## 📊 Resultados Visuales

La siguiente imagen/GIF muestra la escena jerárquica interactiva, donde al modificar los controles del nodo padre se observa cómo los hijos y nietos heredan las transformaciones:

![threejs_jerarquia](./threejs/resultados/resultado.gif)

---

## 🧩 Prompts Usados

```text
"¿Cómo implemento una jerarquía de objetos 3D en React Three Fiber?"
"¿Cómo hago que los hijos hereden transformaciones del padre en Three.js?"
"¿Cómo agrego controles interactivos para modificar transformaciones en tiempo real?"
```

---

## 💬 Reflexión Final

Con este taller reforcé mi comprensión sobre cómo funcionan las jerarquías de transformación en gráficos 3D y la importancia de organizar los objetos en estructuras padre-hijo-nieto. Aprendí a utilizar React Three Fiber y Leva para manipular y visualizar en tiempo real cómo las transformaciones aplicadas a un nodo padre afectan automáticamente a todos sus descendientes, lo que facilita la creación de escenas complejas y dinámicas.

La parte más interesante fue experimentar con los controles interactivos y observar cómo pequeños cambios en la transformación del nodo padre se propagan visualmente a los hijos y nietos. El mayor reto fue entender el orden de aplicación de las transformaciones y cómo la estructura jerárquica influye en el resultado final, especialmente al combinar rotaciones y traslaciones en diferentes niveles.

Para futuros proyectos, me gustaría explorar la automatización de animaciones dentro de la jerarquía y la integración de modelos 3D externos para enriquecer la escena. También consideraría agregar más niveles de jerarquía y experimentar con interactividad avanzada, como la manipulación directa de nodos hijos o la incorporación de físicas básicas para simular comportamientos más realistas.
