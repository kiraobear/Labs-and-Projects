class Particle{//not being used but is supposed to create random ellipses
  constructor(x, y){
    this.loc = createVector(x, y);
  }

  run(){
    this.render();
  }

  render(){
    noFill();//create the circles
    ellipse(this.loc.x, this.loc.y, 1);
  }
}
