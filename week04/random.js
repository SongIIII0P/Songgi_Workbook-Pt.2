let canvas;
let stop= false;
let btn;

function setup() {
  canvas= createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('position', 'absolute');
  canvas.style('z-index', '-1');
  canvas.style('pointer-events', 'none');
  background(255);
  noStroke();

  btn = select("#stop");
  btn.mousePressed(go);


}


function draw() {
  if (!stop) {
    for (let i= 0; i < 50; i++) {
      fill(random(255), random(255), random(255));
      circle(random(width), random(height), 10);
      circle(random(width), random(height), random(60, 200));
    }
  }
}

function go() {
  stop = !stop; 
  btn.html(stop ? "Go" : "Stop");
}
