let smileX = 200;
  let smileY = 200;




function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(220);

  // Use Perlin noise to create a gentle swaying motion for the whole flower
  // The noise() function returns values between 0 and 1.
  // We map these to a small range to create a subtle movement.
  let windX = map(noise(frameCount * 0.01), 0, 1, -10, 10);
  let windY = map(noise(frameCount * 0.01 + 1000), 0, 1, -5, 5); // Use a different offset for y-noise

  drawFlower(width / 2 + windX, height / 3 + windY, 100, 16); // Apply wind effect to flower position
}

function drawFlower(x, y, radius, petalCount) {
  fill('green');
  rect(x-10,y,20, 400);
  fill(255, 150, 200); // Petal color
  noStroke();
  let angleStep = TWO_PI / petalCount;

  for (let i = 0; i < petalCount; i++) {
    // Add a small, individual flutter to each petal using noise()
    // By including 'i' in the noise function, each petal gets a unique movement
    let petalFlutterX = map(noise(frameCount * 0.02 + i), 0, 1, -5, 5);
    let petalFlutterY = map(noise(frameCount * 0.02 + i + 2000), 0, 1, -5, 5);

    let angle = i * angleStep;
    let petalX = x + cos(angle) * radius + petalFlutterX;
    let petalY = y + sin(angle) * radius + petalFlutterY;

    circle(petalX, petalY, radius / 2); // Petal shape
  }
  
  
  fill(255, 204, 0); // Center color
  
  ellipse(x, y, 200); // Flower center
  
  fill('green');
  push();
  translate(x - 25, y + 80); 
  rotate(radians(45));
  ellipse(100,100,100,10);
  
  pop();
  
  push();
  translate(x + 25, y + 80); 
  scale(-1,1);
  rotate(radians(45));
  ellipse(100,100,100,10);
  
 pop();
  
  // --- SMILE (Corrected) ---
  
  // 1. Set the stroke color and weight for the smile points
  stroke('black');
  strokeWeight(3);
  
  // 2. Make the smile smaller so it fits on the face
  let smileAmplitude = 40; 
  let smileYOffset = 25; // Move smile down from the absolute center

  // 3. Loop and draw points RELATIVE to x and y
  if (frameCount %120 < 60){
  for (let i = 0; i <= PI; i += 0.01) {
    let smileX = x + smileAmplitude * cos(i);
    let smileY = y + smileYOffset + (smileAmplitude/2) * sin(i); // Use a smaller vertical amplitude
    point(smileX, smileY);
  }
  } else ellipse(x, y+smileYOffset+ (smileAmplitude/2), 70,10);
  
    noStroke();
    fill(0);
    ellipse(x,y, 10, 10);
    ellipse(x-30, y-40, 30,30);
  ellipse(x+30, y-40, 30,30);
}
