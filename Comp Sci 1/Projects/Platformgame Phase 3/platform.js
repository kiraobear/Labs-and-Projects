class Platform{
    constructor(){
       this.loc = createVector(floor(random(width)), floor(random(height)));
       this.vel = createVector(0, 0); 
       this.lngth = floor(random(50, 100));
       this.wdth = 15;
       //Platform Bounds#####
       this.bounds = {
           top : this.loc.y,
           //Half The Platform Height#####
           lower : this.loc.y + (this.hght / 2),
           left : this.loc.x,
           right : this.loc.x + this.lngth

       };

    }
    
    render(){
        push();
        noStroke();
        fill(0, 0, 255);
        rect(this.loc.x, this.loc.y, this.lngth, this.wdth);
        pop();
         
    }

    update(i){
        this.move();
        this.checkPlayerCollision(i);

    }

    move(){
        //Prevent Platforms From Moving Until Player Settles A Platform Below
        if (!chickFiLost.player.immobile){
            //***** if the arrow key is down make x velocity speed variable *****
            if (keyIsDown(LEFT_ARROW) || keyIsDown(65)){
                this.vel.x = chickFiLost.player.speed;
    
            } else if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)){
                this.vel.x = -chickFiLost.player.speed;
    
            } else {
                this.vel.x = 0;
    
            }

        }

        this.loc.add(this.vel);

        //Bounds Update#####
        this.bounds.top = this.loc.y;
        this.bounds.lower = this.loc.y + (this.wdth / 2);
        this.bounds.left = this.loc.x;
        this.bounds.right = this.loc.x + this.lngth;

    }

    checkPlayerCollision(i){
        //Player X and Y Location#####
        let playerX = chickFiLost.player.loc.x;
        let playerY = chickFiLost.player.loc.y;
        let playerWdth = chickFiLost.player.wdth / 2;
        let playerLngth = chickFiLost.player.lngth / 2;

        if (playerY + playerWdth >= this.bounds.top &&
            playerY - playerWdth <= this.bounds.lower &&
            playerX - playerLngth >= this.bounds.left &&
            playerX + playerLngth <= this.bounds.right &&
            chickFiLost.player.vel.y > 0){
                
                //Platforms Can Now Move#####
                //Mainly For The Beginning#####
                chickFiLost.player.immobile = false;
                chickFiLost.player.loc.y = this.bounds.top + playerWdth;
                //Resets Player Vel Y#####
                chickFiLost.player.vel.y = 0;
                //Resets Player Jumps#####
                chickFiLost.player.jumpCount = 2;

            }

    }

}