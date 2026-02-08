function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);

}

function draw() {
  background(220);
  
  arcIt(200,200,150,150,0,180, OPEN);
  //x,y,w,h,startAngle,stopAngle, OPEN/CHORD/CLOSE
  
}

function arcIt(x,y,w,h,startAngle,stopAngle, closeForm){
  arc(x,y,w,h,startAngle,stopAngle, closeForm);
}
