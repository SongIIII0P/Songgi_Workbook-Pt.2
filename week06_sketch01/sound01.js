let canvas;
let film;
let analy;
let play = false;

function preload(){
  film = createVideo('data/wist.mp4');
}

function setup() {
  canvas= createCanvas(windowWidth,windowHeight);
  canvas.position(0, 0);
  canvas.style('position', 'absolute');
  canvas.style('z-index', '-1');
  canvas.style('pointer-events', 'none');
  getAudioContext().suspend();
  analy = new p5.Amplitude();
  analy.setInput(film);
  film.hide();
  background(0);
}

function draw() {
  let volume = analy.getLevel();
  let mappedVol = map(volume, 0, 0.5, 0.1, 5);

  let videoW = film.width * mappedVol;
  let videoH = film.height * mappedVol;
  background(0); 
  image(film, width/2-videoW/2, height/2-videoH/2, videoW, videoH);
}

function mousePressed(){
  getAudioContext().resume();

  if (play) {
    film.pause();
    play = false;
  } else {
    film.loop();
    play = true;
  }
}

