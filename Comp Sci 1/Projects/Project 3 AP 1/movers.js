class Mover{
  constructor(x,y){
    this.loc = createVector(x,y);
    this.vel = createVector(random(-5,5));
    this.acc = createVector(0,0);
    this.diam = 15
    this.clr = color(0, 0, 254);
    console.log(this.clr);
  }
  run(){
    this.update();
    this.render();
    this.checkEdges();
    this.checkDistance();
  }
  update(){
    sliderval = slider.value();
    distToMainMover = this.loc.dist(mainMover.loc);
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
  /*let v = random(1);
    if(v ===0){
      this.clr = (255, 255, 0);
    } else {
      this.clr = (0,0,255);
    }*/
  }
    render(){
      //noStroke();
      /*if(this === mainMover){
        this.clr = color(10,28,142);
      } else{
        this.clr = color(255);
      }*/
      //fill(this.clr);
      //ellipse(this.loc.x, this.loc.y, this.diam);

      for (let i = 0; i < movers.length; i++){
        if (this === movers[i]){
          // segments.push(new Segment(i));
          //segments[i] = new Segment(i);
          if(sliderval === 1){
            this.clr
          } else if(sliderval === 2){

          }
      }
    }
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
    if(distToMainMover < 175){
      this.clr = color(255, 255, 0);
    } else {
      this.clr = color(0, 0, 255);
    }
  }
    for(let i = 0; i < movers.length; i++){
      if(movers[i] !== this){
        let dis = this.loc.dist(movers[i].loc);
        if(dis < 50){
            let s = random(0.03, 0.1);
            strokeWeight(s)
            stroke(this.clr);
            line(this.loc.x, this.loc.y, movers[i].loc.x, movers[i].loc.y);
        }
      }
    }
  }
}
