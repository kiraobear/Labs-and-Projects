class Bud{
  constructor(x, y){//constructor for the bugs
    this.loc = createVector(x, y);
    this.clr = color(random(255), random(255), random(255));
    this.squareyes = floor(random(2));
  }

  render(){
    rectMode(CENTER);//center the rectangles and circles on the line
    fill(this.clr)
    if(this.squareyes === 1){//if 1 make a cirlce
      ellipse(this.loc.x, this.loc.y, 50);
    } else if(this.squareyes === 0){//if 0 make a rectangle
      rect(this.loc.x, this.loc.y, 50,);
    }
  }
}
