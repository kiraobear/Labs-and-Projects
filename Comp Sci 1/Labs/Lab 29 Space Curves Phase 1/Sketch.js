//Kira O'Grady
//Lab 211 Space Curves
let sun, planet, moon;//declare global variables
function setup() {
  createCanvas(400, 400);
  sun = new Sun(width/2, height/2)//creating classes
  planet = new Planet();
  moon = new Moon();
  background(255);
}

function draw() {
  sun.run();//run objects
  planet.run();
  moon.run();
}
