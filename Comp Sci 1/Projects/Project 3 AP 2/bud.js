class Bud{
  constructor(x, y){
    this.loc = createVector(x, y);
    this.clr = color(random(255), random(255), random(255));
    this.squareyes = floor(random(2));
  }

  render(){
    rectMode(CENTER);
    fill(this.clr)
    if(this.squareyes === 1){
      ellipse(this.loc.x, this.loc.y, 50);
    } else if(this.squareyes === 0){
      rect(this.loc.x, this.loc.y, 50,);
    }
  }
}
