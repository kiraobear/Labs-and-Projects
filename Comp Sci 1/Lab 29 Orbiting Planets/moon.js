class Moon{
  constructor(x, y){
    this.loc = createVector(x, y)
    this.vel = createVector(0, 0);
    this.por = por;
  }

  run(){
    this.update();
    this.render();
  }

  update(){
    moon.loc.x = planet.loc.x + cos(angle)*moonOrbitalRadius
    moon.loc.y = planet.loc.y + sin(angle)*moonOrbitalRadius
  }

  render(){
    fill(0, 200, 255)
    ellipse(this.loc.x, this.loc.y, 10);
  }
}//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
