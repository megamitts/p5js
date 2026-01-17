let particles = [];

  


function setup() {
  createCanvas(400, 400);
  
}

let player = {
  
  x: 200,
  y: 200,
  r: 50
}



function draw() {
  background(0);
  
  // spawn a new explosion every 30 frames 
  if (frameCount % 30 === 0) {
    let x = player.x;
    let y = player.y;
    let c = [random(100,255), random(100,255), random(100,255)]; // random bright color
    let num = random(10, 40); //number of particles
    particles = particles.concat(createExplosion(x, y, num, c)); // add new particles to the end of the old array so that the previous fireworks don't immediately disappear
    
  }
  
  // update & draw particles
  for (let i = particles.length - 1; i >= 0; i--) {
    let p = particles[i];
    p.update();
    p.draw();
    if (p.isDead()) {
      particles.splice(i, 1); // remove the current particle 
    }
  }
  
  
  push();
  fill(255);
  circle(player.x, player.y, player.r);
  movePlayer();
  
  
  
  
  pop();
  
  
  
}

// Simple particle for explosion effects
class Particle {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    
    // Create a random angle
    let angle = random(TAU); // TWO_PI/TAU is a full circle in radians
    
    // Create a random speed
    let speed = random(0.5, 3);
    
    // Calculate vx and vy using trigonometry
    this.vx = cos(angle) * speed;
    this.vy = sin(angle) * speed;
    
    this.life = 255;
    this.color = color;
  }
  
  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.vy += 0.01;  // gravity - slightly increased for a more noticeable effect
    this.life -= 2; 
  }
  
  draw() {
    noStroke();
    fill(this.color[0], this.color[1], this.color[2], this.life);
    circle(this.x, this.y, map(this.life, 0, 255, 1, 6)); 
  }
  
  isDead() {
    return this.life <= 0;
  }
}

// Usage: Create explosion at x, y
function createExplosion(x, y, numParticles, color) {
  let newParticles = [];
  for (let i = 0; i < numParticles; i++) {
    newParticles.push(new Particle(x, y, color));
  }
  return newParticles;
}

function movePlayer() {
  let dx = 0;
  let dy = 0;

  if (keyIsDown(87)) { // W
    dy -= 1;
  }
  if (keyIsDown(83)) { // S
    dy += 1;
  }
  if (keyIsDown(65)) { // A
    dx -= 1;
  }
  if (keyIsDown(68)) { // D
    dx += 1;
  }

  // Normalize diagonal movement so speed is consistent
  if (dx !== 0 && dy !== 0) {
    dx *= 0.7071; // 1/√2
    dy *= 0.7071;
  }

  player.x += dx;
  player.y += dy;
  
  // Boundary checks
  player.x = constrain(player.x, player.r/2, width - player.r/2);
  player.y = constrain(player.y, player.r/2, height - player.r/2);
}


