class Player{
    constructor(x, y){
        this.loc = createVector(x ,y);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0.08);
        this.speed = 2;//***** speed for platforms *****
        this.jumpForce = 9;//****** jump power for player *****

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
        this.gravity();

    }

    gravity(){
        this.vel.limit(3);
        this.vel.add(this.acc);
        this.loc.add(this.vel);

    }

    jump(){
        this.vel.y = -this.jumpForce;//***** change y velocity if jump *****

    }

}
