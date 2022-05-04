class Platform{
    constructor(){
       this.loc = createVector(0, 0);
       this.vel = createVector(0, 0); 
    }
    
    render(){
        push();
        noStroke();
        fill(255);
        rect(this.loc.x, this.loc.y);
        pop();
    }

    update(){
        
    }

}