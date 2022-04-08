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
    if(keyIsDown(LEFT_ARROW)){
      this.vel.x = 2;
    }else if(keyIsDown(RIGHT_ARROW)){
      this.vel.x = -2;
    }else{
      this.vel.x = 0;
    }
    //+++++++++++++++++++++++++++++++
    this.loc.add(this.vel);
  }

  render(){
    image(this.imgs[0], this.loc.x, this.loc.y);
    image(this.imgs[1], this.loc.x, this.loc.y+300);
    image(this.imgs[2], this.loc.x, this.loc.y+500);

    image(this.imgs[0], this.loc.x-this.imgs[0].width, this.loc.y);
    image(this.imgs[1], this.loc.x-this.imgs[1].width, this.loc.y+300);
    image(this.imgs[2], this.loc.x-this.imgs[2].width, this.loc.y+500);

    image(this.imgs[0], this.loc.x+this.imgs[0].width, this.loc.y);
    image(this.imgs[1], this.loc.x+this.imgs[1].width, this.loc.y+300);
    image(this.imgs[2], this.loc.x+this.imgs[2].width, this.loc.y+500);

    if(this.loc.x+900 < 0){
      this.loc.x = this.loc.x+this.imgs[0].width
    }
    if(this.loc.x+900>width){
      this.loc.x = this.loc.x-this.imgs[1].width
    }
  }
}
