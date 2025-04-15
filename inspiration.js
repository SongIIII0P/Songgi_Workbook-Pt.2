let canvas;
let words=['patatap','팟탓텝','curaturae','큐레투레','my','schemasofuncertaintys','murmur 2','sketch01', 'skech02', 'sketch03', 'breathing thoughts',
'Camera Motion','카메라 인식', '매우','어렵다', 'Very Difficult', 'Somebody Help me', '셰마소푼커타인티', 'p5js', 'VS code', '머리가 아파요', 'particles',
'HEADACHE', 'SoS', 'studies', 'What the...']
let words2=[];  
let fonts = [];
let ease = 0.05;


function preload() {
  fonts.push(loadFont('data/Scribble.ttf'));
  fonts.push(loadFont('data/Edwan.ttf'));
  fonts.push(loadFont('data/Dot.otf'));
  fonts.push(loadFont('data/Song.ttf'));
  fonts.push(loadFont('data/Grand.ttf'));
  fonts.push(loadFont('data/mal.ttf'));
}

function setup() {
    canvas= createCanvas(windowWidth,windowHeight);
    canvas.position(0, 0);
    canvas.style('position', 'absolute');
    canvas.style('z-index', '-1');
    canvas.style('pointer-events', 'none');

    frameRate(90); 

    background('red'); 




   for(let i=0;i<1000;i++){
       let word = new Word(random(words),random(0,width),random(0,height),0);
       words2.push(word);
    }


}

function draw() {
    background('red');

    for(let w of words2){
        w.fade();
        w.show();
        // w.update(); 
    }
    if(frameCount%5==0){
    for(let i=0;i<100;i++){
        let word = new Word(words[i],random(0,width),random(0,height),0);
        words2.push(word);
    }
    }

    if (words2.length > 5000) {
        words2.splice(0, 500);
      }


}

class Word{
    constructor(obj,x,y,alpha){
        this.fadeSpeed=random(10,30);
        this.x=x;
        this.y=y;
        this.ox = x;
        this.oy = y;
        this.obj=obj;
        this.fadingIn=true;
        this.alpha=alpha;
        this.font = random(fonts);
    }

    show(){
        fill(0,0,0, this.alpha);
        textFont(this.font);
        text(this.obj,this.x,this.y);
        
    }
    fade(){
        if (this.fadingIn) {
            this.alpha += this.fadeSpeed; 
            if (this.alpha >= 255) { 
                this.alpha = 255;
                this.fadingIn = false; 
            }
        } else {
            this.alpha -= this.fadeSpeed; 
            if (this.alpha <= 0) { 
                this.alpha = 0;
                this.fadingIn = true; 
            }
        }
    }

   // update() {
        // let p = { x: mouseX, y: mouseY };
        // let d = dist(this.x, this.y, p.x, p.y);
       //  let a = atan2(this.y - p.y, this.x - p.x);
       //  let f = 30 * smoothstep(200, 0, d);
    
       //  if (d < 200) {
       //    this.x += cos(a) * f;
        //   this.y += sin(a) * f;
       //  }
    
       //  this.x += (this.ox - this.x) * ease;
        // this.y += (this.oy - this.y) * ease;
     //  }
// }

// let smoothstep = (edge0, edge1, x) => {
 //    x = constrain((x - edge0) / (edge1 - edge0), 0, 1);
  //   return x * x * (3 - 2 * x);
  };