/* Slow, but random, starfield generator using pi and rotate */

let angle =[3,14,15, 92, 65, 35,89,7,9,32,3,8,46,264,338,27,9];
let x = 0;
let y = 0;
let i = 0;
let count = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  stroke(255);
}

function draw() {
  
  translate(width/2, height/2);
  rotate(random(1,360));
   x += cos(random(angle[i]));
  y += sin(random(angle[i]));
  stroke(255, random(100,255));
  point(x,y);

  
  i = (i + 1) % angle.length;  // loops index
  if (count > width){
    
    noLoop();
  }
  translate(-width/2, -height/2);
  
  count++;
}
