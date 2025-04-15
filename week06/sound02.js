let canvas;
let song;
let analy;
let started = false;

function preload() {
  song = loadSound("data/keiichi.mp3");
}

function setup() {
    canvas= createCanvas(windowWidth,windowHeight);
    canvas.position(0, 0);
    canvas.style('position', 'absolute');
    canvas.style('z-index', '-1');
    canvas.style('pointer-events', 'none');
    background(0);


    wave = new p5.FFT();
    wave.setInput(song);

    analy = new p5.Amplitude();
    analy.setInput(song);

    let startBtn = createButton("▶ Click to Start Music");
    startBtn.position(width / 2 - 70, height / 2);
    startBtn.mousePressed(() => {
        background('red');
      if (!started) {
        song.play();
        started = true;
        startBtn.remove();
      }
    });
}

function draw() {
  if (!started) return;

  let vol = analy.getLevel();
  let btnSize = map(vol, 0, 0.3, 10, 1000);


  if (vol > 0.03) {
    let btnWidth = btnSize;
    let btnHeight = btnSize * 0.5;

    let x = random(0, width);
    let y = random(0, height);

    let newBtn = createButton("Press This Button");
    newBtn.position(x, y);
    newBtn.size(btnWidth, btnHeight);
    newBtn.style("background", "black");
    newBtn.style("color", "red");
    newBtn.style("box-shadow", "0px 0px 30px black");
    newBtn.style("transition", "0.5s ease");

    newBtn.mousePressed(stop);
 

    setTimeout(() => {
      newBtn.remove();
    }, 1500);
  }
}

function stop() {
    noLoop();
    background(0);
    song.pause();   
    

    let reBtn = createButton("▶ Resume Music");
    reBtn.position(width / 2 - 70, height / 2);
    //reBtn.style("background", "black");
    //reBtn.style("color", "white");
    reBtn.style("opacity", "0");

    setTimeout(() => {
      reBtn.style("opacity", "1");
    }, 1400);

    reBtn.mousePressed(() => {
        background('red')
      song.play();
      reBtn.remove();
      loop();
    });       
  }