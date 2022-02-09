class Paddle{//+++++++++++++++++++++++++++++ start of paddle class
  constructor(x, y, w, h, clr){
    this.loc = createVector (x, y);
    this.w = w;
    this.h = h;
    this.clr = color(155, 255, 255);
  }

  run(){
    this.update();
    this.render();
  }

  update(){
    var mouseLoc = createVector(mouseX, 400);
    this.loc = p5.Vector.lerp(this.loc, mouseLoc, 0.09);
  }
  render(){
    fill(this.clr);
    rect(this.loc.x, this.loc.y, this.w, this.h);
  }
}//++++++++++++++++++++++++++++++ end of paddle class
