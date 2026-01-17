function textFadeInOut(t, start, duration, fadeDuration){
  return{
    text: t,
    start: start,
    duration: duration,
    fadeDuration: fadeDuration,
    end: start + duration + 2*fadeDuration,
    a: 0,
    display: function() {
      push()
        if(frameCount >= this.start && (frameCount - this.start) < this.fadeDuration){
          this.a = easeInOutSine((frameCount - this.start) / this.fadeDuration)
        } else if(frameCount > this.start + this.fadeDuration + this.duration){
          this.a = easeInOutSine((this.end - frameCount)/this.fadeDuration)
        }
        if(frameCount > this.end) this.a = 0;
        fill(0, 0, 255, this.a*255)
        text(this.text, 200, 200);
      pop()
    }
  }
}

function setup() {
  createCanvas(400, 400);
  
  textSize(26)
  textAlign(CENTER)
  
  // textFadeInOut( "TEXT", startFrame,  duration, fadeDuration)
  
  // fade in starts from the start frame. 
  // total duration is start + duration + 2*fadeDuration
  
  
  textSequence = [
    textFadeInOut("Hello", 0, 10, 60),
    textFadeInOut("what's up?", 130, 40, 40),
    textFadeInOut("add any text you want", 300, 60, 60),
    textFadeInOut("to the textSequence array", 480, 60, 60),
    textFadeInOut("specifying the arguments", 700, 60, 60),
    textFadeInOut("('text', start, duration, fadeLen)", 860, 360, 100),
  ]
  
  
}

function draw() {
  background(220);
  
  for(let i = 0; i <textSequence.length; i++){
    ft = textSequence[i];
    ft.display()
  }
  
}

function easeInOutSine(x) {
  return -(Math.cos(Math.PI * x) - 1) / 2;
}
