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

  function mousePressed(){
    if (chickFiLost.butts.play.ratOverButt){
      console.log("PLAY TIME :)");
    }
  }

}
