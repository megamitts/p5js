let t = 0;
let d = 8;
let X, Y;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  strokeWeight(3);
  
  for(let x = 0; x < width; x += d){
    for(let y = 0; y < height; y+=d){ // y += d/4 to make a full line
      
      stroke(255);
      
       X = x + d * cos(y / 55 - x / 34 + t );
       Y = y + d * sin(x / 55 + y / 34 + t );
      
      point(X,Y);
      
      
    }
    
  }
  t+=0.02;
}



