class Ship {
  constructor(x, y) {
    this.loc = createVector(x, y);
    this.vel = createVector(random(0, 0));
    this.acc = createVector(0, 0);
    this.clr = color(255);
    this.angle = 0;
  }
  run() {
    this.update();
    this.render();
  }
  update() {
    distToPlanet = this.loc.dist(planet.loc);//distance from ship to planet

    this.acc = p5.Vector.sub(planet.loc, this.loc);//acceleration from ship to planet
    this.acc.normalize();
    this.acc.mult(0.2);

    this.vel.add(this.acc);//adding vel and acc
    this.loc.add(this.vel);

    this.vel.limit(4);

  }

  render() {
    fill(255, 40, 0);
    let v = random(10, 25)//random flame height

    push();
    translate(this.loc.x, this.loc.y);
    this.angle =this.vel.heading()
    rotate(this.angle)
    quad(-10, -10, 10, 0, -10, 10, - 5, 0);//ship
    fill(255, 200, 0);
    quad(- 6, 0, -10, 2, -v, 0, -10, -2);//flame
    pop();
  }
}
