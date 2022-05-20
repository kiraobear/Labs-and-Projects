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
    this.health = 3;
    this.immobile = true;
    this.jumpCount = 0;
    //***** speed for platforms *****
    this.speed = 2;
    //****** jump power for player *****
    this.jumpForce = 3.5;

    //Becomes An Object Containing Each Separate Animation#####
    this.playerSprites = this.loadSprites();
    //Identifier For The Animation Which Will Be Used#####
    this.playerState = "IDLE";
    //Used To Detect A Change In Player State#####
    this.oldState = "IDLE";
    //Used For Changing Player Sprite Facing Direction#####
    this.direction = "n/a";
    //Both Used To Create Frame Index#####
    this.frameCount = 0;
    //The Lower The Speed The Faster#####
    this.frameSpeed = 12;

    this.isDead = false;
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

    for (let i = 0; i < 4; i++){
      spriteTypes.jump[i] = loadImage("art/sprites/jumping/hj" + i + ".png")

    }

    return spriteTypes;

  }

  render(){
    //Length Of The Animation#####
    let frameLength = 0;
    //Current Frame Of Animation#####
    let currentFrame = floor(this.frameCount / this.frameSpeed);


    push();
    imageMode(CENTER);
    if (this.playerState === "JUMP"){
      frameLength = this.playerSprites.jump.length - 1;

      if (this.direction === "LEFT"){
        //***** flips image if the direction is left*****
        scale(-1, 1);
        image(this.playerSprites.jump[currentFrame], -this.loc.x, this.loc.y, this.lngth / 1.6, this.wdth);
      
      }

      image(this.playerSprites.jump[currentFrame], this.loc.x, this.loc.y, this.lngth / 1.6, this.wdth);

    } else if (this.playerState === "WALK"){
      frameLength = this.playerSprites.walk.length - 1;

      if (this.direction === "LEFT"){
        //***** flips image if the direction is left*****
        scale(-1, 1);
        image(this.playerSprites.walk[currentFrame], -this.loc.x, this.loc.y, this.lngth / 1.6, this.wdth);

      }

      image(this.playerSprites.walk[currentFrame], this.loc.x, this.loc.y, this.lngth / 1.6, this.wdth);

    } else if (this.playerState === "IDLE") {
      frameLength = this.playerSprites.idle.length - 1;

      image(this.playerSprites.idle[currentFrame], this.loc.x, this.loc.y, this.lngth, this.wdth);

    }
    pop();

    //Reset Animation#####
    if (currentFrame >= frameLength){
      this.frameCount = 0;
      //Exits Out Of JUMP State After JUMP Animation Is Over#####
      if (this.playerState === "JUMP") this.playerState = "IDLE";

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
    this.changeSprite();
    this.checkDamage();
    this.isDead = (this.health <= 0) ? true : false;

  }
  
  gravity(){
    this.vel.limit(4);
    this.vel.add(this.acc);
    this.loc.add(this.vel);
    
  }
  
  changeSprite(){
    if (!this.immobile){
      //*****change sprite state when keypressed*****
      //Player State Changed To JUMP State In jump Function Below#####
      if(keyIsDown(RIGHT_ARROW) || keyIsDown(68)){
        if (this.playerState !== "JUMP"){
          this.oldState = this.playerState;
          this.playerState = "WALK";

        }

        this.direction = "RIGHT";

      } else if(keyIsDown(LEFT_ARROW) || keyIsDown(65)){
        if (this.playerState !== "JUMP"){
          this.oldState = this.playerState;
          this.playerState = "WALK";

        }

        this.direction = "LEFT";

      } else {
        if (this.playerState !== "JUMP"){
          this.oldState = this.playerState;
          this.playerState = "IDLE";

        }

      }

    }

    if (this.oldState !== this.playerState){
      console.log("");
      console.log("Old State: " + this.oldState);
      console.log("Current State: " + this.playerState);
      console.log("Current Frame: " + (floor(this.frameCount / this.frameSpeed)));
      this.frameCount = 0;
      console.log("Frame Count Reset");

    }

  }

  checkDamage(){
    if (this.loc.y >= height){
      //Just To Make Sure The Chick Is Dead##### :)
      this.health -= 100;

    }
    
  }


  jump(){
    //***** change y velocity if jump & player still has jumps left *****
    if (this.jumpCount > 0){
      this.vel.y = -this.jumpForce;

      //Player Now Jumping#####
      this.playerState = "JUMP";
      //Dont Worry About The Wrong Order Here#####
      //It Helps#####
      this.oldState = this.playerState;
      //Ensures The Full Animation Plays#####
      //The Frame Restart In The changeSprite Function Above#####
      //Wont Work For Jump Unless You Jump Both Times#####
      this.frameCount = 0;

    }

    this.jumpCount--;

  }

}
//End Class Player##########
