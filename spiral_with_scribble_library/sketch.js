let a = 0;
let r =0;
let x,y;
let angle = 0;
let scribble;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
  noFill();
  noLoop();
  scribble = new Scribble();
}

function draw() {
  background(220);
  
  translate(width/2, height/2);
  rotate(angle);
  
  //beginShape();
  while (r < 200){
    
    x = r * cos(a);
    y = r * sin(a);
    scribble.bowing = random(150);
    scribble.scribbleLine(x,y, random(x),random(y));
    
    a +=5;
    r += 0.7;
    
    //endShape();
    
    
  }
  
  a = 0;
  r = 0;
  
  angle+=0.5;
  
}
