/* loading an image using p5js 2 */

let img; // declare the variable as normal

function setup() {
  createCanvas(400, 400);
  loadAssets(); // This is the function that will load your assets
}

/* The following function is an asynchronous function that will load your assets in the background. This allows the sketch to jump to draw() straight away rather than waiting */

async function loadAssets(){
  img = await loadImage('steeringwheel.png');
}

function draw() {
  if (img){ // checks to see if the assets have loaded
    image(img,0,0); // display the image if true
  } else{
  background(220); // this could be a loading animation
  }
}
