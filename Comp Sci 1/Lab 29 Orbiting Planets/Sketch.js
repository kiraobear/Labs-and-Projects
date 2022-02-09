let sun, planet, moon;
function setup() {
  createCanvas(400, 400);
  sun = new Sun(width/2, height/2)
  planet = new Planet(300, 300);
  moon = new Moon();
}

function draw() {
  background(220);
  sun.render();
  planet.render();
}

class Sun{//+++++++++++++++++++++++++++++++++++++++++++++++++++
  constructor(x, y, rad){
    this.loc = createVector(x,y)
    this.rad = 0;
  }

  run(){
    this.update();
    this.render();
  }

  update(){

  }

  render(){
    fill(255, 208, 0);
    ellipse(this.loc.x, this.loc.y, 75);
  }
}//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
