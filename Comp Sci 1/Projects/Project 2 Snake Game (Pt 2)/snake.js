class Snake {

  constructor(location, velocity) {
    this.loc = location
    this.vel = velocity
    this.sz = cellDiam
    this.segments = [];
  }

  run() {
    this.update();
    this.render();
    this.isTangled();
    this.hitWall();
  }

  update() {

    for (let i = this.segments.length - 1; i > 0; i--) {//the segment loc = segment-1 loc
      this.segments[i].x = this.segments[i - 1].x
      this.segments[i].y = this.segments[i - 1].y
    }
    if (this.segments.length > 0) {
      this.segments[0].x = this.loc.x//the first segment loc = head loc-1
      this.segments[0].y = this.loc.y
    }
    this.loc.add(this.vel);


    if (this.isTangled() || this.hitWall()) {
      gameState = 3 //end game
    }
  }

  isTangled() {
    for (let i = 0; i < this.segments.length; i++) {//if snake hits segment end game
      if (this.loc.x === this.segments[i].x &&
        this.loc.y === this.segments[i].y) {
        return true;
      }
    }
    return false;
  }

  hitWall() {//if snake is out of bounds then end game
    if(this.loc.x < 0 ||
      this.loc.x > width ||
      this.loc.y < 0 ||
      this.loc.y > height) {
        return true;
    }
    return false;
  }

  render() {//create shapes
    image(img1, this.loc.x, this.loc.y, 20, 20);
    for (let i = 0; i < this.segments.length; i++) {
      image(img1, this.segments[i].x, this.segments[i].y, this.sz, this.sz);
    }
  }
}//+++++++++++++++++++++++++++++++++  class end
