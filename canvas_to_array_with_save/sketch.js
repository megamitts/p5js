/*

A routine that uses get() to grab the contents of the canvas at the time the s key is pressed and adds to a snapshot array. Pressing the l key will 
cause the loop to break and then display the saved canvases as a grid. Pressing r will save the array as a set of images to your pc.

Possible use case: photo mode in a game.

*/


let snapshots = [];

function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  // Example drawing: random colorful circles
  fill(random(255), random(255), random(255));
  ellipse(random(width), random(height), 30, 30);
}

function keyPressed() {
  // 1. Capture a snapshot
  if (key === 's') {
    let img = get(); 
    snapshots.push(img);
    console.log("Snapshot saved. Total:", snapshots.length);
  }
  
  // 2. Display all snapshots in a grid
  if (key === 'l') {
    noLoop();
    background(220);
    let cols = ceil(sqrt(snapshots.length));
    let size = width / cols;
    for (let i = 0; i < snapshots.length; i++) {
      let x = (i % cols) * size;
      let y = floor(i / cols) * size;
      image(snapshots[i], x, y, size, size);
    }
  }

  // 3. Save all snapshots to your computer
  if (key === 'r') {
    for (let i = 0; i < snapshots.length; i++) {
      // Syntax: p5Image.save(filename, extension)
      snapshots[i].save('my_snapshot_' + i, 'jpg');
    }
    console.log("All " + snapshots.length + " files are being downloaded.");
  }
}
