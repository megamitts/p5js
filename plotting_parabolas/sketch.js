/*

Small program to show a parabolic curve

https://www.mathsisfun.com/geometry/parabola.html

*/

let x = -10;
let y =-10;
let scale_size = 20;

function setup() {
  createCanvas(400, 400, WEBGL);
  background(220);
  strokeWeight(1);
  line(-200,0, 200,0);
  line(0,-200, 0, 200);
  
  for(i = 0; i < 200; i+=10){
    line(-i,0, -i, 10);
  }
  for(i = 0; i < 200; i+=10){
    line(i,0, i, 10);
  }
  
  for(i = 0; i < 200; i+=10){
    line(0,-i, 10, -i);
  }
  for(i = 0; i < 200; i+=10){
    line(0,i, 10, i);
  }

  
  
}

function draw() {
  
  scale(scale_size);
  strokeWeight(5);
  
  
  
  
 
 // y = -0.08*(x**2)+0.6*x + 5.9;
  //y = 0.05*(x**2) + 0.6*x + 5.9;
  
   y = (x**2);
   point(x,-y);
   x+=0.02;
  
  
  
  
  printXY();
  

  
}

function printXY(){
  const Xel = document.getElementById('X');
  
  let xval = x*scale_size
  Xel.innerText = xval.toFixed(2);
  const Yel = document.getElementById('Y');
  
  let yval = y*scale_size;
  Yel.innerText = yval.toFixed(2);
  
  const mx = document.getElementById('mX');
  mx.innerText = mouseX-width/2;
  const my = document.getElementById('mY');
  my.innerText = mouseY-height/2;
  
}
