//Start Class Enemy##########
class Enemy{

    constructor(x, y, lftEdge, rghtEdge){
        this.loc = createVector(x, y);
        this.vel = createVector(0.5, 0);
        this.lngth = 30;
        this.wdth = 30;
        //***** bounds for the enemey *****
        this.bounds = {
            left : this.loc.x,
            right : this.loc.x + this.lngth,
            top : this.loc.y,
            bottom : this.loc.y + this.wdth

        };
        
        this.lftEdge = lftEdge;
        this.rghtEdge = rghtEdge;

        //****** collision detection with hero *****
        // this.isColliding = this.colliding();

    }

    update(){
        this.move();
        // this.isColliding = this.colliding();

    }
    
    move(pX){
        this.loc.x = pX;
        this.loc.add(this.vel);
        
        //***** check location to platform bounds and change vel *****
        if (this.loc.x <= this.lftEdge || this.loc.x >= this.rghtEdge){
            this.vel.x = -this.vel.x;
            
        }

    }
    
    colliding(){
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
        
    }

    render(){
        ellipse(this.loc.x, this.loc.y, this.lngth, this.wdth);

    }
}
//End Class Enemy##########
