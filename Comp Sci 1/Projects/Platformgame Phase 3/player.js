//Ricardo & Kira & Emma & Maddie
//Company Name: Truett Cathy
//Chick - Fi - Lost

//Start Class Player##########
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

    //Becomes An Object Containing Each Separate Animation#####
    this.playerSprites = this.loadSprites();
    //Frame Index#####
    this.frameCount = 0;
    this.frameSpeed = 12;
    //Identifier For The Animation Which Will Be Used#####
    //Changed In Platform Class#####
    //JUMP Sprite State Changed In Jump Function below#####
    this.spriteState = "IDLE";

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
    //Will Equal The Sprite Animation Length(Minus 1) In Use
    //To Ensure The Animation Run In A Loop#####
    let frameMultiplier = 0;
    //Current Frame Of Animation#####
    //Will Be this.frameCount / this.frameSpeed#####
    //OH And OFC We Floor It#####
    let currentFrame = 0;

    if (this.spriteState === "IDLE"){
      this.frameCount = 0;//MAKE THIS HAPPEN ONLY ONCE!!!!!!!!!!!!!!!!!!!!!!!!
      frameMultiplier = this.playerSprites.idle.length - 1;
      currentFrame = floor(this.frameCount / this.frameSpeed);

      push();
      imageMode(CENTER);
      image(this.playerSprites.idle[currentFrame], this.loc.x, this.loc.y, this.lngth, this.wdth);
      pop();

    } else if (this.spriteState === "WALK"){
      this.frameCount = 0;//MAKE THIS HAPPEN ONLY ONCE!!!!!!!!!!!!!!!!!!!!!!!!
      frameMultiplier = this.playerSprites.walk.length - 1;
      currentFrame = floor(this.frameCount / this.frameSpeed);

      push();
      imageMode(CENTER);
      image(this.playerSprites.walk[currentFrame], this.loc.x, this.loc.y, this.lngth / 1.6, this.wdth);
      pop();

    } else if (this.spriteState === "JUMP"){
      this.frameCount = 0;//MAKE THIS HAPPEN ONLY ONCE!!!!!!!!!!!!!!!!!!!!!!!!
      frameMultiplier = this.playerSprites.jump.length - 1;
      currentFrame = floor(this.frameCount / this.frameSpeed);

      push();
      imageMode(CENTER);
      image(this.playerSprites.jump[currentFrame], this.loc.x, this.loc.y, this.lngth / 1.6, this.wdth);
      pop();

    }

    //Reset Animation#####
    if (this.frameCount >= this.frameSpeed * frameMultiplier){
      this.frameCount = 0;

    }
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
    if (this.jumpCount > 0){
      this.vel.y = -this.jumpForce;
      //Player Now Jumping#####
      this.spriteState = "JUMP";
      
    }
    
    this.jumpCount--;

  }

}
//End Class Player##########
