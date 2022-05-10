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

    //Type Of Platform#####
    //30% Seed, 0 - 0.3#####
    //10% Feather, 0.3 - 0.4#####
    //30% Enemy, 0.4 - 0.7#####
    //20% Trap w/Seed, 0.7 - 0.9#####
    //10% Empty, 0.9 - 1#####
    this.type = round(random(0, 1), 1);
    if (this.type <= 0.3){
      console.log("SEED");
      this.entity = new Seed(this.loc.x, this.loc.y - 30, 20, 20);

    } else if (this.type > 0.3 && this.type <= 0.4){
      console.log("FEATHER");
      this.entity = new Seed(this.loc.x, this.loc.y - 30, 20, 20);

    } else if (this.type > 0.4 && this.type <= 0.7){
      console.log("ENEMY");
      this.entity = new Seed(this.loc.x, this.loc.y - 30, 20, 20);

    } else if (this.type > 0.7 && this.type <= 0.9){
      console.log("TRAP");
      this.entity = new Seed(this.loc.x, this.loc.y - 30, 20, 20);

    } else if (this.type > 0.9){
      console.log("NONE");

    }

  }

  render(){
    push();
    noStroke();
    fill(0, 0, 255);
    rect(this.loc.x, this.loc.y, this.lngth, this.wdth);
    pop();

    //Entity Function#####
    if (this.entity){
      this.entity.render();

    }

  }

  update(){
    //Platform Functions#####
    this.move();
    this.updateBounds();
    this.playerDetection();

    //Entity Function#####
    if (this.entity){
      this.entity.update(this.loc.x, this.lngth);

    }

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

  }

  updateBounds(){
    this.bounds.top = this.loc.y;
    this.bounds.lower = this.loc.y + (this.wdth / 2);
    this.bounds.left = this.loc.x;
    this.bounds.right = this.loc.x + this.lngth;

  }

  playerDetection(){
    //Player X and Y Location#####
    //With Some Changes To Allow For A smoother Feel In Game#####
    let playerX = chickFiLost.player.loc.x;
    let playerY = chickFiLost.player.loc.y + (chickFiLost.player.wdth / 8);
    let playerWdthBound = chickFiLost.player.wdth / 2;

    if (playerY + playerWdthBound >= this.bounds.top &&
      playerY <= this.bounds.lower &&
      playerX >= this.bounds.left &&
      playerX <= this.bounds.right &&
      chickFiLost.player.vel.y > 0){
        // ^ Player Detection True If Player Is Also Falling Down#####

        //Platforms Can Now Move#####
        //Mainly For The Beginning#####
        chickFiLost.player.immobile = false;
        //Dont Want The Player Inside The Platforms#####
        chickFiLost.player.loc.y = this.bounds.top - playerWdthBound;
        //Resets Player Vel Y#####
        chickFiLost.player.vel.y = 0;
        //Resets Player Jumps#####
        chickFiLost.player.jumpCount = 2;
      }

    }

  }
