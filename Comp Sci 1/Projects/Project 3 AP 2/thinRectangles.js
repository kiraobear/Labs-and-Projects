class ThinRectangles{
  constructor(){
    this.loc = createVector(width/2, random(height));
    this.loc2 = createVector(random(width), random(height));
  }

  render(){
    stroke(255, 0, 0);
    strokeWeight(6);
    line(this.loc.x, this.loc.y, this.loc2.x, this.loc2.y);
  }
}
