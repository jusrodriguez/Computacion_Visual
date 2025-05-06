void setup() {
  size(600, 600, P3D);  // Sketch 3D
  noStroke();
}

void draw() {
  background(10);
  lights();  // Luces para volumen

  float t = millis() / 1000.0;  // Tiempo en segundos

  // Aislar transformaciones
  pushMatrix();

  // Mover al centro de la pantalla
  translate(width / 2, height / 2, 0);

  // Traslación ondulada en X e Y
  float offsetX = sin(t) * 100;
  float offsetY = cos(t) * 50;
  translate(offsetX, offsetY, 0);

  // Rotación continua en dos ejes
  rotateX(t);
  rotateY(t * 1.5);

  // Escalado cíclico con sin()
  float escala = 1 + 0.3 * sin(t * 2);
  scale(escala);

  // Dibujar cubo
  fill(160, 50, 255);
  box(100);  // Cubo de 100x100x100

  popMatrix();
}
