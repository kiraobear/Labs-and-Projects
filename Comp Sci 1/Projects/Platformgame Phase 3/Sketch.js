//Ricardo & Kira & Emma & Maddie
//Company Name: Truett Cathy
//Chick - Fi - Lost

let chickFiLost;

function setup() {
  let cnv = createCanvas(900, 700);
  cnv.position((windowWidth - width) / 2, 30);

  chickFiLost = new Game();

}


function draw() {

  chickFiLost.run();

}

function keyPressed(){
  if (keyCode === UP_ARROW || keyCode === 32 || keyCode === 87){
    chickFiLost.player.jump();

  }
  
}

function keyTyped(){
  if(keyTyped(UP_ARROW) || keyTyped(32) || keyTyped(87)){
    this.playerState = "JUMP"

  } else if(keyTyped(RIGHT_ARROW) || keyTyped(68)){
    this.playerState = "WALK"

  } else if(keyTyped(LEFT_ARROW) || keyTyped(65)){
    this.playerState = "WALK"

  } else {
    this.playerState = "IDLE"
    
  }
}
