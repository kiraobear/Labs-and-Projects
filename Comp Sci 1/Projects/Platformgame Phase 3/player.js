class Player{
  constructor(x, y){
    this.loc = createVector(x ,y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0.08);
    this.lngth = 59;
    this.wdth = 65;
    this.immobile = true;
    this.jumpCount = 0;
    //***** speed for platforms *****
    this.speed = 2;
    //****** jump power for player *****
    this.jumpForce = 3.5;

    this.playerSprites = this.loadSprites();
    this.frameCount = 0;

  }

  loadSprites(){
    let spriteTypes = {
      idle : [],
      walk : [],
      jump : []

    };

    for (let i = 0; i < 4; i++){
      spriteTypes.idle[i] = loadImage("art/sprites/idle/hi" + i + ".png")

    }

    for (let i = 0; i < 5; i++){
      spriteTypes.walk[i] = loadImage("art/sprites/walking/hw" + i + ".png")

    }

    for (let i = 0; i < 7; i++){
      spriteTypes.jump[i] = loadImage("art/sprites/jumping/hj" + i + ".png")

    }

    return spriteTypes;

  }

  render(){
    push();
    imageMode(CENTER);
    image(this.playerSprites.idle[floor(this.frameCount / 15)], this.loc.x, this.loc.y, this.lngth, this.wdth);
    pop();

    if (this.frameCount >= 60) this.frameCount = 0;
    this.frameCount++;

    //Checking Bounds#####
    //Delete When Finished#####
    push();
    stroke(255, 0, 0);
    strokeWeight(3);
    point(this.loc.x, this.loc.y + (this.wdth / 8));
    pop();

    push();
    stroke(0, 255, 0);
    line(this.loc.x - 20, this.loc.y + (this.wdth / 2), this.loc.x + 20, this.loc.y + (this.wdth / 2));
    pop();

  }

  update(){
    this.gravity();

  }

  gravity(){
    this.vel.limit(4);
    this.vel.add(this.acc);
    this.loc.add(this.vel);

  }

  jump(){
    //***** change y velocity if jump & player still has jumps left *****
    if (this.jumpCount > 0) this.vel.y = -this.jumpForce;
    this.jumpCount--;

  }

}
