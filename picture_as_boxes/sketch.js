/* original: https://openprocessing.org/sketch/2845166 */

let img, W, H, w, h, GR, N, M, STEP; 

function preload(){
  img = loadImage('EXAMPLE_PIC.png')
}

function setup() {
  createCanvas(img.width, img.height, WEBGL)
   W = width; 
     H = height;
   w = W/2;
  h = H/2;
   GR = createGraphics(W, H);
   N = 40;
  M = N*1.5;
   WX = W/N;
  WY = H/M;
  STEP = 5;
  GR.image(img, 0, 0)
  // image(GR, -w, -h)
}

let t = 0
function draw() {
  // noLoop()
  background(w)
  translate(-w, -h)
  for (let i = 0; i < N; i++){
    for (let j = 0; j < M; j++){
      const X = i * WX, Y = j * WY
      let I = 0
      for (let x = 0; x < WX; x += STEP){
        for (let y = 0; y < WY; y += STEP){
          I += (brightness(img.get(X+x, Y+y)))/STEP/STEP
        }
      }
      push()
      normalMaterial()
      translate(X, Y)
      stroke('slategrey')
      fill(img.get(X+WX/2, Y+WY/2).map((x,i)=>i<3?degitize(x):x))
      rotateX(t/3)
      rotateY(I)
      rotateZ(I)
      box((log(I)+2)*2)
      pop()
    }
  }
  // print("E")
    t++
}

function degitize(n, N=5){
  return int(n/N)*N
}
