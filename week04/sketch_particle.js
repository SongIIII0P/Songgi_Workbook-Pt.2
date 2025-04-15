let particles = [];
let step = 8;
let pointSize = 15;
let ease = 0.08; 
let canvas;

function setup() {
  canvas= createCanvas(windowWidth,windowHeight);
  canvas.position(0, 0);
  canvas.style('position', 'absolute');
  canvas.style('z-index', '-1');
  canvas.style('pointer-events', 'none');
  //noCursor(); 

  for (let x= 0; x < width; x+= step) {
    for (let y= 0; y < height; y+= step) {
      let p = new Particle(
        x + random(-5, 5),
        y + random(-5, 5),
        pointSize
      );
      particles.push(p);
    }
  }
}

function draw() {
  background("red");

  particles.forEach((particle) => {
    particle.update();
    particle.show(pointSize);
  });
}

class Particle {
  constructor(x, y, size) {
    this.x = this.ox = x;
    this.y = this.oy = y;
    this.size = size;
  }

  update() {
    let p = { x: mouseX, y: mouseY };
    let d = dist(this.x, this.y, p.x, p.y);
    let a = atan2(this.y - p.y, this.x - p.x);
    let f = 30 * smoothstep(250, 0, d);

    if (d < 400) {
      this.x += cos(a) * f;
      this.y += sin(a) * f;
    }

    this.x += (this.ox - this.x) * ease;
    this.y += (this.oy - this.y) * ease;
  }

  show() {
    stroke(0);
    strokeWeight(this.size);
    point(this.x, this.y);
  }
}

let smoothstep = (edge0, edge1, x) => {
  x = constrain((x - edge0) / (edge1 - edge0), 0, 1);
  return x * x * (3 - 2 * x);
};
