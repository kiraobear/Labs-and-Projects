class Planet{//++++++++++++++++++++++++++++++++++++++++++++++++
  constructor(){
    this.loc = createVector(0, 0);//loc is determined by sun
    this.angle = 0;
    this.vel = createVector(0, 0);
    this.or = 100;//orbital radius
    this.angle = 0;
  }

  run(){
    this.update();
    this.render();
  }

  update(){

    this.loc.add(this.vel);//add velocity to location
    this.angle = this.angle + 0.009

    this.loc.x = sun.loc.x + cos(this.angle)*this.or//location to angle and orbital radius
    this.loc.y = sun.loc.y + sin(this.angle)*this.or

  }

  render(){
    stroke(0);
    strokeWeight(0.1);
    line(this.loc.x, this.loc.y, moon.loc.x, moon.loc.y);
    //noStroke();
    //fill(255, 140, 30);
    //ellipse(this.loc.x, this.loc.y, 20)
  }
}//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
