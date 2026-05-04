let array = [200,200,250,200,250,250];

let points;


function setup() {
  createCanvas(400, 400);
  points = [
    createVector(100,100),
    createVector(150,100),
    createVector(150,150)
  ];
}

function draw() {
  background(220);
  textSize(40);
  text('Vertices inside arrays',10,50);
  textSize(10);
  text('Using an array with a for loop', 260, 220 );
  beginShape();
  
  for(let i = 0; i < array.length; i+=2){
    
      vertex(array[i], array[i+1]); //i = x, i+1 = y;
    
  }
  
  endShape(CLOSE);
  
  text('Using an array of vertices with a for of loop', 160, 120 );
  beginShape();
  
  for (let p of points){
    vertex(p.x,p.y);
    }
  
  endShape(CLOSE);
}
