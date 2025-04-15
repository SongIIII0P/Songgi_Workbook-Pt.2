let capture;
let dotcolour;
let dots = [];
let canvas;

function setup() {
  canvas= createCanvas(windowWidth,windowHeight);
  canvas.position(0, 0);
  canvas.style('position', 'absolute');
  canvas.style('z-index', '-1');
  canvas.style('pointer-events', 'none');

  capture = createCapture(VIDEO);
  capture.size(windowWidth, windowHeight);
  capture.hide();
}

function draw() {
  image(capture, 0, 0, windowWidth, windowHeight);

  for (let i = 0; i < 15; i++) {
    let x = random(width);
    let y = random(height);
    dotcolour = capture.get(x, y);
    let rectWidth = random(5, 50);
    let rectHeight = random(5, 70);
    dots.push({ x, y, dotcolour, rectWidth, rectHeight });
  }

 
  for (let dot of dots) {
    fill(dot.dotcolour);
    rect(dot.x, dot.y, dot.rectWidth, dot.rectHeight);
  }
}

function mouseDragged() {
  dots = dots.filter(dot => {
    let d = dist(dot.x, dot.y, mouseX, mouseY);
    return d > 100; 
  });
}

function mousePressed(){
  capture.blendMode(OVERLAY);
  capture.fill(150, 0, 255, 80);


}