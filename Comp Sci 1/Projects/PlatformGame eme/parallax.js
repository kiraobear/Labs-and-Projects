
class Parallax{
  constructor(imgs){
    this.imgs = imgs;
    this.loc0a = createVector(0, 0);
    this.loc0b = createVector(this.imgs[0].width, this.loc0a.y);

    this.loc1a = createVector(0, height-this.imgs[1].height);
    this.loc1b = createVector(this.imgs[1].width, height-this.imgs[1].height);

    this.loc2a = createVector(0, height-this.imgs[2].height);
    this.loc2b = createVector(this.imgs[2].width, height-this.imgs[2].height);

    this.loc3a = createVector(0, height-this.imgs[3].height);
    this.loc3b = createVector(this.imgs[3].width, height-this.imgs[3].height);

    this.loc4a = createVector(0, height-this.imgs[4].height);
    this.loc4b = createVector(this.imgs[4].width, height-this.imgs[4].height);

    //++++++++++++++++++++++++++++++++
    this.vel0a = createVector(0, 0);

    this.vel1a = createVector(0, 0);

    this.vel3a = createVector(0, 0);

    this.vel4a = createVector(0, 0);
  }

  run(){
    this.update();
  }

  update(){
    if(keyIsDown(LEFT_ARROW)){
      this.vel0a.x = 0.5;
      this.vel1a.x = 1;
      this.vel3a.x = 2;
      this.vel4a.x = 3;

      game.state = 1
    }else if(keyIsDown(RIGHT_ARROW)){
      this.vel0a.x = -0.5;
      this.vel1a.x = -1;
      this.vel3a.x = -2;
      this.vel4a.x = -3;

      game.state = 2;
    }else{
      this.vel0a.x = 0;
      this.vel1a.x = 0;
      this.vel3a.x = 0;
      this.vel4a.x = 0;

      game.state = 0;
    }

    //+++++++++++++++++++++++++++++++
    this.loc0a.add(this.vel0a);
    this.loc0b.add(this.vel0a);

    this.loc1a.add(this.vel1a);
    this.loc1b.add(this.vel1a);

    this.loc2a.add(this.vel1a);
    this.loc2b.add(this.vel1a);

    this.loc3a.add(this.vel3a);
    this.loc3b.add(this.vel3a);

    this.loc4a.add(this.vel4a);
    this.loc4b.add(this.vel4a);
    //+++++++++++++++++++++++++++++++ image 2
    if(this.loc0a.x < -width){
      this.loc0a.x = width;
    }
    if(this.loc0b.x < -width){
      this.loc0b.x = width;
    }
    //+++++++++++++++++++++++++++++++++++++++++ image 1
    if(this.loc1a.x < -width){
      this.loc1a.x = width;
    }
    if(this.loc1b.x < -width){
      this.loc1b.x = width;
    }
    //+++++++++++++++++++++++++++++++++++++image 3
    if(this.loc2a.x < -width){
      this.loc2a.x = width;
    }
    if(this.loc2b.x < -width){
      this.loc2b.x = width;
    }
    //+++++++++++++++++++++++++++++++++++image 4
    if(this.loc3a.x < -this.imgs[3].width){
      this.loc3a.x = width;
    }
    if(this.loc3b.x < -width){
      this.loc3b.x = width;
    }
    //+++++++++++++++++++++++++++++++++++image 5
    if(this.loc4a.x < -width){
      this.loc4a.x = width;
    }
    if(this.loc4b.x < -width){
      this.loc4b.x = width;
    }
  }

  render(){

    image(this.imgs[0], this.loc0a.x, this.loc0a.y);
    image(this.imgs[0], this.loc0b.x, this.loc0b.y);

    image(this.imgs[1], this.loc1a.x, this.loc1a.y);
    image(this.imgs[1], this.loc1b.x, this.loc1b.y);

    image(this.imgs[2], this.loc2a.x, this.loc2a.y);
    image(this.imgs[2], this.loc2b.x, this.loc2b.y);

    image(this.imgs[3], this.loc3a.x, this.loc3a.y);
    image(this.imgs[3], this.loc3b.x, this.loc3b.y);

    image(this.imgs[4], this.loc4a.x, this.loc4a.y);
    image(this.imgs[4], this.loc4b.x, this.loc4b.y);
  }
}
