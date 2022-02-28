class ThinRectangle{
  constructor(x, y){
    this.loc = createVector(x, y);
  }

  run(){
    this.update();
    this.render();
  }

  update(){

  }

  render(){
    line();
  }
}
