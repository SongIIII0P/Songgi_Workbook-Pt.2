let canvas;
let e1, e2, e3;

function setup() {
  canvas= createCanvas(windowWidth,windowHeight);
  canvas.position(0, 0);
  canvas.style('position', 'absolute');
  canvas.style('z-index', '-1');
  canvas.style('pointer-events', 'none');

  noStroke();
  e1 = new Eye(600, height/2, 250);
  e2 = new Eye(1000, height/2, 250);

}

function draw() {
  background('red');
  fill(255,252,212);
  rect(400, 300, 800, 600,50);
  
  fill('black');
  ellipse(750,650, 20,10);
  ellipse(850,650, 20,10);
  
  fill('red');
  ellipse(760,750, 150,50);
  ellipse(850,750, 150,50);
  
 
  
  push();
  stroke('black');
  line(685,750,925,750);
   pop();
  
  e1.update(mouseX, mouseY);
  e2.update(mouseX, mouseY);
 

  e1.display();
  e2.display();
 
}

class Eye {
  constructor(tx, ty, ts) {
    this.x = tx;
    this.y = ty;
    this.size = ts;
    this.angle = 0.0;
  }

  update(mx, my) {
    this.angle = atan2(my - this.y, mx - this.x);
  }

  display() {
    push();
    translate(this.x, this.y);
    fill(255);
    ellipse(0, 0, this.size, this.size);
    rotate(this.angle);
    let circleHue = map(mouseX, 0, width, 0, 255);
    fill(circleHue,100,100);
    ellipse(this.size / 4, 0, this.size / 2, this.size / 2);
    pop();
  }
}
