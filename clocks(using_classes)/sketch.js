let clocks = [];

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  
  for (let i = 0; i < 500; i++) {
    clocks.push(new Clock(
      random(10, 390), // x
      random(10, 390), // y
      random(20, 50),  // diameter
      random(0, 360),  // clock hand 1
      random(0, 360) // clock hand 2
    ));
  }
}

function draw() {
  background(220);

   let noiseScale = 0.02; // Adjust for zoom level of the noise
  loadPixels(); // Access pixel array

  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      // Generate Perlin noise value for each pixel
      let noiseValue = noise(x * noiseScale, y * noiseScale);
      let brightness = noiseValue * 255; // Map noise value to grayscale (0-255)

      // Set pixel color
      let index = (x + y * width) * 4;
      pixels[index] = brightness; // Red
      pixels[index + 1] = brightness; // Green
      pixels[index + 2] = brightness; // Blue
      pixels[index + 3] = 255; // Alpha (fully opaque)
    }
  }

  updatePixels(); // Apply changes to the canvas
  
  
  for (let c of clocks) {
    c.update();
    c.draw();
  }
}

class Clock {
  constructor(x, y, diameter, angle, angle2) {
    this.x = x;
    this.y = y;
    this.diameter = diameter;
    this.radius = diameter / 2.5;
    this.radius2 = diameter / 3;
    
    this.angle = angle;
    this.angle2 = angle2;
    
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.alpha = random(200, 255);
    
    this.speed1 = random(0.5, 2); // rotation speed for hand 1
    this.speed2 = random(0.5, 1); // rotation speed for hand 2
  }
  
  update() {
    // increase angles
    this.angle += this.speed1;
    this.angle2 += this.speed2;
    
    // wrap angles to stay within 0–360
    if (this.angle > 360) this.angle -= 360;
    if (this.angle2 > 360) this.angle2 -= 360;
    
    // recalc hand positions
    this.x1 = this.x + this.radius * cos(this.angle);
    this.y1 = this.y + this.radius * sin(this.angle);
    this.x2 = this.x + this.radius2 * cos(this.angle2);
    this.y2 = this.y + this.radius2 * sin(this.angle2);
  }

  draw() {
    fill(this.r, this.g, this.b, this.alpha);
    circle(this.x, this.y, this.diameter);
    
    // clock hands
    stroke(0);
    line(this.x, this.y, this.x1, this.y1);
    line(this.x, this.y, this.x2, this.y2);
  }
}
