class Hero {
  constructor(x, y, vel) {
    this.loc = createVector(x, y);
    this.vel = vel
    this.acc = createVector(0, 0.05);
    this.count = 0;
    this.isColliding = false;
    this.h = width + 20
    this.pLevel;
    this.hCount = 0;
  }

  run() {
    this.update();
    ///////////////////this.checkEdges();
    this.isColliding = this.collisions();
  }

  render() {
    fill(79, 177, 199);
    //ellipse(this.loc.x, this.loc.y, 30);
      // console.log(this.count);
    image(hImgs0[floor(this.count / 15)], this.loc.x, this.loc.y);
    if(++this.count >= 75){
      this.count = 0;
    }
  }



  update() {
    this.vel.add(this.acc);
    this.loc.add(this.vel);
    if (this.collisions()) {
      this.vel.y = 0;
      this.acc.y = 0;
      this.loc.y = this.pLevel - 50;
    } else {
      this.acc.y = 0.1;
    }
    this.vel.limit(5);
  }


  collisions() {
    for (let i = 0; i < game.platforms.length; i++) {
      if (this.loc.y + 53 > game.platforms[i].loc.y
        && this.loc.y + 53 < game.platforms[i].loc.y + 20
        && this.loc.x + 15 > game.platforms[i].loc.x
        && this.loc.x + 15 < game.platforms[i].loc.x + 115) {
        //this.pLevel = game.platforms[i].loc.y-22;
        return true;
      }
    }
    return false;
  }

  // jump(){
  //   this.vel.y = -3;
  //   this.acc.y = 0.1;
  // }

  checkEdges() {
    if (this.loc.x > width) {
      this.vel.x = -this.vel.x;
    }
    if (this.loc.x < 0) {
      this.vel.x = -this.vel.x;
    }
    if (this.loc.y > height) {
      this.vel.y = 0;
    }
    if (this.loc.y < 0) {
      this.vel.y = -this.vel.y;
    }
  }


}//  +++++++++++++++++  end class
