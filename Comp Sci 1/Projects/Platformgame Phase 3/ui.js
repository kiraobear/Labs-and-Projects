//Start class Butt##########
class Butt{
  constructor(x, y, l, w, typ){
    this.btnImg = this.loadImg(typ);
    this.ropeImg = loadImage("art/titleScreens/intro/rope.png");
    this.loc = createVector(x, y);
    this.lngth = l;
    this.wdth = w;
    this.bounds = {
      left : this.loc.x - (this.lngth / 2),
      right : this.loc.x + (this.lngth / 2),
      top : this.loc.y - (this.wdth / 2),
      bottom : this.loc.y + (this.wdth / 2)

    };
    this.ratOverButt = this.checkBounds();

  }

  loadImg(typ){
    let img;

    if (typ === "PLAY"){
      img = loadImage("art/titleScreens/intro/playBtn.png");

    } else if (typ === "INSTRUCTIONS"){
      img = loadImage("art/titleScreens/intro/instructionsBtn.png");

    } else if (typ === "REPLAY"){
      img = loadImage("art/titleScreens/outro/replayBtn.png");

    }

    return img;

  }

  update(){
    this.ratOverButt = this.checkBounds();

  }

  render(){
    //clr Used For Button Tint#####
    let clr = this.ratOverButt ?  color(255, 255, 255, 200) : color(255, 255, 255, 255);
    push();
    imageMode(CENTER);
    tint(clr);
    image(this.btnImg, this.loc.x, this.loc.y, this.lngth, this.wdth);
    pop();

    if (chickFiLost.gameState === "INTRO"){
      push();
      imageMode(CENTER);
      image(this.ropeImg, this.loc.x, this.loc.y - 45, this.lngth - 30, this.wdth);
      pop();

    }

  }

  checkBounds(){
    //***** rat location is mouse location *****
    let ratX = mouseX;
    let ratY = mouseY;

    if (ratX >= this.bounds.left &&
      ratX <= this.bounds.right &&
      ratY >= this.bounds.top &&
      ratY <= this.bounds.bottom){
        return true;

      }

      return false;

    }

  }
  //End class Butt##########
