class ThinRectangle{//singular line in the middle of the canvas
  constructor(){
    this.loc = createVector(width/2, 0);
    this.loc2 = createVector(width/2, height);

  }

  render(){
    stroke(255, 0, 0, 100);//transperent
    strokeWeight(6);
    line(this.loc.x, this.loc.y, this.loc2.x, this.loc2.y);
  }
}
