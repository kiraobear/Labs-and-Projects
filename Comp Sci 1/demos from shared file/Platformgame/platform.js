class Platform{
  constructor(x, y){
    this.loc = createVector(x, y);
    this.vel = createVector(0, 0);
  }

  run(){
    this.update();
    //this.render();
  }

  update(){
    this.loc.add(this.vel);

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
