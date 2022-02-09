class Cell{
  constructor(x, y, w, h){
    this.loc = createVector(x, y)
    this.w = w
    this.h = h
    this.clr = color(random(100), random(155), random(255));
  }
  render(){
    fill(this.clr);
    rect(this.loc.x, this.loc.y, this.w, this.h);
  }
}
