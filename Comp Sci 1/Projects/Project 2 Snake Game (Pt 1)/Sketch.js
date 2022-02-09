//Kira OGrady
//1210 Project Snake Game P1


let numCol, numRow, cellDiam, snake, food, gameState;
let score;
let playBut, playInst;

function setup() {
  let cnv = createCanvas(600, 600);
  cnv.position((windowWidth - width)/2, 30)
  cellDiam = 20;
  numCol = width/cellDiam;//collums are cell diam
  numRow = height/cellDiam;
  score = 0;
  frameRate(10);
  gameState = 1;
let vx = floor(random(numCol))*cellDiam;//snake loc
let vy = floor(random(numRow))*cellDiam;
let loc = createVector(vx, vy);
snake = new Snake(loc, createVector(0,0));
//++++++++++++++++++++++++++++++++++++++++++++++
let fvx = floor(random(numCol))*cellDiam; //food loc
let fvy = floor(random(numRow))*cellDiam;
let floc = createVector(fvx, fvy);
food = new Food(floc);
//++++++++++++++++++++++++++++++++++++++++++++++
playInst = new Button("Instructions", 50, 450, 150, 50, color(255, 155, 0));
playBut = new Button("Play", 375, 450, 150, 50, color(255, 155, 0));
}

function draw() {
//gamestates + their corresponding functions
  if(gameState === 1){
    startGame();
  }else if(gameState === 2){
    playGame();
  }else if(gameState === 3){
    endGame();
  } else {
    console.log("incorrect game state");
  }
}

function startGame(){
  background(1);
    playInst.run();
    playBut.run();
    fill(255);
    text("Instructions", 55, 480);
    text("Play", 385, 480);
}

function playGame(){
  background(20);
  food.run();
  snake.run();
  text("Score = " + score, 20, 40)
  textSize(30)
}

function endGame(){
  text("Game Over", 300, 300);
}

function keyPressed(){//if arrow key pressed change velocity
  if(keyCode == UP_ARROW){
    snake.vel = createVector(0, -1*cellDiam);
  }
  if(keyCode == DOWN_ARROW){
    snake.vel = createVector(0, 1*cellDiam);
  }
  if(keyCode == RIGHT_ARROW){
    snake.vel = createVector(1*cellDiam, 0);
  }
  if(keyCode == LEFT_ARROW){
    snake.vel = createVector(-1*cellDiam, 0);
  }
}

function mouseMoved() {
  if (playBut.mouseOverButton()) {
    playBut.clr = color(255, 155, 0);
  } else {
    playBut.clr = color(0, 155, 255);
  }

  if (playInst.mouseOverButton()) {
    playInst.clr = color(255, 155, 0);
  } else {
    playInst.clr = color(0, 155, 255);
  }
}
function mousePressed() {
  if (playBut.mouseOverButton()) {//if button is pressed play game
   gameState = 2;
  }

  if (playInst.mouseOverButton()) {
    console.log("just try");
  }
}
