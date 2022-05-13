class Parallax{
    constructor(i){
        this.img = loadImage("art/backgrounds/field/bgf" + i + ".png");
        this.loc1 = createVector(0, 0);
        this.loc2 = createVector(width, 0);
        this.vel = createVector(5 / (i + 1), 0);

    }

    update(){
        this.move();
        this.tp();

    }

    move(){
        //Checks When Platforms Are Moving#####
        if (chickFiLost.platforms[0].vel.x < 0){
            this.loc1.sub(this.vel);
            this.loc2.sub(this.vel);

        } else if (chickFiLost.platforms[0].vel.x > 0){
            this.loc1.add(this.vel);
            this.loc2.add(this.vel);

        }

    }

    tp(){
        //***** img resets if the loc is less than or greater than the width *****
        if (this.loc1.x < -width || this.loc1.x > width){
            this.loc1.x = 0;
            this.loc2.x = width;

        }

        if (this.loc2.x > width){
            this.loc2.x = -width;

        } else if (this.loc2.x < -width){
            this.loc2.x = width;

        }

    }

    render(){
        // this.img.resize(width, height);
        image(this.img, this.loc1.x, this.loc1.y);
        image(this.img, this.loc2.x, this.loc1.y);
        // image(this.img, 0, 0);
        // image(this.img, this.loc2.x, this.loc2.y);
        
    }
}