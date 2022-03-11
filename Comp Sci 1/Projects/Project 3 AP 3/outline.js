class Outline{//the outline of the roots
  constructor(){
    this.loc = createVector(roots[i].loc.x, roots[i].loc.y)
    this.diam = roots[i].diam
  }

  render(){
    noFill();
    stroke(255, 255, 255, 15)//transperant
    ellipse(this.loc.x, this.loc.y, this.diam)
  }
}
