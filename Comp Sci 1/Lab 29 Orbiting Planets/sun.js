class Sun{//+++++++++++++++++++++++++++++++++++++++++++++++++++
  constructor(x, y, rad){
    this.loc = createVector(x,y)
    this.rad = 0;
  }

  run(){
    this.update();
    this.render();
  }

  update(){

  }

  render(){
    fill(255, 208, 0);
    ellipse(this.loc.x, this.loc.y, 75);
  }
}//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
