# 🧪 Taller - De Pixels a Coordenadas: Explorando la Imagen como Matriz

## 🔍 Objetivo del taller

Comprender cómo se representa una imagen digital como una matriz numérica y manipular sus componentes a nivel de píxel. Se abordará cómo trabajar con los valores de color y brillo directamente, accediendo a regiones específicas de la imagen para su análisis o modificación.

---

## 🧠 Conceptos Aprendidos

- Representación de imágenes como matrices NumPy.
- Acceso y modificación de valores de píxeles.
- Conversión entre formatos de color (RGB, escala de grises).
- Operaciones básicas de procesamiento de imágenes (recorte, inversión, filtrado simple).

---

## 🔧 Herramientas y Entornos

- **Python** (Jupyter Notebook, OpenCV, NumPy, Matplotlib)
- **Jupyter Notebook** para experimentación y visualización interactiva.
- **OpenCV** para carga y manipulación de imágenes.

---

## 📁 Estructura del Proyecto

```
python/
├── imagen_matriz.ipynb
├── mario.jpg
└── README.md
```

---

## 🧪 Implementación

### 🔹 Etapas realizadas

1. Carga de una imagen a color usando OpenCV.
2. Conversión de la imagen a escala de grises y visualización de la matriz de píxeles.
3. Acceso y modificación de valores individuales y regiones de la matriz.
4. Aplicación de operaciones simples: inversión de colores, recorte, filtrado básico.
5. Visualización de resultados usando Matplotlib.

---

### 🔹 Código relevante

#### Python (OpenCV, NumPy, Matplotlib)

```python
import cv2
import numpy as np
import matplotlib.pyplot as plt

# Cargar imagen
img = cv2.imread('mario.jpg')
img_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)

# Mostrar la imagen original
plt.imshow(img_rgb)
plt.title('Imagen Original')
plt.axis('off')
plt.show()

# Convertir a escala de grises y mostrar la matriz
img_gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
plt.imshow(img_gray, cmap='gray')
plt.title('Escala de Grises')
plt.axis('off')
plt.show()

# Invertir colores
img_invertida = 255 - img_gray
plt.imshow(img_invertida, cmap='gray')
plt.title('Inversión de Colores')
plt.axis('off')
plt.show()

# Recorte de una región
recorte = img_rgb[50:150, 50:150]
plt.imshow(recorte)
plt.title('Recorte')
plt.axis('off')
plt.show()
```

---

## 📊 Resultados Visuales

A continuación se muestran ejemplos de visualización de la imagen original, su conversión a escala de grises, la matriz invertida y un recorte de la imagen.

## ![python_animacion](./resultados/resultado.gif)

## 🧩 Prompts Usados

```text
"¿Cómo represento una imagen como matriz en Python?"
"¿Cómo accedo y modifico píxeles individuales en una imagen con NumPy?"
"¿Cómo visualizo una matriz de imagen en Matplotlib?"
"¿Cómo recorto y proceso regiones de una imagen en OpenCV?"
```

---

## 💬 Reflexión Final

Con este taller reforcé mi comprensión sobre cómo una imagen digital se representa internamente como una matriz de valores numéricos, y cómo manipular estos datos permite modificar visualmente la imagen. Aprendí a utilizar herramientas como NumPy y OpenCV para acceder y modificar píxeles individuales, así como a visualizar los resultados de manera clara con Matplotlib. Además, pude experimentar con operaciones básicas como la conversión a escala de grises, la inversión de colores y el recorte de regiones específicas.

La parte más interesante fue observar cómo pequeños cambios en la matriz afectan directamente la imagen visualizada, lo que ayuda a entender la relación entre los datos y la representación gráfica. El mayor reto fue comprender el manejo de los diferentes formatos de color y asegurarse de que las operaciones se aplicaran correctamente en cada caso. En futuros proyectos, me gustaría explorar técnicas más avanzadas de procesamiento de imágenes, como la detección de bordes o el filtrado, y mejorar la documentación del proceso para facilitar la reproducibilidad y el aprendizaje de otros usuarios.

---
