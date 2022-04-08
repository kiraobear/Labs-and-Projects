class Parallax{
  constructor(imgs){
    this.imgs = imgs;
    this.loc0a = createVector(0, 0);
    /*this.loc0b = createVector(0, 0);

    this.loc0a = createVector(0, 0);
    this.loc0b = createVector(0, 0);

    this.loc0a = createVector(0, 0);
    this.loc0b = createVector(0, 0);

    this.loc0a = createVector(0, 0);
    this.loc0b = createVector(0, 0);*/
    this.vel = createVector(0, 0);
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
    this.loc0a.add(this.vel);
    //+++++++++++++++++++++++++++++++
    /*if(this.loc0a.x+900 < 0){
      this.loc0a.x = this.loc0a.x+this.imgs[0].width
    }
    if(this.loc0a.x+900>width){
      this.loc0a.x = this.loc0a.x-this.imgs[1].width
    }*/
  }

  render(){
    image(this.imgs[0], this.loc0a.x, this.loc0a.y);
  }
}
