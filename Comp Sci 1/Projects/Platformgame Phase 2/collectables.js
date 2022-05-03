class Collectable{
  constructor(){
    this.loc = createVector(game.platforms[i].loc.x, game.platforms[i].loc.y);
  }

  run(){
    //this.update();
    this.render();
  }

//  update(){

//  }

  render(){
    fill(200, 190, 20);
    ellipse(this.loc.x, this.loc.y, 20);
  }
}
