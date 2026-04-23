//p5js2

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);
  
  stroke(0);
  // Horizontal coil
  //drawCoil(100, 100, 500, 100, 30, 8, 3);
  
  stroke(255, 0, 0);
  // Diagonal coil
  //drawCoil(100, 200, 400, 350, 20, 5, 2);
  
  stroke(0, 0, 255);
  // Vertical coil
  drawCoil(250, 150, 250, 200, 20, 10, 2);
  
}

function drawCoil(startX, startY, endX, endY, radius, loops, thickness) {
  // Calculate direction vector from start to end
  let dx = endX - startX;
  let dy = endY - startY;
  let len = sqrt(dx * dx + dy * dy);
  
  // Prevent division by zero
  if (len === 0) return;
  
  // Normalized direction vector
  let dirX = dx / len;
  let dirY = dy / len;
  
  // Perpendicular vector (rotated 90 degrees)
  let perpX = -dirY;
  let perpY = dirX;
  
  // Set stroke properties
  strokeWeight(thickness);
  noFill();
  
  // Calculate number of segments for smooth curve
  let segments = loops * 50;
  
  beginShape();
  for (let i = 0; i <= segments; i++) {
    let t = i / segments;
    
    // Position along the main axis
    let baseX = startX + dx * t;
    let baseY = startY + dy * t;
    
    // Angle based on position and number of loops
    let angle = t * loops * TWO_PI;
    
    // Add depth effect using cos
let depthFactor = 0.3;
let x = baseX + perpX * sin(angle) * radius + dirX * cos(angle) * radius * depthFactor;
let y = baseY + perpY * sin(angle) * radius + dirY * cos(angle) * radius * depthFactor;
    // // Calculate perpendicular offset for coil effect
    // let x = baseX + perpX * sin(angle) * radius;
    // let y = baseY + perpY * sin(angle) * radius;
    
    splineVertex(x, y);
  }
  endShape();
}
