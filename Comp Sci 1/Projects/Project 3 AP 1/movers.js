class Mover{
  constructor(x,y){
    this.loc = createVector(x,y);//constructor with location, vel, acc, diam, and clr
    this.vel = createVector(random(-5,5));
    this.acc = createVector(0,0);
    this.diam = 15
    this.clr = color(0, 0, 254);
  }
  run(){
    this.update();//run the functions
    this.render();
    this.checkEdges();
    this.checkDistance();
  }
  update(){
    sliderval = slider.value();//slider value if needed
    distToMainMover = this.loc.dist(mainMover.loc);//location from this to mainmover
  //++++++++++++++++++++++++++
  this.acc = p5.Vector.sub(mainMover.loc, this.loc);//acceleration
  this.acc.normalize();
  this.acc.mult(0.05);//can be replaced with slider val
  //+++++++++++++++++++++++++
  if(distToMainMover < 145){//if loc dist is less than 145 repel
  this.acc = p5.Vector.sub(this.loc, mainMover.loc);
  this.acc.normalize();
  this.acc.mult(0.09);
    }
    this.vel.add(this.acc);//updating acceleration with velocity
    if(this === mainMover){
      this.vel.limit(1);
    } else{
      this.vel.limit(3);
    }
    this.loc.add(this.vel);//update velocity with location

  }
    render(){
      //noStroke();
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
  checkEdges(){//bounce off the sides
    if(this.loc.x > width || this.loc.x < 0){
      this.vel.x = -this.vel.x
    }
    if(this.loc.y > height || this.loc.y < 0){
      this.vel.y = -this.vel.y
    }
  }

  checkDistance(){//check the distance between mainmover and mover
    for(let i = 0; i < movers.length; i++){
    if(distToMainMover < 150){
      this.clr = color(255, 255, 0);//change color depending on how close it is
    } else {
      this.clr = color(0, 0, 255);
    }
  }
    for(let i = 0; i < movers.length; i++){
      if(movers[i] !== this){//if this location is close to other movers draw line
        let dis = this.loc.dist(movers[i].loc);
        if(dis < 50){
            let s = random(0.03, 0.1);//random stroke weight
            strokeWeight(s)
            stroke(this.clr);//the color depending on distance
            line(this.loc.x, this.loc.y, movers[i].loc.x, movers[i].loc.y);//draw line
        }
      }
    }
  }
}
