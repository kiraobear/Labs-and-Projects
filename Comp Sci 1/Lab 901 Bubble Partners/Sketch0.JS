
//Kira & Maia
//Lab 901 Partners
let bubbles;

function setup() {
  createCanvas(400, 400);
bubbles = [];

function draw (){
  background(0,0,0);
}

function loadBubbles(){
  for(i = 0; i <  bubbles.length; i++){
    bubbles[i] = ceiling(15);
  }
}

class Bubble{ //++++++++++++++++++++++++++++ start bubble class
  constructor(d, x, y, c){
    this.diam = d;
    this.dx = random(-5.0, 5.0);
    this.dy = random(-5.0, 5.0);
    this.vel = createVector(dx, dy);
    this.loc = createVector(x, y);
    this.clr = c;
  }

  run(){
    this.render();
    this.update();
    this.checkEdges();
    this.checkOverlapping();
    this.checkForLines();
  }

   update(){
     this.counter = this.counter + 1;
     if (this.counter > 1){
       this.vel = createVector (random(-3, 3), random(-3, 3));
       this.counter = 0
     }
     this.loc.add(this.vel)
  }

  checkforLines(){
      for(i = 0; i <  bubbles.length; i++){
      if(this !== bubbles[i]){
       let d = this.loc.distance(bubbles[i].loc);
       if (d < 50 ){
       let x = bubbles[i].loc.x;
       let y = bubbles[i].loc.y;
       return{x,y};
         }
       }
    }
  return[0,0]
}

  checkEdges(){
    if(this.loc.x > width ||
      this.loc.x < 0) this.vel.x = -this.vel.x;
     if(this.loc.y > height ||
      this.loc.y < 0) this.vel.y = -this.vel.y;
    }

  checkOverlapping(){
    for(i = 0; i <  bubbles.length; i++){
      if(this !== bubbles[i]){
       let d = this.loc.distance(bubbles[i].loc)
       if (d < (this.diam + bubbles[i].diam)/2){
           this.clr = color(255, 0, 150);
           return;
         }
      }
      this.clr = clr(155, 130, 0);
     }
  }

  render(){
      fill(random(0, 255), random(0, 255), random(0, 255));
      stroke(155,0,255);
      strokeWeight(5);
      ellipse(this.loc.x, this.loc.y, this.diam, this.diam);
      let coords = this.checkforLines();
      if (coords[0] !== 0 && coords[1] !== 0 ){
        stroke(255);
        strokeWeight(3);
        line( this.loc.x, this.loc.y, coords.x, coords.y);
      }
   }
}
