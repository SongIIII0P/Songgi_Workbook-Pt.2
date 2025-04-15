let pic, pic02;
let canvas;
let mouse;         
let showEating = false;
let firstPic;

function preload() {
  pic = loadImage("data/apple01.png");
  pic02 = loadImage("data/apple05.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('position', 'absolute');
  canvas.style('z-index', '-1');
  canvas.style('pointer-events', 'none');

  background("black"); 
  imageMode(CENTER);
  firstPic= pic;

  mouse = createImg("data/Eating.gif");
  mouse.style('position', 'absolute');
  mouse.style('z-index', '1');
  mouse.size(1200, 763);
  mouse.position(250, 0);
  mouse.hide(); 
}

function draw() {
  if (!showEating) {
    let size = random(10, 100);
    image(firstPic, mouseX, mouseY, size, size);
  }
}

function mousePressed() {
  showEating = !showEating; 

  if (showEating) {
    background("black"); 
    mouse.show();       
  } else {
    background("black");
    mouse.hide();  
    firstPic= pic02;     
  }
}