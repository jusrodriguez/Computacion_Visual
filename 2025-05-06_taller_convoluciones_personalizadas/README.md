# 🧪 Taller - Filtro Visual: Convoluciones Personalizadas

## 🔍 Objetivo del taller

Diseñar e implementar filtros personalizados en imágenes para modificar bordes, difuminar o realzar detalles. Este taller busca profundizar en el concepto de convolución y su impacto visual en el procesamiento de imágenes.

---

## 🧠 Conceptos Aprendidos

- Principio de la convolución en procesamiento de imágenes.
- Creación y aplicación de kernels personalizados.
- Diferencia entre filtros de suavizado, realce y detección de bordes.
- Visualización comparativa de resultados de diferentes filtros.
- Organización de proyectos de computación visual en Python.

---

## 🔧 Herramientas y Entornos

- **Python** (Jupyter Notebook, OpenCV, NumPy, Matplotlib)
- **OpenCV** para procesamiento y visualización de imágenes.
- **Jupyter Notebook** para experimentación interactiva.

---

## 📁 Estructura del Proyecto

```
python/
├── imagen1.jpg
├── solucion.ipynb
README.md
```

---

## 🧪 Implementación

### 🔹 Etapas realizadas

1. Carga de una imagen de entrada.
2. Definición de kernels personalizados para diferentes efectos (desenfoque, realce, bordes, etc.).
3. Aplicación de la operación de convolución usando OpenCV.
4. Comparación visual entre la imagen original y las imágenes filtradas.
5. Análisis de los efectos producidos por cada kernel.

---

### 🔹 Código relevante

#### Python

El siguiente fragmento muestra cómo cargar una imagen, definir un kernel personalizado y aplicar la convolución utilizando OpenCV:

```python
import cv2
import numpy as np
import matplotlib.pyplot as plt

# Cargar imagen en escala de grises
img = cv2.imread('imagen1.jpg', cv2.IMREAD_GRAYSCALE)

# Definir un kernel personalizado (ejemplo: detección de bordes)
kernel = np.array([
    [-1, -1, -1],
    [-1,  8, -1],
    [-1, -1, -1]
])

# Aplicar convolución
filtered = cv2.filter2D(img, -1, kernel)

# Visualización
plt.subplot(1, 2, 1)
plt.title('Original')
plt.imshow(img, cmap='gray')
plt.axis('off')

plt.subplot(1, 2, 2)
plt.title('Filtrado')
plt.imshow(filtered, cmap='gray')
plt.axis('off')

plt.show()
```

---

## 📊 Resultados Visuales

A continuación se presentan los resultados obtenidos al aplicar diferentes kernels de convolución sobre la imagen de entrada, mostrando el efecto de cada filtro personalizado.

### Imagen Original y Filtrada

![Resultado de convolución](./resultados/resultado.gif) <!-- Ajusta la ruta según el archivo generado -->

---

## 🧩 Prompts Usados

```text
"¿Cómo implemento un filtro personalizado con convolución en OpenCV?"
"¿Cómo visualizo el efecto de diferentes kernels en una imagen?"
"¿Cómo comparar resultados de varios filtros en una cuadrícula con Matplotlib?"
```

---

## 💬 Reflexión Final

Este taller me permitió comprender a fondo el funcionamiento de la convolución en imágenes y la importancia de los kernels en el procesamiento visual. Experimentar con diferentes matrices me ayudó a visualizar cómo pequeños cambios en el kernel producen efectos muy distintos, desde suavizado hasta detección de bordes. El mayor reto fue ajustar los valores de los kernels para obtener los resultados deseados y entender la relación entre la teoría y la práctica.

En futuros proyectos, me gustaría explorar la creación de filtros más complejos y la combinación de varios kernels para tareas avanzadas de procesamiento de imágenes, así como optimizar el rendimiento de las operaciones de convolución en imágenes de mayor tamaño.

---
