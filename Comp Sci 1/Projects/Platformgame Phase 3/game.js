//Ricardo & Kira & Emma & Maddie
//Company Name: Truett Cathy
//Chick - Fi - Lost

//Start Class Game##########
class Game{
  constructor(){
    this.player;
    this.platforms = [];
    this.background = [];
    this.gameState = "INTRO";
    //***** button objects ***** 
    this.playBtn;
    this.instructionBtn;
    this.settingBtn;

    this.init(25, 5);

  }

  init(pL, bL){
    //pL --> platform Length#####
    //bL --> background length#####

    this.loadingScreen();

    this.playBtn = new Butt(600, 600, 150, 20, 0, "Play");//haha butt
    this.instructionBtn = new Butt(200, 600, 150, 20, 0, "Instructions");
    this.settingBtn = new Butt(600, 200, 150, 20, 50, "Settings");
    

      this.player = new Player(200, 0);

      for (let i = 0; i < pL; i++){
        this.platforms[i] = new Platform(i * 80);

      }

      for (let i = 0; i < bL; i++){
        this.background[i] = new Parallax(i);

      }

    this.gameState = "INTRO";

  }

  loadingScreen(){
    background(0);

    push();
    noStroke();
    fill(255);
    textAlign(CENTER, CENTER);
    textStyle(BOLDITALIC);
    textSize(150);
    text("LOADING", width / 2, height / 2);
    pop();

  }

  run(){
    if (this.gameState === "INTRO"){
      this.renderIntro();
      this.updateIntro();

    } else if (this.gameState === "PLAY"){
      this.renderPlay();
      this.updatePlay();

      if (this.player.isDead) this.gameState = "OUTRO";

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

  renderIntro(){
    //  this.playBtn.render();
     this.instructionBtn.render();
    //  this.settingBtn.render();

  }

  updateIntro(){
    //  this.playBtn.update();
     this.instructionBtn.update();
    //  this.settingBtn.update();

  }

  renderPlay(){
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

  updatePlay(){
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
