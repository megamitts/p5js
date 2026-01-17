

let t = 0;
let d = 8;
let X, Y;
let img;
let buffer;
let n = 0.1;


function preload(){
  
  img = loadImage('EXAMPLE_IMAGE.png');
  
}

function setup() {
  createCanvas(400, 400);
  
  //image(img, 0, 0, width, height);
  //loadPixels(); // read pixels
  
  // move image into a buffer so that it doesn't flash on the screen before the effect.
  buffer = createGraphics(width, height);
  buffer.image(img, 0, 0, width, height);
  buffer.loadPixels();
}

function draw() {
  background(0);
  strokeWeight(d);
  
  if (n < 0.9){
  n +=0.05; // speed of scale
  }
  
  
  
  translate(width/2, height/2);
  scale(n);
  translate(-width/2, -height/2);
  
  for(let x = 0; x < width; x += d){
    for(let y = 0; y < height; y+=d){ 
      
      
       X = x + d * cos(y / 55 - x / 340 + t );
       Y = y + d * sin(x / 55 + y / 340 + t );
      
      // get pixel color
      let px = x;  //int(x);
      let py = y; //int(y);
      let idx = (px + py * width) * 4;

      let r = buffer.pixels[idx + 0];
      let g = buffer.pixels[idx + 1];
      let b = buffer.pixels[idx + 2];
      let a = buffer.pixels[idx + 3];
      
      
      stroke(r, g, b, a);
      point(X,Y);
      // fill(r,g,b,a);
      // ellipse(X, Y, d, d);
    }
    
  }
  t+=0.5;
}








