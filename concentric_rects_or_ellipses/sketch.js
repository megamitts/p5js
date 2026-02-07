
let t = 0;

function setup() {
  createCanvas(400, 400);
 rectMode(CENTER);
  
}

function draw() {
  background(220,50);
  
  noFill();
  strokeWeight(3);
  
  
//   centre
  push();
  translate(width/2, height/2);
  stroke(73, 113, 167);
  concentric();
  pop();
  
 
}

function concentric(){
    for(let count = 0; count<=width; count= count + 12){
    rect(0,0, count, count);
      }
  }
