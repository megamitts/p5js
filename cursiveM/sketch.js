//p5js 1

function drawCursiveM(x, y, size) {
  noFill();
  stroke(0);
  strokeWeight(size * 0.06);

  let h = size * 0.7; // hump height

  // Initial upstroke and first hump
  beginShape();
  vertex(x, y-20);
  bezierVertex(x, y - h * 0.5,         // rise up
                x + size * 0.05, y - h, // top of entry stroke
                x + size * 0.15, y - h); // top flat
  bezierVertex(x + size * 0.25, y - h,
                x + size * 0.3, y - h * 0.3,
                x + size * 0.3, y);     // back to baseline
  endShape();

  // Second hump
  beginShape();
  vertex(x + size * 0.3, y);
  bezierVertex(x + size * 0.3, y - h,
                x + size * 0.55, y - h,
                x + size * 0.6, y);
  endShape();

  // Third hump
  beginShape();
  vertex(x + size * 0.6, y);
  bezierVertex(x + size * 0.6, y - h,
                x + size * 0.85, y - h,
                x + size * 0.9, y);
  endShape();

  // Optional trailing exit stroke
  beginShape();
  vertex(x + size * 0.9, y);
  bezierVertex(x + size * 0.95, y + size * 0.15,
                x + size * 1.1, y + size * 0.1,
                x + size * 1.15, y);
  endShape();
}


//p5js 2

function drawCursiveM_p5js2(x, y, size) {
  noFill();
  stroke(0);
  strokeWeight(size * 0.06);
  let h = size * 0.7;

  // Initial upstroke and first hump
  beginShape();
  splineVertex(x, y - 20);
  splineVertex(x + size * 0.05, y - h);
  splineVertex(x + size * 0.15, y - h);
  splineVertex(x + size * 0.25, y - h);
  splineVertex(x + size * 0.3, y);
  endShape();

  // Second hump
  beginShape();
  splineVertex(x + size * 0.3, y);
  splineVertex(x + size * 0.425, y - h);
  splineVertex(x + size * 0.575, y - h);
  splineVertex(x + size * 0.6, y);
  endShape();

  // Third hump
  beginShape();
  splineVertex(x + size * 0.6, y);
  splineVertex(x + size * 0.725, y - h);
  splineVertex(x + size * 0.875, y - h);
  splineVertex(x + size * 0.9, y);
  endShape();

  // Trailing exit stroke
  beginShape();
  splineVertex(x + size * 0.9, y);
  splineVertex(x + size * 0.95, y + size * 0.15);
  splineVertex(x + size * 1.1, y + size * 0.1);
  splineVertex(x + size * 1.15, y);
  endShape();
}
