//Start Class Enemy##########
class Enemy{

    constructor(x, y){
        this.loc = createVector(x, y);
        this.vel = createVector(0, 0);
        this.lngth = 50;
        this.wdth = 50;
        //***** bounds for the enemey *****
        this.bounds = {
            left : this.loc.x,
            right : this.loc.x + this.lngth,
            top : this.loc.y,
            bottom : this.loc.y + this.wdth

        }
        //****** collision detection with hero *****
        this.isColliding = this.colliding();
    }

    update(){
        this.isColliding = this.colliding();
    }

    colliding(){
        playerX = chickFiLost.player.loc.x
        playerY = chickFiLost.player.loc.y

        if(playerX >= this.bounds.left &&
            playerX <= this.bounds.right &&
            playerY >= this.bounds.bottom &&
            playerY <= this.bounds.top){
                return true;
        }
    }

    render(){
        ellipse(this.loc.x, this.loc.y, this.lngth, this.wdth);
    }
}
//End Class Enemy##########
