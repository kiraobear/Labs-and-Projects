class Parallax{
  constructor(imgs){
    this.imgs = imgs;
    this.loc0a = createVector(0, 0);
    this.loc0b = createVector(this.loc0a.x+this.imgs[0].width, this.loc0a.y);

    this.loc1a = createVector(0, 0);
    //this.loc1b = createVector(0, height-369);

    this.loc2a = createVector(0, height-this.imgs[2].height);
    this.loc2b = createVector(0, height-this.imgs[2].height);

    this.loc3a = createVector(0, height-this.imgs[3].height);
    this.loc3b = createVector(0, height-this.imgs[3].height);
    //++++++++++++++++++++++++++++++++
    this.vel0a = createVector(0, 0);
    this.vel0b = createVector(0, 0);
  }

  run(){
    this.update();
    //this.render();
  }

  update(){
    if(keyIsDown(LEFT_ARROW)){
      this.vel0a.x = 2;
      this.vel0b.x = 2;
    }else if(keyIsDown(RIGHT_ARROW)){
      this.vel0a.x = -2;
      this.vel0b.x = -2;
    }else{
      this.vel0a.x = 0;
      this.vel0b.x = 0;
    }
    //+++++++++++++++++++++++++++++++
    this.loc0a.add(this.vel0a);
    this.loc0b.add(this.vel0b);
    //+++++++++++++++++++++++++++++++
    if(this.loc0a.x+this.imgs[0].width < 0){
      this.loc0a.x = this.loc0a.x+this.imgs[0].width
    }
    if(this.loc0b.x+this.imgs[0].width < 0){
      this.loc0b.x = this.loc0b.x+this.imgs[0].width
    }
  }

  render(){
    image(this.imgs[0], this.loc0a.x, this.loc0a.y);
    image(this.imgs[0], this.loc0b.x, this.loc0b.y);

    image(this.imgs[1], this.loc1a.x, this.loc1a.y);
    //image(this.imgs[1], this.loc1b.x, this.loc1b.y);
  }
}
