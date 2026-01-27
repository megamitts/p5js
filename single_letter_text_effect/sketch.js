let t = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  textSize(20);
  text(...'hi there'[int(t/71)%8], 200,200); // create a spread ('h','i',' ','t') etc
  t++;
  
}
