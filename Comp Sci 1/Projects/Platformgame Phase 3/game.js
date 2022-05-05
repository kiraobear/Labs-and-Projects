//Start Class Game##########
class Game{
    constructor(){
        this.player;
        this.platforms = [];
        
        //***** Collectables *****
        //Points#####
        this.seeds = [];
        //Increase Health#####
        this.hearts = [];
        //Speed Boost#####
        this.feathers = [];
        
        this.init();
        
    }

    init(){
        this.player = new Player(200, 200);
        for (let i = 0; i < 10; i++){
            this.platforms[i] = new Platform();
        }

        // for(let i = 3; i > 0; i++){
        //     this.seeds[i] = new Seed();
        // }

        // for(let i = 3; i > 0; i++){
        //     this.hearts[i] = new Heart();
        // }

        // for(let i = 3; i > 0; i++){
        //     this.feathers[i] = new Feather();
        // }

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
            this.platforms[i].update();
        }

    }

}
//End Class Game##########
