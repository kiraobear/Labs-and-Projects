// Platform Game Phase 1
// Kira O'Grady
// 316

//  globals
let game;

function setup() {
  //  cset up canvas size and color
  var cnv = createCanvas(800, 600);
  cnv.position((windowWidth - width) / 2, 10);
  game = new Game();
}

function draw() {
  background(30);
  game.run();
}

//+++++++++++++++++++++++++++++++++++++++  callbacks

function keyPressed(){
  if(keyCode == LEFT_ARROW){
    console.log("left");
    game.hero.count = 30;
    game.hero.vel = createVector(-1, 0);
  }else if (keyCode == RIGHT_ARROW) {
    game.hero.count = 30;
    game.hero.vel = createVector(1, 0);
    console.log("right");
  }else if (keyCode == UP_ARROW) {
    game.hero.count = 30;
    game.hero.vel = createVector(0, -2);
    console.log("up");
  }
}
