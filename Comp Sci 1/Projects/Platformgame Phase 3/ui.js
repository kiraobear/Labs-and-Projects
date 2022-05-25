//Start class Butt##########
class Butt{
  constructor(x, y, l, w, typ){
    this.img = this.loadImg(typ);
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

    } else if (typ === "SETTINGS"){
      img = loadImage("art/titleScreens/intro/settingsBtn.png");

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
    image(this.img, this.loc.x, this.loc.y, this.lngth, this.wdth);
    pop();

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
