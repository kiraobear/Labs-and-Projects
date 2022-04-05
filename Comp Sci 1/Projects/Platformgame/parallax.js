class Parallax{
  constructor(x, y, imgs){
    this.loc = createVector(x, y);
    this.vel = createVector(0, 0);
    this.imgs = imgs;
  }

  run(){
    this.update();
    //this.render();
  }

  update(){
    //+++++++++++++++++++++++++++++++
    this.loc.add(this.vel);
  }

  render(){
    image(this.imgs[0], this.loc.x, this.loc.y, 900, 700);
  }
}
