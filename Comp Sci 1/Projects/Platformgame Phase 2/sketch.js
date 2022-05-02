// Platform Game Phase 1
// Kira O'Grady
// 316

//  globals
let game;
let bgImgs = [];
let hImgs = [];
function preload(){
  for(let i = 0; i < 5; i++){
    bgImgs[i] = loadImage("backgrounds/b" + i + ".png");
  }

  for(let i = 0; i < 5; i++){
    hImgs[i] = loadImage("sprite/h" + i + ".png");
  }
}

function setup() {
  //  cset up canvas size and color
  var cnv = createCanvas(900, 700);
  cnv.position((windowWidth - width) / 2, 10);
  game = new Game();
}

function draw() {
  background(30);
  game.run();
}

//+++++++++++++++++++++++++++++++++++++++  callbacks

function keyPressed(){//velocity change for jump
  if(keyIsDown(UP_ARROW)){
    game.hero.vel.y = -3;
    game.hero.acc.y = 0.1;
  }
}
