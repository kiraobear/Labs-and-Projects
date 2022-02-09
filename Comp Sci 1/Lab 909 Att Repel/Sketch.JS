//Kira O'Grady
//Lab 909 Attraction Repulsion
let movers = [];
let mainMover;
function setup() {
  createCanvas(400, 400);
  loadMovers(75);
}

function draw() {
  background(0);
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
class Mover{
  constructor(x,y){
    this.loc = createVector(x,y);
    this.vel = createVector(random(-2,2));
    this.acc = createVector(0,0);
    this.diam = 15
    this.clr = color(255);
  }
  run(){
    this.update();
    this.render();
    this.checkEdges();
  }
  update(){
let distToMainMover = this.loc.dist(mainMover.loc);
//++++++++++++++++++++++++++
this.acc = p5.Vector.sub(mainMover.loc, this.loc);
this.acc.normalize();
this.acc.mult(0.03);
//+++++++++++++++++++++++++
if(distToMainMover < 145){
this.acc = p5.Vector.sub(this.loc, mainMover.loc);
this.acc.normalize();
this.acc.mult(0.09);
  }
  this.vel.add(this.acc);
  if(this === mainMover){
    this.vel.limit(1);
  } else{
    this.vel.limit(3);
  }
  this.loc.add(this.vel);
}
  render(){
    if(this === mainMover){
      this.clr = color(10,28,142);
    } else{
      this.clir = color(255);
    }
    fill(this.clr);
    ellipse(this.loc.x, this.loc.y, this.diam);
  }
  checkEdges(){
    if(this.loc.x > width || this.loc.x < 0){
      this.vel.x = -this.vel.x
    }
    if(this.loc.y > height || this.loc.y < 0){
      this.vel.y = -this.vel.y
    }
  }
}
