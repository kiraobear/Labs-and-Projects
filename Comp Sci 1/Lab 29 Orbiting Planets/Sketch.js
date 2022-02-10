let sun, planet, moon;
function setup() {
  createCanvas(400, 400);
  sun = new Sun(width/2, height/2)
  planet = new Planet();
  moon = new Moon();
}

function draw() {
  background(220);
  sun.run();
  planet.run();
  moon.run();
}
