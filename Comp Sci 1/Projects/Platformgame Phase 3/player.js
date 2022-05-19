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
    //Identifier For The Animation Which Will Be Used#####
    this.playerState = "IDLE";
    this.oldState = "N/A";
    //Both Used To Create Frame Index#####
    this.frameCount = 0;
    //The Lower The Speed The Faster#####
    this.frameSpeed = 12;

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
    //Will Equal The Sprite Animation Length(Minus 1)#####
    //Used To Ensure The Animation Runs In A Loop#####
    let frameMultiplier = 0;
    //Current Frame Of Animation#####
    let currentFrame = this.frameCount / this.frameSpeed;
    
    //Reset Animation#####
    if (this.frameCount >= this.frameSpeed * frameMultiplier){
      this.frameCount = 0;
      
    }
    this.frameCount++;
    
    push();
    imageMode(CENTER);
    if(this.playerState === "JUMP"){
      image(this.playerSprites.jump[0], this.loc.x, this.loc.y, this.lngth / 1.6, this.wdth);

    } else if(this.playerState === "WALK"){
      image(this.playerSprites.walk[0], this.loc.x, this.loc.y, this.lngth / 1.6, this.wdth);

    } else {//*****idle if nothing else*****
      image(this.playerSprites.idle[0], this.loc.x, this.loc.y, this.lngth, this.wdth);
      
    }

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
  
  changeSprite(){//*****change sprite state when keypressed*****
    if(keyIsDown(RIGHT_ARROW) || keyIsDown(68)){
      this.playerState = "WALK";

    } else if(keyIsDown(LEFT_ARROW) || keyIsDown(65)){
      this.playerState = "WALK";

    } else {
      this.playerState = "IDLE";
      
    }
    
  }

  frameReset(){
    
    
  }
  
  update(){
    this.gravity();
    this.changeSprite();
    
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
      this.playerState = "JUMP";

    }

    this.jumpCount--;

  }

}
//End Class Player##########
