let movers = [];
let slider;
let val, val1;
function setup() {
  colorMode(HSB);
  slider = createSlider(0, 255, 60, 15);
  slider.position(10, 10);

  slider1 = createSlider(0, 100, 60, 10);
  slider1.position(200, 10);

  var cnv = createCanvas(800,800);
  cnv.position((windowWidth - width) / 2, 50);
  background(2);
  loadMovers(15);
  frameRate(60);
}

function draw(){
  val = slider.value();

  val1 = slider1.value();

  for(let i =0; i < movers.length; i++){
    movers[i].run();
  }
}

function loadMovers(n){
   for(let i =0; i < n; i++){
     movers.push(new Mover(random(width), random(height)))
   }

}
