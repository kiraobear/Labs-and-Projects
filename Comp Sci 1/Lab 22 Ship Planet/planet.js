class Planet{
  constructor(x,y){
    this.loc = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
  }

  run(){
    this.update();
    this.render();
  }

  update(){
    if(distToPlanet < 50){//if touches planet random place
      this.loc.x = random(width);
      this.loc.y = random(height);
    }

    if(distToPlanet < 200){
        this.acc = p5.Vector.sub(ship.loc, this.loc);
        this.acc.normalize();
        this.acc.mult(-0.05);

        this.loc.add(this.vel);
        this.vel.add(this.acc);

        this.vel.limit(2);
    }
  }

  render(){
    fill(0, 40, 255);
    ellipse(this.loc.x, this.loc.y, 50);
  }
}
