class Hero{
  constructor(x, y, vel){
    this.loc = createVector(x, y);
    this.vel = vel
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
