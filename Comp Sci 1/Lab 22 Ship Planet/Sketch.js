//Kira O'Grady
//Lab 22 Ship
let ship;
let planet;
let distToPlanet;//distance to planet

function setup() {
  let cnv = createCanvas(900, 600);
  cnv.position((windowWidth - width)/2, 20)
  ship = new Ship(100, 100);
  planet = new Planet(200, 200);

}

function draw() {
  background(0);
  planet.run();
  ship.run();
}
