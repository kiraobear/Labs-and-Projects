class Hero {
  constructor(x, y, vel) {
    this.loc = createVector(x, y);
    this.vel = vel
    this.acc = createVector(0, 0.05);
    this.count = 30;
    this.isColliding = false;
    this.h = width+20
  }

  run() {
    this.update();
    this.checkEdges();
    this.isColliding = this.collisions();
    //this.render();
    //this.move();
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
    if(this.isColliding == true){
      console.log("hi");
      this.vel.y = 0;
    }
    this.vel.limit(10);
  }

  /*move() {
    if(keyIsDown(LEFT_ARROW)){
      this.vel.x = -1;
    }else if(keyIsDown(RIGHT_ARROW)){
      this.vel.x = 1;
    }else{
      this.vel.x = 0;
    }
  }*/

  collisions() {
    for(let i = 0; i < 20; i++){
      if(this.loc.y > game.platforms[i].loc.y
        && this.loc.y < game.platforms[i].loc.y + 20
        && this.loc.x > game.platforms[i].loc.x
        && this.loc.x < game.platforms[i].loc.x+100){
          return true;
        }
    }
    return false;
  }
}
