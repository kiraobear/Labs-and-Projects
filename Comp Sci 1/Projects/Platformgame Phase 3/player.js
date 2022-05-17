class Player{
  constructor(x, y){
    this.loc = createVector(x ,y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0.08);
    this.lngth = 30;
    this.wdth = 30;
    this.immobile = true;
    this.jumpCount = 0;
    //***** speed for platforms *****
    this.speed = 2;
    //****** jump power for player *****
    this.jumpForce = 9;

    this.playerSprites = this.loadSprites();

  }

  loadSprites(){
    let spriteTypes = {
      idle : [],
      walk : [],
      jump : []

    };

    for (let i = 0; i < 4; i++){
      spriteTypes.idle[i] = loadImage("art/sprites/idle" + i + ".png")

    }

    for (let i = 0; i < 5; i++){
      spriteTypes.walk[i] = loadImage("art/sprites/walking" + i + ".png")

    }

    for (let i = 0; i < 7; i++){
      spriteTypes.jump[i] = loadImage("art/sprites/jumping" + i + ".png")

    }

    return spriteTypes;

  }

  render(){
    push();
    noStroke();
    fill(255);
    ellipse(this.loc.x, this.loc.y, this.lngth, this.wdth);
    pop();

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
    this.vel.limit(3);
    this.vel.add(this.acc);
    this.loc.add(this.vel);

  }

  jump(){
    //***** change y velocity if jump & player still has jumps left *****
    if (this.jumpCount > 0) this.vel.y = -this.jumpForce;
    this.jumpCount--;

  }

}
