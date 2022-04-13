class Parallax{
  constructor(imgs){
    this.imgs = imgs;
    this.loc0a = createVector(0, 0);
    this.loc0b = createVector(this.loc0a.x+this.imgs[0].width, this.loc0a.y);

    this.loc1a = createVector(0, height-this.imgs[1].height);
    this.loc1b = createVector(this.loc1a.x+this.imgs[1].width, height-this.imgs[1].height);

    this.loc2a = createVector(0, height-this.imgs[2].height);
    this.loc2b = createVector(this.loc2a.x+this.imgs[2].width, height-this.imgs[2].height);

    //++++++++++++++++++++++++++++++++
    this.vel0a = createVector(0, 0);
    this.vel0b = createVector(0, 0);

    this.vel1a = createVector(0, 0);
    this.vel1b = createVector(0, 0);

    this.vel2a = createVector(0, 0);
    this.vel2b = createVector(0, 0);
  }

  run(){
    this.update();
    //this.render();
  }

  update(){
    if(keyIsDown(LEFT_ARROW)){
      this.vel0a.x = 0.5;
      this.vel0b.x = 0.5;
    }else if(keyIsDown(RIGHT_ARROW)){
      this.vel0a.x = -0.5;
      this.vel0b.x = -0.5;
    }else{
      this.vel0a.x = 0;
      this.vel0b.x = 0;
    }

    if(keyIsDown(LEFT_ARROW)){
      this.vel1a.x = 1;
      this.vel1b.x = 1;
    }else if(keyIsDown(RIGHT_ARROW)){
      this.vel1a.x = -1;
      this.vel1b.x = -1;
    }else{
      this.vel1a.x = 0;
      this.vel1b.x = 0;
    }

    if(keyIsDown(LEFT_ARROW)){
      this.vel2a.x = 2;
      this.vel2b.x = 2;
    }else if(keyIsDown(RIGHT_ARROW)){
      this.vel2a.x = -2;
      this.vel2b.x = -2;
    }else{
      this.vel2a.x = 0;
      this.vel2b.x = 0;
    }
    //+++++++++++++++++++++++++++++++
    this.loc0a.add(this.vel0a);
    this.loc0b.add(this.vel0b);

    this.loc1a.add(this.vel1a);
    this.loc1b.add(this.vel1b);

    this.loc2a.add(this.vel2a);
    this.loc2b.add(this.vel2b);
    //+++++++++++++++++++++++++++++++ image 2
    if(this.loc0a.x < -width){
      this.loc0a.x = this.loc0b.x+this.imgs[0].width
    }
    if(this.loc0b.x < -width){
      this.loc0b.x = this.loc0a.x+this.imgs[0].width
    }
//+++++++++++++++++++++++++++++++++++++++++ image 1
    if(this.loc1a.x < -width){
      this.loc1a.x = this.loc1b.x+this.imgs[1].width
    }
    if(this.loc1b.x < -width){
      this.loc1b.x = this.loc1a.x+this.imgs[1].width
    }
//+++++++++++++++++++++++++++++++++++++image 3
    if(this.loc2a.x < -width){
      this.loc2a.x = this.loc2b.x+this.imgs[2].width
    }
    if(this.loc2b.x < -width){
      this.loc2b.x = this.loc2a.x+this.imgs[2].width
    }
  }

  render(){
    image(this.imgs[0], this.loc0a.x, this.loc0a.y);
    image(this.imgs[0], this.loc0b.x, this.loc0b.y);

    image(this.imgs[1], this.loc1a.x, this.loc1a.y);
    image(this.imgs[1], this.loc1b.x, this.loc1b.y);

    image(this.imgs[2], this.loc2a.x, this.loc2a.y);
    image(this.imgs[2], this.loc2b.x, this.loc2b.y);
  }
}
