/* ungolfed version of https://x.com/azeemstweet/status/2012565871604924760 */

/* This will now create a dust/snow effect for the first half of the canvas but once a particle gets beyond the halfway mark it will 
   no longer blank the canvas and the latter half of the canvas will fill up with a trail effect */

let points = [];

function setup() {
  createCanvas(400, 400);
  background(0);
  // Convenience refs
  let R = random;
  let w = width;

  // Build the array of point objects
  for (let band = 0; band < 8; band++) {
    for (let i = 0; i < 25; i++) {
      points.push({
        c: band * 50 + 25,      // base x position column
        o: i - random(25),              // offset for horizontal jitter
        v: R(0.4, 5), //           // velocity / brightness factor
        t: R(PI * band/4),     // phase offset
        y: -30,            // y
        w: 1              // strokeWeight
        
      });
    }
  }
}

function draw() {
  fill(0,150);
  noStroke();
  rect(0,0,400,200);
  
  for (let p of points) {
    stroke(p.v * 255);

    if (p.y > 200 && p.w === 1){
      p.w = random(1,3);
      
    }
    
   
    
    strokeWeight(p.w);
    
    // Horizontal wobble
    let x = p.c + p.o * cos(p.y * 0.02 + p.t);

    // Draw
    point(x, p.y);

    // Move down
    p.y += p.v;

    // Wrap to top
    
    if (p.y > height) {
      
      p.y = 0;
      p.w = 1;
    }
  }
}

