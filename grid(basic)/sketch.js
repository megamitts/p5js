let grid = [];
let cellSize = 40;
let cols = 10;
let rows = 10;


function setup() {
  createCanvas(400, 400);
  
  initGrid();
}

function draw() {
  background(220);
  
  
  
  
  
  
  grid.forEach(cell => {
    
    fill(cell.colour);
    
    //simple fill the grid with rects
    rect(cell.x, cell.y, cellSize, cellSize);
  
    
  });

    
  
}

function initGrid(){
  
  grid = []; // clear existing grid
  for (let i = 0; i < cols; i++) { // Loop through columns
    for (let j = 0; j < rows; j++) { // Loop through rows
      grid.push({
        i,j, // push i and j for cell indices for later use
        x:  i * cellSize,
        y:  j * cellSize,
        colour: color(random(255), random(255), random(255))
        
      });
      
    }
  }
      
      
}
