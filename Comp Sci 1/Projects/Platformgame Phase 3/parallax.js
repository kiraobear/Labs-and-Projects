class Parallax{
    constructor(i){
        this.img = loadImage("art/backgrounds/field/bgf" + i + ".png");
        this.loc1 = createVector(0, height - this.img.height);
        this.loc2 = createVector(this.img.width, height - this.img.height);
        this.vel = createVector(0, 0);
    }

    update(){
        this.move();
        this.tp();

    }

    move(){
        this.loc1.add(this.vel);
        this.loc2.add(this.vel);
      
    }

    tp(){
        //***** img resets if the loc is less than or greater than the width *****
        if (this.loc1.x < -this.img.width || this.loc1.x > this.img.width){
            this.loc1.x = 0;
            this.loc2.x = this.img.width;

        }

        if (this.loc2.x > this.img.width){
            this.loc2.x = -this.img.width;

        } else if (this.loc2.x < -this.img.width){
            this.loc2.x = this.img.width;

        }

    }

    render(){
        // this.img.resize(width, height);
        image(this.img, 0, 0);
        // image(this.img, this.loc2.x, this.loc2.y);
        
    }
}