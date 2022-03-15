class Hero{
  constructor(x, y){
    this.loc = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
  }

  run(){
    this.update();
    this.render();
  }

  update(){
    this.vel.add(this.loc);
    this.acc.add(this.vel);

    
  }

  render(){
    fill(0, 255, 0);
    ellipse(this.loc.x, this.loc.y, 30);
  }
}
