// p5.js sketch: Drawing a sphere using only point() commands

let radius = 150; // Radius of the sphere
let detail = 30;  // Number of steps for latitude/longitude (higher = smoother)

function setup() {
  createCanvas(500, 500, WEBGL); // Create a 3D canvas
              
  background(0);                 // Black background
  stroke(255);                   // White points
  strokeWeight(3);               // Size of each point
  noFill();                      // No fill needed since we use points only
}

function draw() {
  background(0);                 // Clear frame each draw
  rotateY(frameCount * 0.05);     // Slowly rotate sphere for 3D effect
  rotateX(frameCount * 0.05);

  // Loop over latitude (phi) from -90° to +90°
  for (let i = 0; i <= detail; i++) {
    let phi = map(i, 0, detail, -HALF_PI, HALF_PI); // Latitude in degrees
    let y = radius * sin(phi);            // Y position
    let r = radius * cos(phi);            // Radius of current latitude circle

    // Loop over longitude (theta) from 0° to 360°
    for (let j = 0; j <= detail; j++) {
      let theta = map(j, 0, detail, 0, TWO_PI); // Longitude in degrees
      let x = r * cos(theta);                // X position
      let z = r * sin(theta);                // Z position

      point(x, y, z); // Draw a point at calculated 3D position
    }
  }
}
