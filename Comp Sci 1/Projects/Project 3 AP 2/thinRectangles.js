class ThinRectangles{//the lines that branch out
  constructor(h){
    let b = random(height)
    this.loc = createVector(width/2, h);//has the same x value start
    this.loc2 = createVector(random(width), h);//different height
  }

  render(){
    stroke(255, 0, 0, 100);
    strokeWeight(6);
    line(this.loc.x, this.loc.y, this.loc2.x, this.loc2.y)//draw a line at this loc
  }
}
