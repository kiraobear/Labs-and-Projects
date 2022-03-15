class Platform{
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
    fill(255, 0, 255);
    rect(this.loc.x, this.loc.y, 100, 20)
    rect(250, 300, 100, 20);
  }
}
