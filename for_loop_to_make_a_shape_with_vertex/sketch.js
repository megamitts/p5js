let x;
let y;

function setup() {
  createCanvas(400, 400);
  noLoop();
  angleMode(DEGREES);
}

function draw() {
  background(220);
  
  beginShape();
  for(let a = 0; a < 360; a+=36){ // change a+ to how many sides (36 would be 10)
    x = 200 + 50 * cos(a);
    y = 200 + 50 * sin(a);
  
    
    vertex(x,y);
  
  }
  endShape(CLOSE);
}
