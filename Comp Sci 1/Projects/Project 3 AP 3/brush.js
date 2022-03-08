class Brush {
  constructor(x, y) {
    this.loc = createVector(x, y);
    this.diam = 10;
    this.clr = (0);
  }

  run(){
  //  this.render();
  }

  render(){
    fill(this.clr);
    ellipse(this.loc.x, this.loc.y, this.diam, this.diam)
  }
}
