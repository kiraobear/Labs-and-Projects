class Game {
    constructor() {
      this.platforms = []
      //this.collectables = []
      this.hero;
      this.initGame();
      this.parallax;
      //sprite states
      this.spriteState = 0
    }

    initGame() {//create classes
      for(let i = 0; i < 2; i++){
        this.platforms[i] = new Platform(random(150), height-random(height/3));
      }

      //for(let k = 0; k < 10; k++){
      //  this.collectables[k] = new Collectable(random(width), random(height));
      //}
      this.hero = new Hero(100,100, createVector(0,0));
      this.parallax = new Parallax(bgImgs);
    }

    run() {//run
        this.updateGame();
        this.renderGame();
    }

    updateGame() {//update in classes
      this.parallax.run();
    //  for(let k = 0; k < 10; k++){
    //    this.collectables[k].run();
      //}
      this.hero.run();
      for(let i = 0; i < this.platforms.length; i++){
        this.platforms[i].run();
      }
    }

    renderGame() {//render in classes
      this.parallax.render();
    //  for(let k = 0; k < 10; k++){
    //    this.collectables[k].render();
    //  }
      this.hero.render();
      for(let i = 0; i < this.platforms.length; i++){
        this.platforms[i].render();
      }

    }
}
