//Kira O’Grady
//Lab 128 Transformations
let angle = 0;
function setup() {
  createCanvas(400, 400);
  angleMode(RADIANS);
  background(0);
}

function draw() {
  translate(200, 200);
  rotate(angle);
  noFill();
  strokeWeight(0.5)
  stroke(255)
  rect(50, 50, 100, 100);
  angle = angle + 100;
}
