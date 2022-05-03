// Platform Game Phase 1
// Kira O'Grady
// 316

//  globals
let game;
let bgImgs = [];
let hImgs0 = [];
let hImgs1 = [];
let hImgs2 = [];
function preload(){
  for(let i = 0; i < 5; i++){
    bgImgs[i] = loadImage("images/backgrounds/b" + i + ".png");
  }
//hero sprites
  for(let i = 0; i < 5; i++){
    hImgs0[i] = loadImage("images/sprites/idle/h" + i + ".png");
  }

/*  for(let i = 0; i < 5; i++){
    hImgs1[i] = loadImage("images/sprites/left/h" + i + ".png");
  }

  for(let i = 0; i < 5; i++){
    hImgs2[i] = loadImage("images/sprites/right/h" + i + ".png");
  }*/
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

// function keyPressed(){//velocity change for jump
//   if(keyIsDown(UP_ARROW)){
//     game.hero.vel.y = -3;
//     game.hero.acc.y = 0.1;
//   }
// }

// function keyPressed(){//velocity change for jump
//   if(keyCode === UP_ARROW){
//    game.hero.jump();
//   }
// }

