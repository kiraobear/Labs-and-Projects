//Start Class Game##########
class Game{
  constructor(){
    this.player;
    this.platforms = [];

    this.init();

  }

  init(){
    this.player = new Player(200, 0);

    for (let i = 0; i < 2500; i++){
      this.platforms[i] = new Platform(i * 80);

    }

  }

  run(){
    this.update();
    this.render();

  }

  render(){
    this.player.render();

    //Backwards Loop Bc Of Splicing#####
    for (let i = this.platforms.length - 1; i >= 0; i--){
      this.platforms[i].render();

    }

  }

  update(){
    this.player.update();

    for (let i = this.platforms.length - 1; i >= 0; i--){
      this.platforms[i].update(i);

    }

  }

}
//End Class Game##########
