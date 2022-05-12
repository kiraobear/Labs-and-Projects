//Start Class Collectable##########
class Collectable{
  constructor(x, y, l, w){
    this.loc = createVector(x, y);
    this.lngth = l;
    this.wdth = w;
    //***** Collectable Bounds *****
    this.bounds = {
      top : this.loc.y,
      lower : this.loc.y + this.wdth,
      left : this.loc.x,
      right : this.loc.x + this.lngth

    };

    this.playerDetected = false;

  }

  update(pX, pL){
    //pX --> Platform X Location#####
    //pL --> Platform Length#####
    this.follow(pX, pL);
    this.updateBounds();
    this.playerDetected = this.playerDetection();

  }

  follow(pX, pL){
    //Centers Collectable To Center Of Parent Platform#####
    this.loc.x = pX + (pL / 2) - (this.lngth / 2);

  }

  updateBounds(){
    this.bounds.top = this.loc.y;
    this.bounds.lower = this.loc.y + this.wdth;
    this.bounds.left = this.loc.x - (this.lngth / 2);
    this.bounds.right = this.loc.x + (this.lngth / 2);

  }

  playerDetection(){
    //Player Location and Bounds#####
    let playerX = chickFiLost.player.loc.x;
    let playerY = chickFiLost.player.loc.y;
    let playerWdthBound = chickFiLost.player.wdth / 2;
    let playerLngthBound = chickFiLost.player.lngth / 2;

    if (playerY + playerWdthBound >= this.bounds.top &&
      playerY - playerWdthBound <= this.bounds.lower &&
      playerX + playerLngthBound >= this.bounds.left &&
      playerX - playerLngthBound <= this.bounds.right){

        console.log("DETECTED");
        return true;

      }

      return false

    }

  }
//End Class Collectable##########

//Start Class Seed##########
class Seed extends Collectable{
  constructor(x, y, l, w){
    super(x, y, l, w);

  }

  render(){
    push();
    fill(255, 0, 0);
    rect(this.loc.x, this.loc.y, this.lngth, this.wdth);
    pop();

  }

}
//End Class Seed##########

//Start Feather Seed##########
class Feather extends Collectable{
  constructor(x, y, l, w){
    super(x, y, l, w);

  }

  render(){
    push();
    fill(0, 255, 0);
    rect(this.loc.x, this.loc.y, this.lngth, this.wdth);
    pop();

  }

}
//End Feather Seed##########

//Start Heart Seed##########
class Heart extends Collectable{
  constructor(x, y, l, w){
    super(x, y, l, w);

  }

  render(){
    push();
    fill(0, 0, 255);
    rect(this.loc.x, this.loc.y, this.lngth, this.wdth);
    pop();

  }

}
//End Heart Seed##########
