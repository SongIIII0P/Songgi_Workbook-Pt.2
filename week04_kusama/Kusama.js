let canvas;
let particles = [];
let bgColour;

function setup() {
  canvas= createCanvas(windowWidth,windowHeight);
  canvas.position(0, 0);
  canvas.style('position', 'absolute');
  canvas.style('z-index', '-1');
  canvas.style('pointer-events', 'none');

  colorMode(HSB, 360, 100, 100);
  noStroke();
  frameRate(30);

  
  bgColour = color(random(360), 20, 100);

 
  for (let i = 0; i < 100; i++) {
    particles.push(new Particle(random(width), random(height)));
  }
}

function draw() {
  background(bgColour)

  for (let particle of particles) {
    let percent = frameCount / 500.0;
    particle.update(percent);
    particle.display();
  }


  if (random(1) < 0.01) {
    particles.push(new Particle(random(width), random(height)));
  }


  if (particles.length > 200) {
    particles.splice(0, 1);
  }
}

function mousePressed() {
 
  let bg = random(360);
  bgColour = color(bg, 50, 100);
}

class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.size = random(10, 50);
    this.growth = random(1, 3);
  }

  update(percent) {
    let angle = noise(this.pos.x * 0.005, this.pos.y * 0.005, percent) * TWO_PI * 5;
    let force = p5.Vector.fromAngle(angle);
    this.acc.add(force);

    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);


    if (frameCount % 100 === 0) {
      this.growth *= -1;
    }
    this.size += this.growth;
  }

  display() {
    fill(0);
    ellipse(this.pos.x, this.pos.y, this.size, this.size);
  }
}
