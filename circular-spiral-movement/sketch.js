let angle = 0;
let x;
let y;
let amp = 0;
let speed = 0.07;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  
  x = 200 + amp * cos(angle);
  y = 200 + amp * sin(angle);
  text('X', x, y);
  
  if (amp < 0 || amp > 150 ){
   
    speed = speed * -1;
    
  }
  angle +=0.02;
  amp = amp + speed;
  
  
  
}
