//Ricardo & Kira & Emma & Maddie
//Company Name: Truett Cathy
//Chick - Fi - Lost

let chickFiLost;

function setup() {
  let cnv = createCanvas(900, 700);
  cnv.position((windowWidth - width) / 2, 30);

  chickFiLost = new Game();

  //frameRate(5);

}


function draw() {

  chickFiLost.run();

}

function keyPressed(){
  if (keyCode === UP_ARROW || keyCode === 32 || keyCode === 87){
    chickFiLost.player.jump();

  }

}

function mousePressed(){
  //Changes GameState If A Button Is Pressed#####
  if (chickFiLost.butts.play.ratOverButt){
    chickFiLost.butts.play.ratOverButt = false;
    chickFiLost.gameState = "PLAY";

  } else if (chickFiLost.butts.instructions.ratOverButt){
    chickFiLost.butts.instructions.ratOverButt = false;
    chickFiLost.gameState = "INSTRUCTIONS";

  } else if (chickFiLost.butts.settings.ratOverButt){
    chickFiLost.butts.settings.ratOverButt = false;
    chickFiLost.gameState = "SETTINGS";

  }

}
