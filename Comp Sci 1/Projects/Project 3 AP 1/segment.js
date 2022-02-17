class Segment {
  constructor(moverIndex){
    this.loc = createVector(movers[moverIndex].loc.x, movers[moverIndex].loc.y);
    this.loc2 = createVector(mainMover.loc.x, mainMover.loc.y);
    this.moverIndex = moverIndex;

  }

  run(){
    this.update();
    this.render();

  }

  render(){
    noFill();
    stroke(255, 0, v);
    strokeWeight(3);
    line(this.loc.x, this.loc.y, this.loc2.x, this.loc2.y);

  }

  update(){
    this.loc.x = movers[this.moverIndex].loc.y;
    this.loc.y = movers[this.moverIndex].loc.x;
    this.loc2.x = mainMover.loc.x;
    this.loc2.y = mainMover.loc.y;

    if(movers[this.moverIndex].loc.dist(mainMover.loc) < 150){
       v = 255;
    } else{
        v = 0;
    }

  }

}
