const spaceWidth = 1474;
const spaceHeight = 1474;
let ratio = 1;

// Colors scheme by Ezra Igor...
let colorsScheme = [
  "#FFFFFF",
  "#DD1C1A",
  "#E4572E",
  "#F3A712",
  "#FFD400",
  "#EAD94C",
  "#014717",
  "#169873",
  "#6AD5CB",
  "#17BEBB",
  "#95A3A4",
  "#06AED5",
  "#004C74",
  "#B4CDED",
  "#340068",
  "#F79AD3",
  "#740747",
  "#D88C9A",
  "#FF6978",
];

let particlesCore = [];
let particlesOrbit1 = [];
let particlesOrbit2 = [];
let particlesOrbit3 = [];
let particlesOrbit4 = [];
let particlesOrbit5 = [];
let particlesOrbit6 = [];
let particlesOrbit7 = [];
let particlesOrbit8 = [];

let numParticles = $fx.getParam("num_particles");

function fxMinterRandomness(min, max) {
  return $fx.randminter() * (max - min) + min;
}

function fxHashRandomness(min, max) {
    return $fx.rand() * (max - min) + min;
  }

function setup() {
  createCanvas(spaceWidth, spaceHeight);
  secondarySpace = createGraphics(spaceWidth, spaceHeight);
  windowResized();

  // Create core at the center of the canvas...
  for (let i = 0; i < numParticles; i++) {
    particlesCore[i] = new Particle(
      $fx.randminter() * TWO_PI,
      $fx.getParam("core_speed") * 0.01,
      fxMinterRandomness(77, -11),
      fxHashRandomness(-77, 11),
      fxMinterRandomness(-90, 90)
    );
  }

  // Create particles orbit #1 - circular...
  for (let i = 0; i < numParticles; i++) {
    particlesOrbit1[i] = new Particle(
      $fx.randminter() * TWO_PI,
      $fx.getParam("orbit1_speed") * 0.01,
      fxMinterRandomness(-44, -132),
      fxHashRandomness(44, 132),
    );
  }

  // Create particles orbit #2 - horizontal ellipse...
  for (let i = 0; i < numParticles; i++) {
    particlesOrbit2[i] = new Particle(
      $fx.randminter() * TWO_PI,
      $fx.getParam("orbit2_speed") * 0.01,
      fxMinterRandomness(-77, -253),
      fxHashRandomness(77, 132),
      $fx.getParam("orbit2_inclination")
    );
  }

  // Create particles orbit #3 - vertical ellipse...
  for (let i = 0; i < numParticles; i++) {
    particlesOrbit3[i] = new Particle(
      $fx.randminter() * TWO_PI,
      $fx.getParam("orbit3_speed") * 0.01,
      fxMinterRandomness(-77, -132),
      fxHashRandomness(77, 253),
      $fx.getParam("orbit3_inclination")
    );
  }

  // Create particles for orbit #4 - wide horizontal ellipse...
  for (let i = 0; i < numParticles; i++) {
    particlesOrbit4[i] = new Particle(
      $fx.randminter() * TWO_PI,
      $fx.getParam("orbit4_speed") * 0.01,
      fxMinterRandomness(-110, -440),
      fxHashRandomness(77, 143),
      $fx.getParam("orbit4_inclination")
    );
  }

  // Create particles orbit #5 - large circular...
  for (let i = 0; i < numParticles; i++) {
    particlesOrbit5[i] = new Particle(
      $fx.randminter() * TWO_PI,
      $fx.getParam("orbit5_speed") * 0.01,
      fxMinterRandomness(-110, -253),
      fxHashRandomness(110, 253)
    );
  }

  // Create particles for orbit #6 - diagonal ellipse...
  for (let i = 0; i < numParticles; i++) {
    particlesOrbit6[i] = new Particle(
      $fx.randminter() * TWO_PI,
      $fx.getParam("orbit6_speed") * 0.01,
      fxMinterRandomness(-121, -660),
      fxHashRandomness(121, 154),
      $fx.getParam("orbit6_inclination")
    );
  }

  // Create particles for orbit #7 - diagonal ellipse...
  for (let i = 0; i < numParticles; i++) {
    particlesOrbit7[i] = new Particle(
      $fx.randminter() * TWO_PI,
      $fx.getParam("orbit7_speed") * 0.01,
      fxMinterRandomness(-121, -660),
      fxHashRandomness(121, 154),
      $fx.getParam("orbit7_inclination")
    );
  }

  // Create particles for orbit #8 - huge circular...
  for (let i = 0; i < numParticles; i++) {
    particlesOrbit8[i] = new Particle(
      $fx.randminter() * TWO_PI,
      $fx.getParam("orbit8_speed") * 0.01,
      fxMinterRandomness(-726, 0),
      fxHashRandomness(0, 0),
      fxMinterRandomness(-90, 90)
    );
  }
}

