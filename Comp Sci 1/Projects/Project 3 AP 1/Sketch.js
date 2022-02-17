//Kira O'Grady
//Art Project 1 215
let movers = [];
let mainMover;
let segments = [];
let v;
let pause = false;
function setup() {
  // createCanvas(400, 400);
  createCanvas(windowWidth, windowHeight);
  // background(10, 10, 10);

  loadMovers(20);
}

function draw() {
  if (!pause){
    background(10, 10, 10, 10);
    mainMover.run();
    for(let i = 0; i < movers.length; i++){
      movers[i].run();
    }

    for (let i = 0; i < segments.length; i++){
      segments[i].run();
    }

  }
}

function keyPressed(){
  // console.log(keyCode);
  if (keyCode === 80 && pause === false){
    pause = true;
  } else if (keyCode === 80 && pause === true){
    pause = false;
  }
}

function loadMovers(n){
  mainMover = new Mover(width/2, height/2);
  for(let i = 0; i < n; i++){
    let a = random(width);
    let b = random(height);
    movers[i] = new Mover(a,b);
  }
}
