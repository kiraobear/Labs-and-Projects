//Kira O'Grady
//Lab 314
let platform, hero;
function setup() {
  createCanvas(400, 400);
  platform = new Platform(30, 300);
  hero = new Hero(random(width), 400);
}

function draw() {
  background(220);
  hero.run();
  platform.run();
}

function keyPressed(){
  if(keyCode === LEFT_ARROW){
    hero.vel.x= -1
  }else if (keyCode === RIGHT_ARROW) {
    console.log("right");
  }
}
