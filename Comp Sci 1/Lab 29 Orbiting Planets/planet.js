class Planet{//++++++++++++++++++++++++++++++++++++++++++++++++
  constructor(x, y){
    this.loc = createVector(x, y, por)
    this.por = por
    this.angle = 0;
    this.vel = createVector(0, 0);
  }

  run(){
    this.update();
    this.render();
  }

  update(){
    this.loc.add(this.vel);
    angle = angle + 1

    this.loc.x = sun.loc.x + cos(angle)*planetOrbitalRadius
    this.loc.y = sun.loc.y + sin(angle)*planetOrbitalRadius

  }

  render(){
    fill(255, 140, 30);
    ellipse(this.loc.x, this.loc.y, 20)
  }
}//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
