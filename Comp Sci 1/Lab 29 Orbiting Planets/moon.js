class Moon{
  constructor(){
    this.loc = createVector(x, y)
    this.vel = createVector(0, 0);
    this.mor = 0;
  }

  run(){
    this.update();
    this.render();
  }

  update(){
    this.loc.add(this.vel);
    this.angle = this.angle + 0.05
    
    moon.loc.x = planet.loc.x + cos(this.angle)*moonOrbitalRadius
    moon.loc.y = planet.loc.y + sin(this.angle)*moonOrbitalRadius
  }

  render(){
    fill(0, 200, 255)
    ellipse(this.loc.x, this.loc.y, 10);
  }
}//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
