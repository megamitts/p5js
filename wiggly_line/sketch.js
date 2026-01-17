function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  background(220);
  
  stroke(0);
  strokeWeight(1);
 
  noFill();

  wigglyLine(100, 100, 100, 300, 20, 5);
 
}

function wigglyLine(x1, y1, x2, y2, amp, Weight) {
  push();
  beginShape();
  strokeWeight(Weight);
  // Number of segments — tweak for smoothness vs. performance
  let steps = 50;
  
  for (let i = 0; i <= steps; i++) {
    let t = i / steps; // 0 → 1
    // Interpolate between start and end
    let x = lerp(x1, x2, t);
    let y = lerp(y1, y2, t);

    // Add sinusoidal wiggle perpendicular to the line direction
    // Compute direction of line
    let angle = atan2(y2 - y1, x2 - x1);

    // Perpendicular angle
    let perp = angle + HALF_PI;

    // Wiggle offset
    let offset = sin(t * TWO_PI * 3 + frameCount * 0.05) * amp; 
    // (the “3” controls wiggle frequency)

    // Apply offset
    x += cos(perp) * offset;
    y += sin(perp) * offset;

    vertex(x, y);
  }

  endShape();
  pop();
}
