//Ricardo & Kira & Emma & Maddie
//Company Name: Truett Cathy
//Chick - Fi - Lost

//Start Class Game##########
class Game{
  constructor(){
    this.player;
    this.platforms = [];
    this.background = [];
    this.gameState = "INIT";

    this.init(25, 5);

  }

  init(pL, bL){
    //pL --> platform Length#####
    //bL --> background length#####

    // this.loadingScreen(pL, bL);

    this.player = new Player(200, 0);

    for (let i = 0; i < pL; i++){
      this.platforms[i] = new Platform(i * 80);

    }

    for (let i = 0; i < bL; i++){
      this.background[i] = new Parallax(i);

    }

  }

  loadingScreen(pL, bL){
    background(0);
    while (!this.player ||
      this.platforms.length !== pL ||
      this.background.length !== bL){

        push();
        noStroke();
        fill(255);
        textAlign(CENTER, CENTER);
        textStyle(ITALIC);
        textSize(200);
        text("LOADING", width / 2, height / 2);
        pop();

      }

  }

  run(){
    if (this.gameState === "INTRO"){

    } else if (this.gameState === "PLAY"){

    } else if (this.gameState === "OUTRO"){

    } else if (this.gameState === "INTRUCTIONS"){

    } else if (this.gameState === "SETTINGS"){

    } else if (this.gameState !== "INIT"){
      background(0);
      push();
      noStroke();
      fill(255, 0, 0);
      textAlign(CENTER, CENTER);
      textStyle(BOLD);
      textSize(200);
      text("ERROR", width / 2, height / 2);
      pop();
    }

  }

  render(){
    //Backwords Loop Bc Of Image Order#####
    for (let i = this.background.length - 1; i >= 0; i--){
      this.background[i].render();

    }

    this.player.render();

    //Backwards Loop Bc Of Splicing#####
    for (let i = this.platforms.length - 1; i >= 0; i--){
      this.platforms[i].render();

    }

  }

  update(){
    for (let i = this.background.length - 1; i >= 0; i--){
      this.background[i].update();

    }

    this.player.update();

    for (let i = this.platforms.length - 1; i >= 0; i--){
      this.platforms[i].update(i);

    }

  }

}
//End Class Game##########
