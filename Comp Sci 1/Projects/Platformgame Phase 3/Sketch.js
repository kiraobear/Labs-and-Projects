//Ricardo & Kira & Emma & Maddie
//Company Name: Truett Cathy
//Chick - Fi - Lost

let chickFiLost;

let font;

function preload(){
  font = loadFont("verbum.otf");

}

function setup() {
  let cnv = createCanvas(900, 700);
  cnv.position((windowWidth - width) / 2, 30);

  chickFiLost = new Game("INTRO");

  //frameRate(5);

}


function draw() {

  chickFiLost.run();

}

function keyPressed(){
  if (keyCode === UP_ARROW || keyCode === 32 || keyCode === 87){
    chickFiLost.player.jump();

  }

  if (keyCode === 8 && chickFiLost.gameState === "INSTRUCTIONS" &&
  chickFiLost.prevGameState === "INTRO" || chickFiLost.prevGameState === "OUTRO"){
    chickFiLost.gameState = chickFiLost.prevGameState;

  }

}

function mousePressed(){
  //Changes GameState If A Button Is Pressed#####
  if (chickFiLost.butts.play.ratOverButt){
    chickFiLost.butts.play.ratOverButt = false;
    chickFiLost.gameState = "PLAY";

  } else if (chickFiLost.butts.instructions.ratOverButt){
    chickFiLost.prevGameState = chickFiLost.gameState;
    chickFiLost.butts.instructions.ratOverButt = false;
    chickFiLost.gameState = "INSTRUCTIONS";

  } else if (chickFiLost.butts.replay.ratOverButt){
    // chickFiLost.butts.replay.ratOverButt = false;
    chickFiLost = new Game("PLAY");

  }

}
