
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES); // Work in degrees for easier math
  noLoop(); // Draw once
}

function draw() {
  background(255);
 

  drawStar(200, 200, 20, 10, 5, 87, '#FFD700'); // x, y, outer radius, inner radius, points, rotation, colour
  
  drawCircle(100, 100, 60, '#000000','#00ff00', 45); // x,y, radius, colour1, colour2, rotation
  
  drawPie(300,300,50,12,'#000000', '#0000ff'); // x,y, radius, segments, colour1, colour2
  
  
  drawDottedCircle(200,50,50, '#ff0000','#0000004D');
  //use: drawScratchedCircle(x,y,r, ellipseColour, scratchColour)
  
  
  drawScratchedCircle(100,300,50,45,'#ff0000','#0000004D');
  //use: drawScratchedCircle2(x,y,rc,scratchAngleARG,ellipseColour, scratchColour)
  
  
  drawSwirl(300,100, 100, 10, 5, '#000000', '#ff0000',0.5, 200);
  // use: drawSwirl(cx, cy, maxRadius, turns, step, ellipseColour, swirlColour, scaleSize, rotateAngle)
  
  
  //symbolAngle += 0.01; 
  drawYinYang(45, 30, 40, 0); // change 0 to symbolAngle if you want it to rotate);
  
  
  wigglyCircle(200,320,50,9, '#ff0000');
  //use wigglyCircle(x1,y1,radius, noiseSeed)
  
  // Draw a hexagon at x,y with radius r and colour 
  drawHexagon(60, 200, 60, '#00ff00');
  
  wigglyLine(380, 100, 380, 300, 20, 50, 5, '#ff0000');
 // use: wigglyLine(x1, y1, x2, y2, amp, steps, Weight, colour)
  
}
  



function drawStar(x, y, radius1, radius2, npoints, rotation, colour) {
  
  let angle = 360 / npoints;
  let halfAngle = angle / 2.0;
  push();
  translate(x,y);
  rotate(rotation);
  translate(-x,-y);
  noStroke();
  fill(colour);
  
  beginShape();
  for (let a = 0; a < 360; a += angle) {
    let sx = x + cos(a) * radius1;
    let sy = y + sin(a) * radius1;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius2;
    sy = y + sin(a + halfAngle) * radius2;
    vertex(sx, sy);
  }
  endShape(CLOSE);
  pop();
}

function drawCircle(x, y, diameter, colour1, colour2, rotation) {
  
  push();
  translate(x, y);
  rotate(rotation);
  noStroke();
  fill(colour1);
  arc(0, 0, diameter, diameter, 0, 180, CHORD);
  noStroke();
  fill(colour2);
  arc(0, 0, diameter, diameter, 180, 360,CHORD);
  
  pop();
}


function drawPie(x,y, radius, segments, colour1, colour2) {
  push();
  noStroke();
  translate(x, y); // Move origin to center

  
  
  
  
  let angleStep = 360 / segments;

  for (let i = 0; i < segments; i++) {
    // Alternate colors for visibility
    if (i % 2 === 0) {
      fill(colour1);
    } else {
      fill(colour2);
    }
    //stroke(0);

    // Draw each segment as an arc
    arc(0, 0, radius * 2, radius * 2, i * angleStep, (i + 1) * angleStep, PIE);
  }

  
  noFill();
  
  ellipse(0, 0, radius * 2);
  
  pop();
}


  

function drawDottedCircle(x,y,r, ellipseColour, scratchColour) {

  push();
  randomSeed(99)
  translate(x, y);
  noStroke();
  fill(ellipseColour);
  ellipse(0, 0, r*2, r*2);

  for (let i = 0; i < 5000; i++) {

    let angle = random(360);
    let radius = sqrt(random()) * r;

    let x = cos(angle) * radius;
    let y = sin(angle) * radius;

    if (y < 0) continue; // only fill the bottom half
    stroke(scratchColour);
    strokeWeight(1);
    point(x, y);
  }

  pop();
}




