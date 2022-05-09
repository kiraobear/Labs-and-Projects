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
        //DELETE AFTER TESTING#####
        this.render();

        //pX --> Platform X Location#####
        //pL --> Platform Length#####
        this.follow(pX, pL);
        this.updateBounds();
        this.playerDetected = this.playerDetection();

    }

    follow(pX, pL){
        this.loc.x = pX + (pL / 2);

    }

    updateBounds(){
        this.bounds.top = this.loc.y;
        this.bounds.lower = this.loc.y + this.wdth;
        this.bounds.left = this.loc.x;
        this.bounds.right = this.loc.x + this.lngth;

    }

    playerDetection(){
        //Player Location and Bounds#####
        let playerX = chickFiLost.player.loc.x;
        let playerY = chickFiLost.player.loc.y;
        let playerWdthBound = chickFiLost.player.wdth / 2;
        let playerLngthBound = chickFiLost.player.lngth / 2;

        if (playerY + playerWdthBound >= this.bounds.top &&
            playerY - playerWdthBound <= this.bounds.lower &&
            playerX >= this.bounds.left &&
            playerX <= this.bounds.right){

                console.log("Detected");
                return true;

            }

            return false

    }

    render(){
        
    }

}
