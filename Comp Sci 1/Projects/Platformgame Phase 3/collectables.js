class Collectables{
    constructor(x, y){
        this.loc = createVector(x, y);
        this.hght = 20;
        this.wdth = 20;
        //***** Collectable Bounds *****
        this.bounds = {
            top : this.loc.y,
            lower : this.loc.y + this.hght,
            left : this.loc.x,
            right : this.loc.x + this.lngth

        };
    }

    update(){
        this.playerCollision();
    }
    
    playerCollision(){
        let playerX = chickFiLost.player.x;
        let playerY = chickFiLost.player.y;

        
    }
}