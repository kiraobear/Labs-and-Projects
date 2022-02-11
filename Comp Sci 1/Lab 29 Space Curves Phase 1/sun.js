class Sun{//+++++++++++++++++++++++++++++++++++++++++++++++++++
  constructor(x, y, rad){
    this.loc = createVector(x,y)

  }

  run(){
    this.update();
    this.render();
  }

  update(){

  }

  render(){
    noStroke();
    fill(255, 230, 0);
    ellipse(this.loc.x, this.loc.y, 75);
  }
}//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
