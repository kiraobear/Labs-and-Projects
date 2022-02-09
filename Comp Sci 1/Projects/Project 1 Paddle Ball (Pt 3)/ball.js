class Ball{//+++++++++++++++++++++++++++Start Ball Class
  constructor(x, y, r){
    this.loc = createVector(x, y);
    this.vel = createVector(random(-3,3, random(-3,3)));
    this.acc = createVector(0, 0.2);
    this.rad = r;
  }

  run(){
    this.checkEdges();
    this.update();
    this.isColliding();
    this.render();
  }

  checkEdges(){
    if(this.loc.x > width) this.vel.x = -this.vel.x;
    if(this.loc.x < 0) this.vel.x = -this.vel.x;
    if(this.loc.y > height) this.vel.y = -this.vel.y;
    if(this.loc.y < 0) this.vel.y = -this.vel.y;
  }

  update(){
    this.vel.add(this.acc);
    this.vel.limit(22);
    this.loc.add(this.vel);
  }

  isColliding(){
    if( this.loc.x > paddle.loc.x 		 &&
        this.loc.x < paddle.loc.x + paddle.w &&
        this.loc.y > paddle.loc.y     &&
        this.loc.y < paddle.loc.y + paddle.h){
      if(this.vel.y < 0){
        return 2;
      } else {
        return 1;
      }
    } else {
      return 0;
    }
  }

  render(){
    fill(255,0,0);
    ellipse(this.loc.x, this.loc.y, this.rad, this.rad)
  }
}
