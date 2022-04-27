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
    this.checkEdges();
    this.isColliding = this.collisions();
  }

  render() {
    fill(79, 177, 199);
    //ellipse(this.loc.x, this.loc.y, 30);
    image(hImgs[this.count++], this.loc.x, this.loc.y);
    if(++this.count >=5){
      this.count = 0;
    }
  }

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


  update() {
    this.vel.add(this.acc);
    this.loc.add(this.vel);
    if (this.isColliding === true) {
      this.vel.y = 0;
      this.acc.y = 0;
      this.loc.y = this.pLevel - 15;
    } else {
      this.acc.y = 0.1;
    }
    this.vel.limit(5);
  }


  collisions() {
    for (let i = 0; i < 20; i++) {
      if (this.loc.y + 52 > game.platforms[i].loc.y
        && this.loc.y + 52 < game.platforms[i].loc.y + 20
        && this.loc.x + 30 > game.platforms[i].loc.x
        && this.loc.x + 30 < game.platforms[i].loc.x + 115) {
        this.pLevel = game.platforms[i].loc.y;
        return true;
        this.count = 25;
      }
    }
    return false;
  }

}//  +++++++++++++++++  end class
