//Kira O'Grady
//Art Project 1 215
let movers = [];
let mainMover;
let v;
function setup() {
  createCanvas(400, 400);
  loadMovers(20);
}

function draw() {
  background(10, 10, 10, 10);
  mainMover.run();
  for(let i = 0; i < movers.length; i++){
    movers[i].run();
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
