//Start Class Enemy##########
class Enemy{

    constructor(x, y, pL){
        this.pLoc = createVector(x, y);
        this.offSetLoc = createVector(pL / 2, y);
        this.eLoc = createVector(this.pLoc.x + this.offSetLoc.x, y);
        this.vel = createVector(0.5, 0);
        this.lngth = 30;
        this.wdth = 30;

        //***** bounds for the enemey *****
        this.bounds = {
            left : this.eLoc.x,
            right : this.eLoc.x + this.lngth,
            top : this.eLoc.y,
            bottom : this.eLoc.y + this.wdth

        };

        this.pLngth = pL;

        //****** collision detection with hero *****
        this.playerDetected = /*this.playerDetection*/;
        //ISSUE SOLVED
        //FOR SOME REASON THE PLAYER ISNT DEFENIED YET WHEN THE ENEMIES
        //ARE BEING MADE BUT AFTERWARDS IT IS

    }

    render(){
      ellipse(this.eLoc.x, this.eLoc.y, this.lngth, this.wdth);

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

      if (this.offSetLoc.x >= this.pLngth){
        this.vel.x = -this.vel.x;

      } else if (this.offSetLoc.x <= 0){
        this.vel.x = -this.vel.x;

      }

    }

    updateBounds(){
      this.bounds.right = this.eLoc.x;
      this.bounds.left = this.eLoc.x + this.lngth;
      this.bounds.top = this.eLoc.y;
      this.bounds.bottom = this.eLoc.y + this.wdth;
    }

    playerDetection(){
        //Player Location and Bounds#####
    let playerX = chickFiLost.player.loc.x;
    let playerY = chickFiLost.player.loc.y;
    let playerWdthBound = chickFiLost.player.wdth / 2;
    let playerLngthBound = chickFiLost.player.lngth / 2;

    if (playerY + playerWdthBound >= this.bounds.top &&
      playerY - playerWdthBound <= this.bounds.bottom &&
      playerX + playerLngthBound >= this.bounds.left &&
      playerX - playerLngthBound <= this.bounds.right){
                return true;

        }

        return false;

    }

}
//End Class Enemy##########
