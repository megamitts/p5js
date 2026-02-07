// routine will fill the canvas with translucent circles

let layers = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  colorMode(HSB, 360, 100, 100, 100);
  
  // Generate multiple translucent layers
  for (let i = 0; i < 50; i++) {
    layers.push({
      x: random(width),
      y: random(height),
      r: random(50, 300),
      hue: random(360),
      alpha: random(10, 40)
    });
  }
}

function draw() {
  background(0, 0, 10); // dark background
  
  // Draw soft overlapping circles
  for (let l of layers) {
    fill(l.hue, 80, 100, l.alpha);
    ellipse(l.x, l.y, l.r);
    
    // Gentle movement for organic feel
    l.x += random(-0.5, 0.5);
    l.y += random(-0.5, 0.5);
  }
}

// Resize canvas dynamically
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
