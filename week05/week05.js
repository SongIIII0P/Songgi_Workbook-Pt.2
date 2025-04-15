let bottomImg, topImg;
let canvas;


function preload(){
  bottomImg=loadImage('./data/black.jpg');
  topImg=loadImage('./data/colour.jpg');
}


function setup() {
  canvas= createCanvas(windowWidth,windowHeight);
  canvas.position(0, 0);
  canvas.style('position', 'absolute');
  canvas.style('z-index', '-1');
  canvas.style('pointer-events', 'none');
  background(200,200,0);
  bottomImg.resize(width,height);
  topImg.resize(width,height);
  image(bottomImg,0,0);
}


function draw() {

}


function mouseDragged (){
  
  copy(topImg,mouseX,mouseY,120,120,mouseX, mouseY, 120,120);
}
  
