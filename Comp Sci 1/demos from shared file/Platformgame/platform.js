class Platform{
  constructor(x, y, vel){
    this.loc = createVector(x, y);
    this.vel = vel;
  }

  run(){
    this.update();
    //this.render();
    this.move();
  }

  update(){
    this.loc.add(this.vel);
  }

  move() {
    if(keyIsDown(LEFT_ARROW)){
      this.vel.x = -1;
    }else if(keyIsDown(RIGHT_ARROW)){
      this.vel.x = 1;
    }else{
      this.vel.x = 0;
    }
  }

  render(){
    fill(255, 0, 255);
    rect(this.loc.x, this.loc.y, 100, 20)
  }
}
