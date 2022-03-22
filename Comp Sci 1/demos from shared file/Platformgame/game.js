class Game {
    constructor() {
      this.platforms = []
      this.hero;
      this.initGame();
    }

    initGame() {
      for(let i = 0; i < 20; i++){
        this.platforms[i] = new Platform(random(width), random(height));
      }
      this.hero = new Hero(random(width),random(height), createVector(0,0));
    }

    run() {
        this.updateGame();
        this.renderGame();
    }

    updateGame() {
      this.hero.run();
      for(let i = 0; i < 20; i++){
        this.platforms[i].run();
      }
    }

    renderGame() {
      this.hero.render();
      for(let i = 0; i < 20; i++){
        this.platforms[i].render();
      }
    }
}
