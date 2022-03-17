class Game {
    constructor() {
      this.platform1;
      this.platform2;
      this.hero;
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

    }

    renderGame() {

    }
}
