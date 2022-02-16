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
    //this.checkDistance();
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

  if(this.loc.dist(mainMover.loc) < 150){
     v = 255;
  } else{
      v = 0;
  }
}
  render(){
    noStroke();

    if(this === mainMover){
      this.clr = color(10,28,142);
    } else{
      this.clir = color(255);
    }
    fill(this.clr);
    //ellipse(this.loc.x, this.loc.y, this.diam);


    stroke(255, 0, v);
    strokeWeight(3);
    line(this.loc.x, this.loc.y, mainMover.loc.x, mainMover.loc.y);

  }
  checkEdges(){
    if(this.loc.x > width || this.loc.x < 0){
      this.vel.x = -this.vel.x
    }
    if(this.loc.y > height || this.loc.y < 0){
      this.vel.y = -this.vel.y
    }
  }

  checkDistance(){
    for(let i = 0; i < movers.length; i++){
      if(movers[i] !== this){
        let dis = this.loc.dist(movers[i].loc);
        if(dis < 50){
            stroke(random(255), random(255), random(255));
            strokeWeight(3)
            line(this.loc.x, this.loc.y, movers[i].loc.x, movers[i].loc.y);
        }
      }
    }
  }
}
