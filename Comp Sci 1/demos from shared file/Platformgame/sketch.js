// Platform Game Phase 1
// Kira O'Grady
// 316

//  globals
let pGame;

function setup() {
  //  cset up canvas size and color
  var cnv = createCanvas(800, 600);
  cnv.position((windowWidth - width) / 2, 10);
  pGame = new Game();
}

function draw() {
  background(30);
  pGame.run();
}

//+++++++++++++++++++++++++++++++++++++++  callbacks

function keyPressed() {

  if (keyCode === 32) {
    pGame.hero.jump()
  }

}
