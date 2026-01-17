/* add 

<script src="
https://cdn.jsdelivr.net/npm/howler@2.2.4/dist/howler.min.js
"></script>

into index.html */

let sound;
let isLoading = true;

function setup() {
  createCanvas(400, 400);

  pew = new Howl({
    src:['pew.mp3']
    
  });
  
  sound = new Howl({
    src: ['sound.mp3'],
    autoplay: true,
    loop: true,
    volume: 0.1,
    onload: () => {
      isLoading = false;
    }
  });

  /* if you take autoplay out you can use sound.play();
  to initiate the sound */


}

function draw() {
  background(220);

  if (isLoading) {
    // Display a loading screen
    textAlign(CENTER, CENTER);
    textSize(32);
    text('Loading...', width / 2, height / 2);
  } else {
    // Once loaded, you can display something else
    // or simply let the background show.
    textAlign(CENTER, CENTER);
    textSize(32);
    text('Sound is playing!', width / 2, height / 2);
  }
}

function mousePressed(){
  
  pew.play();
  
}
