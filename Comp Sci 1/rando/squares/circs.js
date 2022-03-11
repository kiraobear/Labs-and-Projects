class Circ{
  constructor(x, y){
    this.loc = createVector(x, y)
    this.clr = (255, 0, 0);
    this.diam = random(100, 200);
  }

  run(){
    //this.update();
    this.render();
  }

  update(){

  }

  render(){
    fill(this.clr);
    ellipse(this.loc.x, this.loc.y, this.diam);
  }
}
