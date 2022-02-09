//kira O'Grady
//Paddle Ball Phase 1
//9/20/21
let balls = [];
let paddle;
let numBalls = 3
let score = 0;
let gameOver = false;
function setup() {
  createCanvas(600, 600);
  loadBalls();
  paddle = new Paddle(600, 700, 100, 10);
}

function draw() {
  background(20);
  runBalls();
  textSize(25)
  text("Score = " + score, 10,75);

}

function loadBalls() {
  balls = []
  for (let i = 0; i < numBalls; i++) {
    balls[i] = new Ball(random(600), random(0,200), 15);
  }
}

function runBalls() {

  if (gameOver) {
    text("Game Over", 100, 100);
    text("", 100,100)
  } else {
    paddle.run();
    for (let i = 0; i < balls.length; i++) {
      balls[i].run();
      let result = balls[i].isColliding();
      if (result === 1) {//  hitting the top
        balls.splice(i, 1);
        score = score + 1
      } else if (result === 2) {//  hitting the bottom
        gameOver = true;
      }
    }
    if (balls.length === 0) {
      numBalls = numBalls + 3;
      loadBalls();
      textSize(25)
      text("Score = " + score, 100,100);
    }
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
    msg = "Well I guess you've gotten better"
  }
  else {
    msg = "Go on, take your medal and leave"
  }
}
