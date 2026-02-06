let t = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  let minVal = 1;
  let maxVal = 50;
  let calculatedValue = minVal + ((sin(t) + 1) / 2) * (maxVal - minVal);
  
  rect(200,200,100,100,calculatedValue,50,0,0);
  
  t+=0.02;
}