function drawScratchedCircle(x,y,rc,scratchAngleARG,ellipseColour,scratchColour) {

  push();
  randomSeed(99)
  translate(x, y);

  let radius = rc;

  
  fill(ellipseColour)
  noStroke();
  ellipse(0, 0, rc*2, rc*2);

  // Scratches
  for (let i = 0; i < 6000; i++) {

    // Random point inside circle (even distribution)
    let angle = random(360);
    let r = sqrt(random()) * radius;

    let x = cos(angle) * r;
    let y = sin(angle) * r;

    // Scratch direction (global direction)
    let scratchAngle = scratchAngleARG; // try changing this

    // Small random variation
    scratchAngle += random(-0.2, 0.2);

    let len = random(3, 8);

    let x2 = x + cos(scratchAngle) * len;
    let y2 = y + sin(scratchAngle) * len;

    if (y < 0) continue; // only fill the bottom half
    if (dist(0, 0, x2, y2) <= radius) {
      strokeWeight(random(0.5, 1.5));
      stroke(scratchColour);
      line(x, y, x2, y2);
    }
  }

  pop();
}



  




function drawSwirl(cx, cy, maxRadius, turns, step, ellipseColour, swirlColour, scaleSize, rotateAngle) {
  
  push();
  translate(cx,cy);
  rotate(rotateAngle);
  scale(scaleSize);
  
  fill(ellipseColour);
  ellipse(0,0, maxRadius*2,maxRadius*2);
  
  stroke(swirlColour);
  

  let totalAngle = 90 * turns;

  let prevX, prevY;

  for (let a = 0; a <= totalAngle; a += step) {

    let r = map(a, 0, totalAngle, 0, maxRadius);
    let x =  r * cos(a);
    let y =  r * sin(a);

    if (a > 0) {
      // thickness shrinks as spiral grows
      let weight = map(a, 0, totalAngle, 30, 2);
      strokeWeight(weight);
      line(prevX, prevY, x, y);
    }

    prevX = x;
    prevY = y;
  }
  pop();
}

function drawYinYang(x, y, d, rot) {
  push();
  angleMode(RADIANS);
  translate(x, y);
  rotate(rot); 
  noStroke();

  fill(255);
  ellipse(0, 0, d, d);

  fill(40);
  arc(0, 0, d, d, -HALF_PI, HALF_PI);

  ellipse(0, d/4, d/2, d/2);

  fill(255);
  ellipse(0, -d/4, d/2, d/2);

  fill(40);
  ellipse(0, -d/4, d/6, d/6);

  fill(255);
  ellipse(0, d/4, d/6, d/6);
  
  noFill();
  stroke(200, 195, 180);
  strokeWeight(1);
  ellipse(0, 0, d, d);
  angleMode(DEGREES);
  pop();
}





function wigglyCircle(x1,y1,radius, noiseSD, colour){
  
  let baseRadius = radius;
  push();
  noStroke();
  noiseSeed(noiseSD)
  fill(colour);
  angleMode(RADIANS);
  translate(x1,y1);
  
  beginShape();
  let noiseScale = 0.5; // Controls smoothness of wiggles
  
  //baseRadius += sin(frameCount * 0.02); //sin(t*4) * 1; // expand the circle but keep it positive

  for (let angle = 0; angle < TWO_PI; angle += 0.05) {
    // Map angle to noise coordinates
    let xOff = cos(angle) * noiseScale + 1; // shift to avoid negatives
    let yOff = sin(angle) * noiseScale + 1;

    // Use noise to vary radius
    let r = baseRadius + map(noise(xOff, yOff), 0, 1, -40, 40);

    // Convert polar to Cartesian
    let x = r * cos(angle);
    let y = r * sin(angle);
    
    
    vertex(x, y);
  }
  endShape(CLOSE);

  angleMode(DEGREES);
  pop();
  
}


 



function drawHexagon(x, y, radius, colour) {
  
  push();
  translate(x,y);
  angleMode(RADIANS);
  noStroke();
  fill(colour);
  beginShape();
  for (let i = 0; i < 6; i++) {
    // Angle for each vertex (60 degrees apart)
    let angle = TWO_PI / 6 * i - PI / 6; // -PI/6 to make flat top
    let vx =  radius * cos(angle);
    let vy =  radius * sin(angle);
    vertex(vx, vy);
  }
  endShape(CLOSE);
  angleMode(DEGREES);
  pop();
}


 


function wigglyLine(x1, y1, x2, y2, amp, stepCount, Weight, colour) {
  push();
  angleMode(RADIANS);
  beginShape();
  noFill();
  strokeWeight(Weight);
  stroke(colour);
  // Number of segments — tweak for smoothness vs. performance
  let steps = stepCount;
  
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
  angleMode(DEGREES);
  pop();
}
