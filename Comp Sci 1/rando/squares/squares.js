class Square{
  constructor(x, y, clr){
    let r = random(255)
    let t = random(255)
    let f = random(255)
    this.loc = createVector(x, y);
    this.clr = (r, t, f);
    this.sz = random(10, 40);
    this.sz2 =random(10, 100);
    this.r = random(0, 20);
  }

  run(){
    this.update();
    this.render();
  }

  update(){
    //this.clr = (random(255),random(255),random(255));
  }

  render(){
    //noFill();
    noStroke();
    fill(this.clr);
    rect(this.loc.x, this.loc.y, this.sz, this.sz2, this.r);
  }
}
