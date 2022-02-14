class Moon{
  constructor(){
    this.loc = createVector(0, 0)//since location is determined by planet it can be 0
    this.vel = createVector(0, 0);
    this.mor = 50;//moon orbital radius
    this.angle = 0;
  }

  run(){
    this.update();
    this.render();
  }

  update(){
    this.loc.add(this.vel);//add velocity to location
    this.angle = this.angle + 0.05//change angle

    moon.loc.x = planet.loc.x + cos(this.angle)*this.mor//orbiting code
    moon.loc.y = planet.loc.y + sin(this.angle)*this.mor
  }

  render(){
    //fill(0, 200, 255)
    //ellipse(this.loc.x, this.loc.y, 10);//draw ellipse
  }
}//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
