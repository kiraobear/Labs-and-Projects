class Player{
    constructor(x, y){
        this.loc = createVector(x ,y);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0.05);
        this.speed = 2;
        this.jumpForce = 5;

    }

    render(){
        push();
        noStroke();
        fill(255);
        ellipse(this.loc.x, this.loc.y, 30);
        pop();

        push();
        stroke(255, 0, 0);
        strokeWeight(2);
        point(this.loc.x, this.loc.y);
        pop();

    }

    update(){
        // this.move();
        this.gravity();

    }

    gravity(){
        this.vel.limit(5);
        this.vel.add(this.acc);
        this.loc.add(this.vel);
        // console.log("Loc X: " + this.loc.x);
        // console.log("Loc Y: " + this.loc.y);
        // console.log("Vel X: " + this.vel.x);
        // console.log("Vel Y: " + this.vel.y);
        // console.log("Acc Y: " + this.acc.y);

    }

    jump(){
        this.vel.y = -this.jumpForce;

    }

    move(){
        if(keyIsDown(LEFT_ARROW)){
            chickFilost.platforms[i].vel.x = -this.speed;

        }

        if(keyIsDown(RIGHT_ARROW)){
            chickFilost.platforms[i].this.vel.x = this.speed;

        }

    }

}
