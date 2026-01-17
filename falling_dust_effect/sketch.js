/* ungolfed version of https://x.com/azeemstweet/status/2012565871604924760 */

let points = [];

function setup() {
  createCanvas(400, 400);
  
  // Convenience refs
  let R = random;
  let w = width;

  // Build the array of point objects
  for (let band = 0; band < 9; band++) {
    for (let i = 0; i < 25; i++) {
      points.push({
        c: band * 50 + 25,      // base x position column
        o: i - 25,              // offset for horizontal jitter
        v: R(0.5, 1),           // velocity / brightness factor
        t: R(PI * band / 4),     // phase offset
        y: R(height)            // y
      });
    }
  }
}

function draw() {
  background(0);

  for (let p of points) {
    stroke(p.v * 255);

    // Horizontal wobble
    let x = p.c + p.o * cos(p.y * 0.02 + p.t);

    // Draw
    point(x, p.y);

    // Move down
    p.y += p.v;

    // Wrap to top
    if (p.y > height) {
      p.y = 0;
    }
  }
}

