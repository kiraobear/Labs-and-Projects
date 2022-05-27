//Ricardo & Kira & Emma & Maddie
//Company Name: Truett Cathy
//Chick - Fi - Lost

//Start Class Game##########
class Game{
  constructor(startState){
    this.player;
    this.platforms = [];
    this.introBackground;
    this.playBackground = [];
    this.outroBackground;
    this.gameState = startState;
    this.prevGameState;
    //***** button object *****
    this.butts;

    this.init(25, 5);

  }

  init(pL, bL, replayPressed){
    //pL --> platform Length#####
    //bL --> background length#####

    this.loadingScreen();

    this.butts = {
      play : new Butt(325, 596, 100, 50, "PLAY"),
      instructions : new Butt(565, 595, 100, 50, "INSTRUCTIONS"),
      replay : new Butt(325, 596, 100, 50, "REPLAY")

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

    if (replayPressed) this.gameState = "PLAY";
    //IVE TRIED MANY WAYS OF REMAKING THE GAME IN ORDER TO GET RID#####
    //OF THE WEIRD "GLITCH" WHEN REPLAYING MORE THAN ONCE#####
    //AND NON OF THEM SOLVES THE PROBLEM#####

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
    //Only Play And Instructions#####
    for (let i in this.butts){
      if (i !== "replay") this.butts[i].render();

    }

  }

  updateIntro(){
    //For In Loop#####
    for (let i in this.butts){
      if (i !== "replay") this.butts[i].update();

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

      if (this.platforms[i].loc.x <= -this.platforms[i].lngth * 2 ||
        this.platforms[i].trapGone){
        this.platforms[i] = new Platform(2160 - this.platforms[i].lngth);

      }

    }

  }

  renderOutro(){
    push();
    image(this.outroBackground, 0, 0);
    pop();

    for (let i in this.butts){
      if (i !== "play") this.butts[i].render();

    }

  }

  updateOutro(){
    for (let i in this.butts){
      if (i !== "play") this.butts[i].update();

    }

  }

  renderInstructions(){
    //Backwords Loop Bc Of Image Order#####
    for (let i = this.playBackground.length - 1; i >= 0; i--){
      this.playBackground[i].render();

    }

    push();
    //Title#####
    textFont(font);
    textAlign(CENTER, CENTER);
    textSize(90);
    strokeWeight(2);
    fill(217, 128, 13);
    stroke(237, 186, 121);
    text('INSTRUCTIONS', width / 2, 55);

    //Instructions#####
    textSize(30);
    text("THE SEEDS ARE YUMMY!", width / 2, 200);
    text("FEATHERS MAKE YOU GO VROOM VROOM", width / 2, 280);
    text("FOXES ARE BOTH GOOD", width / 2, 360);
    text("AND", width / 2, 400);
    text("BAD FOR YOUR HEALTH", width / 2, 440);
    text("WATCH YOUR STEP ON THE PLATFORMS", width / 2, 520);

    //Extra#####
    textSize(15);
    text("PRESS 'BACKSPACE' TO GO BACK", width / 2, 650);
    pop();

  }

  updateInstructions(){}

}
//End Class Game##########
