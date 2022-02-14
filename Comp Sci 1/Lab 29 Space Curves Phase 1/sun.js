class Sun{//+++++++++++++++++++++++++++++++++++++++++++++++++++
  constructor(x, y, rad){
    this.loc = createVector(x,y)//sun location

  }

  run(){
    this.update();
    this.render();
  }

  update(){

  }

  render(){
    stroke(0);
    strokeWeight(0.1);
    line(this.loc.x, this.loc.y, planet.loc.x, planet.loc.y);
    //noStroke();
    //fill(255, 230, 0);
    //ellipse(this.loc.x, this.loc.y, 75);//draw sun
  }
}//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
