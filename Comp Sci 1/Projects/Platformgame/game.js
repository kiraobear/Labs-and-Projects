class Game {
    constructor() {
      this.platforms = []
      this.collectables = []
      this.hero;
      this.initGame();
    }

    initGame() {
      for(let i = 0; i < 20; i++){
        this.platforms[i] = new Platform(random(width), random(height));
      }

      for(let k = 0; k < 10; k++){
        this.collectables[k] = new Collectable(random(width), random(height));
      }
      this.hero = new Hero(100,random(height), createVector(0,0));
    }

    run() {
        this.updateGame();
        this.renderGame();
    }

    updateGame() {
      for(let k = 0; k < 10; k++){
        this.collectables[k].run();
      }
      this.hero.run();
      for(let i = 0; i < 20; i++){
        this.platforms[i].run();
      }
    }

    renderGame() {
      for(let k = 0; k < 10; k++){
        this.collectables[k].render();
      }
      this.hero.render();
      for(let i = 0; i < 20; i++){
        this.platforms[i].render();
      }
    }
}
