//kira O'Grady
//Paddle Ball Phase 2
//10/6/2021
let balls = [];
let paddle;
let numBalls = 3
let score = 0;
let gameOver = false;
let playBut, playInst;
let gameState = 3;
let img1, img2, img3

function setup() {
  createCanvas(600, 600);
  img = loadImage('starImg.png')
  img2 = loadImage('starBackground.png')
  //  img2 = loadImage('starBackground')
  image(img, 60, 60, 60, 60);
  playInst = new Button("Instructions", 50, 450, 150, 50, color(255, 155, 0));
  paddle = new Paddle(600, 700, 100, 10);
  playBut = new Button("Play", 375, 450, 150, 50, color(255, 155, 0));
}

function draw() {
  if (gameState === 3) {
    startGame();
  } else if (gameState === 4) {
    playGame();
  } else if (gameState === 5) {
    endGame();
  } else {
    console.log("incorrect game state");
  }
  textSize(25)
}

function startGame() {
  background(90);
  playInst.run();
  playBut.run();
  fill(255);
  text("Instructions", 55, 480);
  text("Play", 385, 480);
}

function playGame() {
  background(20);
  text("Score = " + score, 10, 75);
  //loadBalls();
  paddle.run();
  for (let i = 0; i < balls.length; i++) {
    balls[i].run();
    let result = balls[i].isColliding();
    if (result === 1) {//  hitting the top
      balls.splice(i, 1);
      score = score + 1
    } else if (result === 2) {//  hitting the bottom
      gameOver = true;
      gameState = 5;
    }
  }
  if (balls.length === 0) {
    numBalls = numBalls + 3;
    loadBalls();
    textSize(25)
    text("Score = " + score, 100, 100);
  }
}

function endGame() {
  background(20);
  if (gameOver) {
    text("Game Over", 100, 100);
    let msg = endMsg();
    text(msg, 100, 125)
    text("Score = " + score, 10, 75);
  }

}

function loadBalls() {
  balls = []
  for (let i = 0; i < numBalls; i++) {
    balls[i] = new Ball(random(600), random(0, 200), 15);
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
  if (playBut.mouseOverButton()) {
   gameState = 4;
  }

  if (playInst.mouseOverButton()) {
    console.log("just try");
  }
}

function endMsg() {
  let msg = "";
  if (score < 3) {
    msg = "A monkey could do better"
  }
  else if (score < 6) {
    msg = "Not good enough"
  }
  else if (score < 9) {
    msg = "What are you? AN IDIOT SANDWICH"
  }
  else if (score < 12) {
    msg = "Hey you, stop wasting your time!"
  }
  else if (score < 15) {
    msg = "Go home!"
  }
  else if (score < 18) {
    msg = "You're trying too hard"
  }
  else if (score < 21) {
    msg = "It's better to go clean than this"
  }
  if (score < 36) {
    msg = "Stop playing please"
  }
  else {
    msg = "Go on, take your medal and leave"
  }
  return msg;
}
