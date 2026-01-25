let x1 = 150;
let y1 = 200;
let x2 = 250;
let y2 = 200;

let angle = 0;
    
let d;

let img;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  let d = dist(x1, y1, x2, y2)/2;
  textSize(25);
  text('🥰', x1, y1);
  
  text('😗', x1+d, y1);
  text('🤠', x2, y2);
  
  x1 = 150 + 50 * sin(angle);
  x2 = 250 + 50 * -cos(angle);
  y1 = 200 + 100 * sin(angle);
  y2 = 200 + 100 * -sin(angle);
  
  angle += 0.02;
  
 
}
