class ThinRectangles{
  constructor(h){
    let b = random(height)
    this.loc = createVector(width/2, h);
    this.loc2 = createVector(random(width), h);
  }

  render(){
    stroke(255, 0, 0);
    strokeWeight(6);
    line(this.loc.x, this.loc.y, this.loc2.x, this.loc2.y);
  }
}
