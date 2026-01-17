// Text along a 180-degree curve in p5.js
let t = 0;
let message = "Hello, p5.js Curve!";
let radius = 150; 

function setup() {
  createCanvas(400, 500);
  textSize(24);
  textAlign(CENTER, CENTER);
  //noLoop(); 
}

function draw() {
  
     
  background(240);
  
  push();
  translate(width/2, height/2);
  rotate(t);
  translate(-width/2, -height/2);
 
  
 // // Draw guide semicircle (optional)
 //  noFill();
 //  stroke(200);
 //  arc(width / 2, height / 2, radius * 2, radius * 2, PI, 0);

  aboveText();
  belowText();
  
  pop();
  t += 0.002;
}

function aboveText(){
  push();
  translate(width / 2, height / 2);
  
  // Calculate total angular span
  // Use (message.length) to give a bit of padding at the ends
  let angleStep = PI / (message.length - 1); 

  for (let i = 0; i < message.length; i++) {
    let char = message[i];
    
    // Start at PI (left side) and move toward TWO_PI (right side)
    let angle = PI + i * angleStep; 

    // Calculate position
    let x = radius * cos(angle);
    let y = radius * sin(angle);

    push();
    translate(x, y);
    
    // Rotate the character to be perpendicular to the radius
    // Adding HALF_PI aligns the bottom of the letter to the arc
    rotate(angle + HALF_PI); 
    
    noStroke();
    fill(0);
    text(char, 0, 0);
    
    pop();
    
    
  }
  pop();
  
}

function belowText(){
  
   // Calculate total angular span for text
  let angleStep = PI / (message.length - 1); // Spread over 180 degrees

  for (let i = 0; i < message.length; i++) {
    let char = message[i];
    let angle = PI - i * angleStep; // Start from left (PI) to right (0)

    // Character position on arc
    let x = width / 2 + radius * cos(angle);
    let y = 40 + height / 2 + radius * sin(angle); // add a slight space so as not to overlap.

    push();
    translate(x, y);
    rotate(angle - HALF_PI); // Rotate so text is tangent to arc
    noStroke();
    fill(0);
    text(char, 0, 0);
    pop();
  }
  
}
