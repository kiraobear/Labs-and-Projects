let movers = [];
function setup() {
  var cnv = createCanvas(800,800);
  cnv.position((windowWidth - width) / 2, 50);
  background(2);
  loadMovers(25);
  frameRate(60)
}

function draw(){
 // background(12, 12, 12, 2);
  for(let i =0; i < movers.length; i++){
    movers[i].run();
  }
}

function loadMovers(n){
   for(let i =0; i < n; i++){
     movers.push(new Mover(random(width), random(height)))
   }

}
