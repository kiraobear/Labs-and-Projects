// Platform Game Phase 1
// Kira O'Grady
// 316

//  globals
let game;
let imgs = [];
function preload(){
  imgs[0] = loadImage('img0.png');
  imgs[1] = loadImage('img1.png');
  imgs[2] = loadImage('img2.png');
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

function keyPressed(){
  if(keyIsDown(UP_ARROW)){
    game.hero.vel.y = -3;
    game.hero.acc.y = 0.09;
  }
}
