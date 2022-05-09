//Ricardo & Kira & Emma & Maddie
//Chick - Fi - Lost

let chickFiLost;

function setup() {
  let cnv = createCanvas(600, 600);
  cnv.position((windowWidth - width) / 2, 30);
  background(0);

    chickFiLost = new Game();

}

function draw() {
  background(0);

  chickFiLost.run();

}

function keyPressed(){
  if (keyCode === UP_ARROW || keyCode === 32 || keyCode === 87){
    chickFiLost.player.jump();

  }
}
