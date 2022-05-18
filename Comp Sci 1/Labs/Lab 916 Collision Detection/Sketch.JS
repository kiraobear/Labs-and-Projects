//kira O'Grady
//Paddle Ball Phase 1
let balls = [];
let paddle;
let numBalls = 3
function setup(){
  createCanvas(600, 600);
  loadBalls(3);
  paddle = new Paddle(600, 700, 150, 10);
}

function draw(){
  background(20);
  runBalls();
  paddle.run();
}

function loadBalls(){
  balls = []
  for(let i = 0; i < numBalls;  i++){
    balls[i] = new Ball(width/2, 50, 15);
  }
}

function runBalls(){
  for( i = 0; i < balls.length; i++){
    balls[i].run();
    if(balls[i].isColliding()){
      balls.splice(i,1);
    }
    if(balls[i] === 0){

    }
  }
}

  function endMsg(){
    let msg = "";
    if(score < 3){
      msg = "A monkey could do better"
    }
    else if(score < 6){
      msg = "Not good enough"
    }
    else  if(score < 9){
      msg = "What are you? AN IDIOT SANDWICH"
    }
    else if(score < 12){
      msg = ""
    }
    else if(score < 15){
      msg = ""
    }
    else if(score < 18){
      msg = ""
    }
    else if(score < 21){
      msg = ""
    }
    if(score < 36){
      msg = ""
    }
    else {
      msg = ""
    }
  }
