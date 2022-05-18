//Kira O'Grady
//Lab124 Perlin noise
let xoff = 0;
let yoff = 0;

function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  // let x = random(width);

  let x = map(noise(xoff), 0, 1, 0, width);
  let y = map(noise(yoff), 0, 1, 0, height);

  xoff += 0.01;
  yoff += 0.01;
  noFill();
  stroke(255);
  strokeWeight(0.05);
  //ellipse(x, y, 24, 24);
  ellipse(x, random(height), 200, 200);
  //ellipse(random(width), y, 25, 25);
}
