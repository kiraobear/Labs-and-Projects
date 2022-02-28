class Particle{
  constructor(x, y){
    this.loc = createVector(x, y);
  }

  run(){
    this.render();
  }

  render(){
    noFill();
    ellipse(this.loc.x, this.loc.y, 1);
  }
}
