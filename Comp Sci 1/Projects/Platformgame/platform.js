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
      this.vel.x = 1;
    }else if(keyIsDown(RIGHT_ARROW)){
      this.vel.x = -1.5;
    }else{
      this.vel.x = 0;
    }

    if(this.loc.x+100 < 0){
      this.loc.x = width+random(15)
      this.loc.y = random(height);
    }
  }

  render(){
    noStroke();
    fill(255, 0, 255);
    rect(this.loc.x, this.loc.y, 100, 20)
  }
}
