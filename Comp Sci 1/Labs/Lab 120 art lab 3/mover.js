class Mover {

    constructor(x, y) {
        this.loc = createVector(x, y);
        this.vel = createVector(random(-50, 50), random(-50, 50));
        this.acc = createVector(0, 0);
        this.diam = 20;
        this.clr = color(255, 100, 0);

        this.orbiters = []
        this.orbiters[0] = new Orbiter(this, 50);
        this.orbiters[1] = new Orbiter(this, 50);
        this.orbiters[2] = new Orbiter(this, 50);//  p2 =orbital radius

    }

    run() {
        this.update();
        this.checkEdges();
        this.render();
    }

    update() {
        //  ++++++++++++++++++++++++++++++  get an attraction Vector
        this.vel.limit(250);
        this.loc.add(this.vel);
    }

    checkEdges() {
        if (this.loc.x < 0 || this.loc.x > width) this.vel.x = -this.vel.x;
        if (this.loc.y < 0 || this.loc.y > height) this.vel.y = -this.vel.y;
    }

    render() {
        fill(this.clr);
        //ellipse(this.loc.x, this.loc.y, this.diam, this.diam);
        this.orbiters[0].run();
        this.orbiters[1].run();
        this.orbiters[2].run();

    }

}//++++++++++++++++++++++++++++++  end Mover class
