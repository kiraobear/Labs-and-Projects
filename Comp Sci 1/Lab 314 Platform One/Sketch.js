//Kira O'Grady
//Lab 314
let platform, hero;
function setup() {
  createCanvas(400, 400);
  platform = new Platform(30, 300);
  hero = new Hero(random(width), 400, createVector(0,0));
}

function draw() {
  background(220);
  hero.run();
  platform.run();
}

function keyPressed(){
  if(keyCode == LEFT_ARROW){
    console.log("left");
    hero.vel = createVector(-1, 0);
  }else if (keyCode == RIGHT_ARROW) {
    hero.vel = createVector(1, 0);
    console.log("right");
  }
}