function draw() {
  secondarySpace.background(0); // Set black canvas background...
  secondarySpace.noStroke();

  // Draw particles orbit #8 - huge circular...
  secondarySpace.fill(colorsScheme[$fx.getParam("orbit8_color")]); // Set fill color...
  for (let i = 0; i < numParticles; i++) {
    particlesOrbit8[i].update();
    particlesOrbit8[i].display();
  }

  // Draw core at the center of the canvas...
  secondarySpace.fill(colorsScheme[$fx.getParam("core_color")]); // Set fill color...
  for (let i = 0; i < numParticles; i++) {
    particlesCore[i].update();
    particlesCore[i].display();
  }

  // Draw particles orbit #1 - circular...
  secondarySpace.fill(colorsScheme[$fx.getParam("orbit1_color")]); // Set fill color...
  for (let i = 0; i < numParticles; i++) {
    particlesOrbit1[i].update();
    particlesOrbit1[i].display();
  }

  // Draw particles orbit #2 - horizontal ellipse...
  secondarySpace.fill(colorsScheme[$fx.getParam("orbit2_color")]); // Set fill color...
  for (let i = 0; i < numParticles; i++) {
    particlesOrbit2[i].update();
    particlesOrbit2[i].display();
  }

  // Draw particles orbit #3 - vertical ellipse...
  secondarySpace.fill(colorsScheme[$fx.getParam("orbit3_color")]); // Set fill color...
  for (let i = 0; i < numParticles; i++) {
    particlesOrbit3[i].update();
    particlesOrbit3[i].display();
  }

  // Draw particles orbit #4 - wide horizontal ellipse...
  secondarySpace.fill(colorsScheme[$fx.getParam("orbit4_color")]); // Set fill color...
  for (let i = 0; i < numParticles; i++) {
    particlesOrbit4[i].update();
    particlesOrbit4[i].display();
  }

  // Draw particles orbit #5 - tall vertical ellipse...
  secondarySpace.fill(colorsScheme[$fx.getParam("orbit5_color")]); // Set fill color...
  for (let i = 0; i < numParticles; i++) {
    particlesOrbit5[i].update();
    particlesOrbit5[i].display();
  }

  // Draw particles orbit #6 - diagonal ellipse...
  secondarySpace.fill(colorsScheme[$fx.getParam("orbit6_color")]); // Set fill color...
  for (let i = 0; i < numParticles; i++) {
    particlesOrbit6[i].update();
    particlesOrbit6[i].display();
  }

  // Draw particles orbit #7 - diagonal ellipse...
  secondarySpace.fill(colorsScheme[$fx.getParam("orbit7_color")]); // Set fill color...
  for (let i = 0; i < numParticles; i++) {
    particlesOrbit7[i].update();
    particlesOrbit7[i].display();
  }

  image(secondarySpace, 0, 0, spaceWidth * ratio, spaceHeight * ratio);
}

class Particle {
  constructor(angle, speed, radiusX, radiusY = radiusX, inclination = 0) {
    this.angle = angle; // Initial angle...
    this.speed = speed; // Speed...
    this.radiusX = radiusX; // Radius in x-direction...
    this.radiusY = radiusY; // Radius in y-direction...
    this.inclination = inclination; // Inclination angle...
  }

  update() {
    // Update particle position for inclined elliptical orbit...
    let centerX = spaceWidth / 2;
    let centerY = spaceHeight / 2;
    let x =
      centerX +
      cos(this.angle) * this.radiusX * cos(this.inclination) -
      sin(this.angle) * this.radiusY * sin(this.inclination);
    let y =
      centerY +
      sin(this.angle) * this.radiusY * cos(this.inclination) +
      cos(this.angle) * this.radiusX * sin(this.inclination);
    this.position = createVector(x, y);
    this.angle += this.speed; // Adjust angle based on speed...
  }

  display() {
    // Draw the particles...
    secondarySpace.ellipse(
      this.position.x,
      this.position.y,
      spaceWidth * 0.00275,
      spaceHeight * 0.00275
    );
  }
}

function windowResized() {
  ratio = window.innerWidth / spaceWidth;
  if (spaceHeight * ratio > window.innerHeight) {
    ratio = window.innerHeight / spaceHeight;
  }

  resizeCanvas(spaceWidth * ratio, spaceHeight * ratio);
}
