// add a grain effect to the canvas

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  fill('yellow');
  circle(200,200,200);
  addGrain();
}

function addGrain() {
  loadPixels();
  const grainAmount = 64;
  for (let i = 0; i < pixels.length; i += 4) {
    const n = random(-grainAmount, grainAmount);
    pixels[i] += n;     // R
    pixels[i + 1] += n; // G
    pixels[i + 2] += n; // B
    pixels[i + 3] += n; // Alpha
  }
  updatePixels();
}
