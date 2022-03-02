class Bud{
  constructor(x, y){
    this.loc = createVector(x, y);
    this.clr = (random(0, 255), random(0, 255), random(0, 255));
  }

  run(){
    this.update();
    this.render();
  }

  update(){

  }

  render(){
    ellipse(this.loc.x, this.loc.y, 50);
    rect(this.loc.x, this.loc.y, 50, 50); 
  }
}
