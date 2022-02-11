class Planet{//++++++++++++++++++++++++++++++++++++++++++++++++
  constructor(){
    this.loc = createVector(0, 0)
    this.angle = 0;
    this.vel = createVector(0, 0);
    this.or = 100;
    this.angle = 0;
  }

  run(){
    this.update();
    this.render();
  }

  update(){
    this.loc.add(this.vel);
    this.angle = this.angle + 0.009

    this.loc.x = sun.loc.x + cos(this.angle)*this.or
    this.loc.y = sun.loc.y + sin(this.angle)*this.or

  }

  render(){
    fill(255, 140, 30);
    ellipse(this.loc.x, this.loc.y, 20)
  }
}//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
