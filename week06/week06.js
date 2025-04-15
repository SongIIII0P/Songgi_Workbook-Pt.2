let canvas;
let song;
let wave;
let waveDraw;
let analy;


function preload() {
  song = loadSound('data/chirico.mp3');
}

function setup() {
    canvas= createCanvas(windowWidth,windowHeight);
    canvas.position(0, 0);
    canvas.style('position', 'absolute');
    canvas.style('z-index', '-1');
    canvas.style('pointer-events', 'none');

    analy = new p5.Amplitude();
    wave = new p5.FFT();
    noFill();
    stroke(0, 0, 0, 40);
    strokeWeight(0.5);
    background(255, 0, 0);
}

function draw() {
    background(255, 0, 0, 10);

    let vol = analy.getLevel();
    let shake = map(vol, 0, 1, 0, 30);

    let e01 = document.getElementById('e01');
    let e02 = document.getElementById('e02');

    if (e01 && e02) {

      let e01x = random(-shake, shake);
      let e01y = random(-shake, shake);
      e01.style.transform = `translate(${e01x}px, ${e01y}px)`;
  
      let e02x = random(-shake, shake);
      let e02y = random(-shake, shake);
      e02.style.transform = `translate(${e02x}px, ${e02y}px)`;
    }

    waveDraw = wave.waveform();

    for (let i= 0; i < 2; i++) {
      let y = i === 0 ? -height / 4 : height / 4;
  
      push();
      translate(0, height / 2 + y);
  
      for (let j= 0; j < 10; j++) {
        beginShape();
        for (let w= 0; w < waveDraw.length; w++) {
          let x = map(w, 0, waveDraw.length, 0, width);
          let y = map(waveDraw[w], -1, 1, 200, -200);
  
          x += random(-0.5, 0.5);
          y += random(-3, 3);
  
          vertex(x, y);
        }
        endShape();
      }
  
      pop();
    }
}

function mousePressed() {
    
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.loop();
  }
}