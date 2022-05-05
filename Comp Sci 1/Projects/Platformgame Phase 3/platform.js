class Platform{
    constructor(){
       this.loc = createVector(floor(random(width)), floor(random(height)));
       this.vel = createVector(0, 0); 
       this.lngth = floor(random(50, 100));
       this.hght = 15;
       //Platform Bounds#####
       this.bounds = {
           top : this.loc.y,
           lower : this.loc.y + this.hght,
           left : this.loc.x,
           right : this.loc.x + this.lngth

       };

    }
    
    render(){
        push();
        noStroke();
        fill(0, 0, 255);
        rect(this.loc.x, this.loc.y, this.lngth, this.hght);
        pop();
         
    }

    update(){
        this.move();
        this.checkPlayerCollision();

    }

    move(){
        //***** if the arrow key is down make x velocity speed variable *****
        if (keyIsDown(LEFT_ARROW)){
            this.vel.x = chickFiLost.player.speed;

        } else if (keyIsDown(RIGHT_ARROW)){
            this.vel.x = -chickFiLost.player.speed;

        } else {
            this.vel.x = 0;

        }

        this.loc.add(this.vel);

    }

    checkPlayerCollision(){
        //Player X and Y Location#####
        let playerX = chickFiLost.player.x;
        let playerY = chickFiLost.player.y;

        if (playerY >= this.bounds.top &&
            playerY <= this.bounds.lower &&
            playerX >= this.bounds.left &&
            playerX <= this.bounds.right){
                
                chickFiLost.player.y = this.bounds.top;
                console.log("is Colliding");

            }

    }

}