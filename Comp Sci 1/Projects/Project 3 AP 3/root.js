class Root{
constructor(x, y) {
    this.loc = createVector(x, y);
    this.vel = createVector(random (-3,3), random(-3, 3));
    this.acc = createVector(0,0);
    this.diam = 60;
    this.lifespan = 900;
    this.isDead = false;
    this.value = ceil(random(100));
  }
  run(){
    this.render();
    this.update();
  }
  update() {
    this.lifespan --;
    if (this.lifespan < 0 || this.diam < 0) {
      this.isDead = true;
    }
    if( this.diam === 20){
      roots.push(new Root(this.loc.x, this.loc.y, this.diam))
    }
    this.diam = this.diam - 0.3;
    this.acc = createVector(random (-0.83,0.83), random(-0.83, 0.1)
  );
    this.vel.add(this.acc);
    this.vel.limit(3);
    this.loc.add(this.vel);
  }
  render(){
    strokeWeight(0.3);
    stroke(255)
    noFill();
    ellipse(this.loc.x, this.loc.y, this.diam, this.diam);
    }
  }
