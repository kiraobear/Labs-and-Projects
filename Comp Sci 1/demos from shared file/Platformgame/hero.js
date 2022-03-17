class Hero {
  constructor(x, y, vel) {
    this.loc = createVector(x, y);
    this.vel = vel
    this.acc = createVector(0, 0.05);
    this.count = 30;
  }

  run() {
    this.update();
    this.checkEdges();
    this.isColliding();
    //this.render();
    this.move();
  }

  render() {
    fill(0, 255, 0);
    ellipse(this.loc.x, this.loc.y, 30);
  }

  checkEdges(){
    if(this.loc.x > width){
      this.vel.x = -this.vel.x;
    }
    if(this.loc.x < 0){
      this.vel.x = -this.vel.x;
    }
    if(this.loc.y > height){
      this.vel.y = 0;
    }
    if(this.loc.y < 0){
      this.vel.y = -this.vel.y;
    }
  }


  update(){
    this.loc.add(this.vel);
    this.vel.add(this.acc);

    //this.count--

    // if(this.count == 0){
    //   console.log("stop");
    //   this.vel.x = 0;
    // }

    //this.vel.x*=(0.99); //(meant for friction-like stopping)

    this.vel.limit(10);
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

  isColliding() {
    if()
  }
}
