class Player{
    constructor(x, y){
        this.loc = createVector(x ,y);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0.05);
    }
    
    render(){
        push();
        noStroke();
        
        pop();
        

    }

    update(){
        //++++++++++ functions
        this.move();
        //+++++++++++++++++++++++++ everything else
        // this.loc.add(this.vel);
        // this.vel.add(this.acc);
    }

    jump(){
        this.loc.y -=5;
        this.vel.y = -5;
        this.acc = 0.05;
    }

    move(){
        if(keyIsDown(UP_ARROW)){
            this.jump();
        }
        if(keyIsDown(LEFT_ARROW)){
            this.vel.x = -2
        }
        if(keyIsDown(RIGHT_ARROW)){
            this.v
        }
    }
      
}