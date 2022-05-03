//Start Class Game##########
class Game{
    constructor(){
        this.player;
        this.platforms;

    }

   run(){
       this.init();
       this.update();
       this.render();
       
   }

    init(){
        this.player = new Player();

    }

    render(){
        this.player.render();

    }
    
    update(){
        this.player.update();

    }
    
}
//End Class Game##########