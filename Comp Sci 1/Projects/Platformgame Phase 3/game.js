//Start Class Game##########
class Game{
    constructor(){
        this.player;
        this.platforms = [];

    }

   run(){
       this.init();
       this.update();
       this.render();
       
   }

    init(){
        this.player = new Player(200, 200);
        // for(let i = 0; i < 2; i++){
        //     this.platforms[i] = new Platform();
        // }

    }

    render(){
        this.player.render();
        // for(let i = 0; i < 2; i++){
        //     this.platforms[i].render();
        // }

    }
    
    update(){
        this.player.update();
        // for(let i = 0; i < 2; i++){
        //     this.platforms[i].run();
        // }

    }
    
}
//End Class Game##########