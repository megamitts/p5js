let angle = 0;
let x;
let y;
let amp = 0;
let speed = 0.07;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // Calculate value in range [1, 20] using sine

/* 
sin(t) outputs values between -1 and 1.
(sin(t) + 1) / 2 shifts it to [0, 1] to get positive only numbers
Multiply by (maxVal - minVal) to scale to the desired range.
Add minVal to shift the range start ( ie. ignore 0)

*/
  
  let minVal = 1;
  let maxVal = 20;
  let calculatedValue = minVal + ((sin(angle) + 1) / 2) * (maxVal - minVal);

  
  x = 200 + amp * cos(angle);
  y = 200 + amp * sin(angle);
  textSize(calculatedValue);
  text('X', x, y);
  
  if (amp < 0 || amp > 150 ){
   
    speed = speed * -1;
    
  }
  angle +=0.02;
  amp = amp + speed;
  
  
  
}
