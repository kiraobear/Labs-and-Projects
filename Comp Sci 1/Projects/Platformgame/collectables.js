class Collectable{
  constructor(x, y){
    this.loc = createVector(x, y);
  }

  run(){
    //this.update();
    this.render();
  }

//  update(){

//  }

  render(){
    ellipse(this.loc.x, this.loc.y, 20);
  }
}
