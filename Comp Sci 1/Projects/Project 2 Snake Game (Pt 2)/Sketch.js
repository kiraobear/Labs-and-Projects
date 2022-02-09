//Kira OGrady
//1210 Project Snake Game P1


let numCol, numRow, cellDiam, snake, food, gameState;
let score;
let playBut, playInst, playAgain, backBut;
let img1;

function preload(){
img1 = loadImage('cuteStar.png');
}

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
playInst = new Button("Instructions", 50, 450, 150, 50, color(255, 230, 156));
playBut = new Button("Play", 375, 450, 150, 50, color(255, 230, 156));
playAgain = new Button("Play Again?", 375, 450, 150, 50, color(255, 230, 156));
backBut = new Button("Back", 375, 100, 150, 50, color(255, 230, 156));
}

function draw() {
//gamestates + their corresponding functions
  if(gameState === 1){
    startGame();
  }else if(gameState === 2){
    playGame();
  }else if(gameState === 3){
    endGame();
  }else if(gameState === 4){
    instGame();
  } else{
    console.log("incorrect game state");
  }
}

function startGame(){
    background(1);
    image(img1, 215, 200 , 150, 150);
    textFont('Georgia');
    textSize(35);
    fill(255);
    text("Star Army", 220, 150)
    playInst.run();
    playBut.run();
    fill(0);
    textSize(20);
    text("Instructions", 55, 480);
    text("Play", 385, 480);
}

function playGame(){
  let clr = 255;
  if(snake.vel.x > 0 || snake.vel.x < 0 || snake.vel.y > 0 || snake.vel.y < 0){
    clr = 0;
  }
  background(20);
  food.run();
  snake.run();
  fill(255);
    textSize(12)
  text("you", snake.loc.x, snake.loc.y+30);
  fill(clr);
  textSize(30)
  text("Score = " + score, 20, 40)
  fill(255)
  textSize(30)
}

function endGame(){
  fill(252, 33, 33)
  textSize(30)
  text("Game Over", 215, 250);
  playAgain.run();
  fill(0)
  text("Play Again", 375, 480);

}

function instGame(){
  background(20,30,40);
  fill(255);
  textSize(25);
  text("Collect stars in your army by touching them!", 20, 70);
  text("WASD to move.", 20, 95);
  backBut.run();
  fill(0);
  text("Back", 380, 134);
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
  if (playBut.mouseOverButton()) {//if mouse over button change color
    playBut.clr = color(252, 190, 3);
  } else {
    playBut.clr = color(255, 230, 156);
  }

  if (playInst.mouseOverButton()) {
    playInst.clr = color(252, 190, 3);
  } else {
    playInst.clr = color(255, 230, 156);
  }

  if (playAgain.mouseOverButton()) {
    playAgain.clr = color(252, 190, 3);
  } else {
    playAgain.clr = color(255, 230, 156);
  }

  if (backBut.mouseOverButton()) {
    backBut.clr = color(252, 190, 3);
  } else {
    backBut.clr = color(255, 230, 156);
  }
}

function mousePressed() {
  if (playBut.mouseOverButton()) {//if button is pressed play game
   gameState = 2;
  }

  if (playInst.mouseOverButton()) {
    // console.log("just try");
    instGame();
    gameState = 4
  }

  if (playAgain.mouseOverButton()) {//if button is pressed play again
   gameState = 2;
   score = 0;
   let vx = floor(random(numCol))*cellDiam;//snake loc
   let vy = floor(random(numRow))*cellDiam;
   let loc = createVector(vx, vy);
   snake = new Snake(loc, createVector(0,0));
  }

  if (backBut.mouseOverButton()) {
    gameState = 1
  }
}
