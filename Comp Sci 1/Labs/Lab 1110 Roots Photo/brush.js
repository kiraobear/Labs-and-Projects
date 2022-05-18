class Brush {
  constructor(x, y) {
    this.loc = createVector(x, y);
    this.diam = 10;
    this.clr = (0);
  }

  run(){
    this.render();
  }

  render(){
    this.clr = img1.get(this.loc.x - width/2, this.loc.y);
    fill(this.clr);
    stroke(this.clr);
    ellipse(this.loc.x, this.loc.y, this.diam, this.diam)
  }
}
