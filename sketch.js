let font, point01, point02, bound, bound02, sampleF;
let bg;
let canvas;
let fsize=300;
let img;

function preload(){
font=loadFont("data/Scribble.ttf");
bg=loadImage("data/bg01.jpg")
}


function setup() {
  canvas= createCanvas(windowWidth,windowHeight);
  canvas.position(0, 0);
  canvas.style('position', 'absolute');
  canvas.style('z-index', '-1');
  canvas.style('pointer-events', 'none');

bound = font.textBounds("SSongII's", 0, 0, fsize)
bound02 = font.textBounds("World", 0, 0, fsize)

sampleF=0.3;
}

function draw() {
  image(bg, 0, 0, width, height);
  
  sampleF = map(mouseY, 0, height, 0, 0.3);
  
  point01 = font.textToPoints(
    "SSongII's", width/2-bound.w/2, 410, fsize, {
      sampleFactor: sampleF,
      simplifyThreshold: 0
    });
    
  point02 = font.textToPoints(
    "World", width/2-bound02.w/2, 700, fsize, {
      sampleFactor: sampleF,
      simplifyThreshold: 0
    });
    
for (let i=0; i<point01.length; i++){

  fill(0);
  circle(point01[i].x+random(5), point01[i].y+random(5), 2);
  }
  
for (let i=0; i<point02.length; i++){
  
  fill(0);
  circle(point02[i].x+random(5), point02[i].y+random(5), 2);
  }
}
