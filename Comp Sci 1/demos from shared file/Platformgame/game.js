class Game {
    constructor() {
      this.platform1;
      this.platform2;
      this.hero;
      this.initGame();
    }

    initGame() {
      this.platform1 = new Platform(30, 300);
      this.platform2 = new Platform(250, 300);
      this.hero = new Hero(random(width), 400, createVector(0,0));
    }

    run() {
        this.updateGame();
        this.renderGame();
    }

    updateGame() {
      this.hero.run();
      this.platform1.run();
      this.platform2.run();
    }

    renderGame() {
      this.hero.render();
      this.platform1.render();
      this.platform2.render();
    }
}
