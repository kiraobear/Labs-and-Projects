//Ricardo & Kira & Emma & Maddie
//Chick - Fi - Lost

let chickFiLost;

function setup() {
  let cnv = createCanvas(400, 400);
  cnv.position((windowWidth - width) / 2, 30);

    chickFiLost = new Game();
  
}

function draw() {
  background(220);
  
  chickFiLost.run();

}
