class Root{
constructor(x, y) {
    this.loc = createVector(x, y);
    this.vel = createVector(random (-3,3), random(-3, 3));
    this.acc = createVector(0,0);
    this.diam = 60;
    this.counter = 30;
    this.isDead = false;
    this.value = floor(random(2));
  }
  run(){
    this.render();
    this.update();
    this.branchOut();
  }
  update() {
    if (this.diam < 0) {
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

  branchOut(){
    this.counter--;
    if(this.counter <= 0){
      this.value = floor(random(2));
      this.counter = 30;
    }
    strokeWeight(3);
    stroke(255, 0, 0);
    if(roots[0].diam < 40 && this.value === 1){
      //point(this.loc.x, this.loc.y);
      //roots.push(new Root(roots[0].loc.x, roots[0].loc.y));
    }
  }
  render(){
    noFill();
    if(this.loc.y < random(400, 700)){
      stroke(247, 156, 10, 15);
    } else{
      stroke(242, 80, 31, 15);
    }
    ellipse(this.loc.x, this.loc.y, this.diam+20)
    strokeWeight(0.3);
    stroke(255);
    noFill();
    ellipse(this.loc.x, this.loc.y, this.diam, this.diam);
    }
  }
