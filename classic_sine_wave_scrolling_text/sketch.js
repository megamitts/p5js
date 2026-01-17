let message = "WELCOME TO THE FUTURE OF THE PAST — THIS IS A CLASSIC AMIGA-STYLE TEXT SCROLLER IN P5.JS!   ";
let chars = [];
let spacing = 20;
let speed = 2;
let amplitude = 20;
let frequency = 0.02;

function setup() {
  createCanvas(600, 600);
  textSize(24);
  textFont('monospace');
  fill(255);
  noStroke();
  
  // Initialize characters offscreen to the right
  for (let i = 0; i < message.length; i++) {
    let x = width + i * spacing;
    chars.push({ char: message[i], x: x });
  }
}

function draw() {
  background(0);

  
  for (let i = 0; i < chars.length; i++) {
    let ch = chars[i];
    let y = height - 30 + sin(ch.x * frequency) * amplitude;
    text(ch.char, ch.x, y);
    ch.x -= speed;

    // Wrap around if character is offscreen to the left
    if (ch.x < -spacing) {
      // Push it to the end of the line
      let lastCharX = chars.reduce((max, c) => max > c.x ? max : c.x, 0);
      ch.x = lastCharX + spacing;
    }
  }
}
