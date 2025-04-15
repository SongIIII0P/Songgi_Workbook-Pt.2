let canvas;
let video;
let previousFrame;
let noise;
let movement = [];
let font;

function preload() {
  noise = loadImage('data/noise.jpg');
  font = loadFont('data/jersey.ttf')
}

function setup() {
  canvas= createCanvas(windowWidth,windowHeight);
  canvas.position(0, 0);
  canvas.style('position', 'absolute');
  canvas.style('z-index', '-1');
  canvas.style('pointer-events', 'none');


  video = createCapture(VIDEO);
  video.size(windowWidth,windowHeight);
  video.hide();
  textAlign(CENTER, CENTER);
  textFont(font);
}

function draw() {
  background('black');
  video.loadPixels();


  image(video, 0, 0);
  filter(INVERT);
  filter(GRAY);

  
  push();
  blendMode(MULTIPLY);
  tint(255, 70);
  image(noise, 0, 0, width, height);
  //blendMode(OVERLAY);
  //fill(150, 0, 255, 80);  
  //rect(0, 0, width, height);
  pop();

  detectMotion();
  drawMotionText();
}

function detectMotion() {
  if (!video.pixels || video.pixels.length < width * height * 4) return;

  let threshold = 20;
  movement = [];

  if (previousFrame) {
    for (let y = 0; y < height; y += 10) {
      for (let x = 0; x < width; x += 10) {
        let index = (x + y * width) * 4;

        let r1 = video.pixels[index];
        let r2 = previousFrame[index];
        let diff = abs(r1 - r2);

        if (diff > threshold) {
          movement.push({ x, y });
        }
      }
    }
  }

  previousFrame = [...video.pixels];
}

function drawMotionText() {
  fill(255, 0, 0); 
  textSize(20);

  for (let area of movement) {
    let words = ['SSONGI', 'NOISE', 'SKETCH01', 'MOVE', '!!!!!!'];
    let txt = random(words);
    text(txt, area.x, area.y);
  }
}