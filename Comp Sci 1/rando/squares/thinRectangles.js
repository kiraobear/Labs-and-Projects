class thinRectangle{
  constructor(x, y){
    this.loc = createVector(x, y);
    this.loc2 = createVector(this.loc.x, random(600));
    this.loc3 = createVector(random(width), random(height));
    this.loc4 = createVector(random(width), this.loc3.y)
  }

  render(){
    stroke(255, 0, 0);
    strokeWeight(1)
    line(this.loc.x, this.loc.y, this.loc2.x, this.loc2.y);
    line(this.loc3.x, this.loc3.y, this.loc4.x, this.loc4.y);
  }
}
