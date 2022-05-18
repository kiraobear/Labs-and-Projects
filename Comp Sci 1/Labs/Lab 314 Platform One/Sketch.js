//Kira O'Grady
//Lab 314
let platform1, platform2, hero;
function setup() {
  createCanvas(400, 400);
  platform1 = new Platform(30, 300);
  platform2 = new Platform(250, 300);
  hero = new Hero(random(width), 400, createVector(0,0));
}

function draw() {
  background(220);
  hero.run();
  platform1.run();
  platform2.run();
}

function keyPressed(){
  if(keyCode == LEFT_ARROW){
    console.log("left");
    hero.count = 30;
    hero.vel = createVector(-1, 0);
  }else if (keyCode == RIGHT_ARROW) {
    hero.count = 30;
    hero.vel = createVector(1, 0);
    console.log("right");
  }else if (keyCode == UP_ARROW) {
    hero.count = 30;
    hero.vel = createVector(0, -2);
    console.log("up");
  }
}
