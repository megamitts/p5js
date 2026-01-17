/* old paper style texture */

function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  background(220);
  stroke(0,5);
  noFill();
  for(let i = 0; i < 1000; i++){
    
    circle(random(400), random(400), random(50,100));
    
  }
}
