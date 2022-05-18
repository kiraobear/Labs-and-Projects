
let xLoc = [], xSpeed = [], yLoc = [], ySpeed = [];
let nballs = 100;

function setup() {
  createCanvas(600,600);
  for (let i = 0; i < nballs; i++){
    xLoc[i] = width/2
    yLoc[i] = height/2
    xSpeed[i] = random(-3,3)
    ySpeed[i] = random(-3,3)
  }
}

function draw() {
  background(0);

  for (let i = 0; i < nballs; i++){
    xLoc[i] = xLoc[i] + xSpeed[i]
    yLoc[i] = yLoc[i] + ySpeed[i]

    checkEdges(i);

    stroke(255);
    strokeWeight(3);
    noFill();
    ellipse(xLoc[i],yLoc[i],75,75);
  }
}

function checkEdges(i){

  if (xLoc[i] < 0) {
    xSpeed[i] = -xSpeed[i];
  }

  if (xLoc[i] > width) {
    xSpeed[i] = -xSpeed[i];
  }

  if (yLoc[i] < 0) {
    ySpeed[i] = -ySpeed[i];
  }

  if (yLoc[i] > height) {
    ySpeed[i] = -ySpeed[i];
  }
}
