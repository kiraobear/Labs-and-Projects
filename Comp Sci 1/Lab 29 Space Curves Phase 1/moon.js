class Moon{
  constructor(){
    this.loc = createVector(0, 0)
    this.vel = createVector(0, 0);
    this.mor = 50;
    this.angle = 0;
  }

  run(){
    this.update();
    this.render();
  }

  update(){
    this.loc.add(this.vel);
    this.angle = this.angle + 0.05

    moon.loc.x = planet.loc.x + cos(this.angle)*this.mor
    moon.loc.y = planet.loc.y + sin(this.angle)*this.mor
  }

  render(){
    fill(0, 200, 255)
    ellipse(this.loc.x, this.loc.y, 10);
  }
}//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
