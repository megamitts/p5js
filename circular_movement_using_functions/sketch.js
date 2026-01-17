let t = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  circle(x(200,40), y(200, 40), sin(t/2)*100);
  t+=0.02;
  
}


function x(centre, amplitude){
  return centre+cos(t)*amplitude;
}

function y(centre, amplitude){
  return centre+sin(t)*amplitude;
}
