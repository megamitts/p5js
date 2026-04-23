let startX = 100;
let endX = 300;

function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  background(220);
  
  for (let x = startX; x <= endX; x += 20) {
    // 1. Normalize x to a range of -1 to 1
    let centerX = (startX + endX) / 2; // 200
    let range = (endX - startX) / 2;   // 100
    let normalizedX = (x - centerX) / range;
    
    // 2. Parabola formula: y = x^2 
    // This gives a value between 0 and 1
    let curvy = Math.pow(normalizedX, 2);
    
    // 3. Map that curve to your desired pixel height (100 pixels)
    // Starting at 100 and going down to 200
    let y = 300 - (curvy * 100);
    
    circle(x, y, 10);
  }
}
