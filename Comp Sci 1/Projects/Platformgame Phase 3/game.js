//Ricardo & Kira & Emma & Maddie
//Company Name: Truett Cathy
//Chick - Fi - Lost

//Start Class Game##########
class Game{
  constructor(){
    this.player;
    this.platforms = [];
    this.introBackground;
    this.playBackground = [];
    this.outroBackground;
    this.gameState = "INTRO";
    //***** button object *****
    this.butts;

    this.init(25, 5);

  }

  init(pL, bL){
    //pL --> platform Length#####
    //bL --> background length#####

    this.loadingScreen();

    this.butts = {
      play : new Butt(250, 590, 100, 50, "PLAY"),
      instructions : new Butt(650, 570, 100, 50, "INSTRUCTIONS"),
      settings : new Butt(875, 25, 25, 25, "SETTINGS")

    };

    this.player = new Player(200, 0);

    for (let i = 0; i < pL; i++){
      this.platforms[i] = new Platform(i * 90);

    }

    this.introBackground = loadImage("art/titleScreens/intro/bg.png");

    for (let i = 0; i < bL; i++){
      this.playBackground[i] = new Parallax(i);

    }

    this.outroBackground = loadImage("art/titleScreens/outro/bg.png");

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
      this.renderOutro();
      this.updateOutro();

    } else if (this.gameState === "INSTRUCTIONS"){
      this.renderInstructions();
      this.updateInstructions();

    } else if (this.gameState === "SETTINGS"){
      this.renderSettings();
      this.updateSettings();

    } else{
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
    push();
    image(this.introBackground, 0, 0);
    pop();

    //For In Loop#####
    //Loops Through The Properties Of An Object#####
    for (let i in this.butts){
      this.butts[i].render();

    }

  }

  updateIntro(){
    //For In Loop#####
    for (let i in this.butts){
      this.butts[i].update();

    }

  }

  renderPlay(){
    //Backwords Loop Bc Of Image Order#####
    for (let i = this.playBackground.length - 1; i >= 0; i--){
      this.playBackground[i].render();

    }

    this.player.render();

    //Backwards Loop Bc Of Splicing#####
    for (let i = this.platforms.length - 1; i >= 0; i--){
      this.platforms[i].render();

    }

  }

  updatePlay(){
    for (let i = this.playBackground.length - 1; i >= 0; i--){
      this.playBackground[i].update();

    }

    this.player.update();

    for (let i = this.platforms.length - 1; i >= 0; i--){
      this.platforms[i].update(i);

    }

  }

  renderOutro(){
    push();
    image(this.outroBackground, 0, 0);
    pop();

  }

  updateOutro(){}

  renderInstructions(){
    background(0);
    push();
    fill(255, 0, 0);
    textAlign(CENTER, CENTER);
    textStyle(BOLDITALIC);
    textSize(100);
    text('UNDER DEV', width / 2, height / 2)
    pop();

  }

  updateInstructions(){}

  renderSettings(){
    background(0);
    push();
    fill(255, 0, 0);
    textAlign(CENTER, CENTER);
    textStyle(BOLDITALIC);
    textSize(100);
    text('UNDER DEV', width / 2, height / 2)
    pop();

  }

  updateSettings(){}

}
//End Class Game##########
