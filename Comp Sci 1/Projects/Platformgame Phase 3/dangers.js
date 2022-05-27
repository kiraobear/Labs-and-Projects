//Start Class Enemy##########
class Enemy{

  constructor(x, y, pL){
    this.enemySprites = this.loadFrames();
    this.pLoc = createVector(x, y);
    this.offSetLoc = createVector(pL / 2, y);
    this.vel = createVector(0.5, 0);
    this.lngth = 60;
    this.wdth = 45;
    this.eLoc = createVector(this.pLoc.x + this.offSetLoc.x, y - 5);

    //***** bounds for the enemey *****
    this.bounds = {
      left : this.eLoc.x - (this.lngth / 2),
      right : this.eLoc.x + (this.lngth / 2),
      top : this.eLoc.y - (this.wdth / 2),
      bottom : this.eLoc.y + (this.wdth / 2)

    };

    this.pLngth = pL;

    //****** collision detection with hero *****
    this.playerDetected /* = this.playerDetection;*/
    //ISSUE SOLVED
    //FOR SOME REASON THE PLAYER ISNT DEFENIED YET WHEN THE ENEMIES
    //ARE BEING MADE BUT AFTERWARDS IT IS

    this.frameCount = 0;
    this.frameSpeed = 9;

  }

  loadFrames(){
    let enemyFrames = [];
    for (let i = 0; i < 4; i++){
      enemyFrames[i] = loadImage("art/sprites/enemy/e" + i + ".png");

    }

    return enemyFrames;

  }

  render(){
    let currentFrame = floor(this.frameCount / this.frameSpeed);

    push();
    imageMode(CENTER);
    if (this.vel.x < 0){
      scale(-1, 1);
      image(this.enemySprites[currentFrame], -this.eLoc.x, this.eLoc.y, this.lngth, this.wdth);

    } else {
      image(this.enemySprites[currentFrame], this.eLoc.x, this.eLoc.y, this.lngth, this.wdth);

    }
    pop();

    if (currentFrame >= this.enemySprites.length - 1){
      this.frameCount = 0;

    }

    this.frameCount++;

  }

  update(pX){
    this.move(pX);
    this.updateBounds();
    this.playerDetected = this.playerDetection();

  }

  move(pX){
    this.pLoc.x = pX;
    this.offSetLoc.add(this.vel);

    this.eLoc.x = this.pLoc.x + this.offSetLoc.x;

    if (this.offSetLoc.x >= this.pLngth ||
      this.offSetLoc.x <= 0){
      this.vel.x = -this.vel.x;

    }

  }

  updateBounds(){
    this.bounds.right = this.eLoc.x - (this.lngth / 2);
    this.bounds.left = this.eLoc.x + (this.lngth / 2);
    this.bounds.top = this.eLoc.y - (this.wdth );
    this.bounds.bottom = this.eLoc.y + (this.wdth / 2);
  }

  playerDetection(){
    //Player Location and Bounds#####
    let playerX = chickFiLost.player.loc.x;
    let playerY = chickFiLost.player.loc.y;
    let playerWdthBound = chickFiLost.player.wdth / 8;
    let playerLngthBound = chickFiLost.player.lngth;

    if (playerY + playerWdthBound >= this.bounds.top &&
      playerY - playerWdthBound <= this.bounds.bottom &&
      playerX + playerLngthBound >= this.bounds.left &&
      playerX - playerLngthBound <= this.bounds.right){

        if (chickFiLost.player.vel.y <= 0) chickFiLost.player.health--;

        return true;

      }

      return false;

    }

  }
  //End Class Enemy##########
