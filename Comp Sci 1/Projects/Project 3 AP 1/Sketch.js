//Kira O'Grady
//Art Project 1 215
let movers = [];
let mainMover,distToMainMover ;
let segments = [];
let v;
let pause = false;
let slider,val;
function setup() {
  //createCanvas(400, 400);
  createCanvas(windowWidth, windowHeight);
  background(10, 10, 10);
  //colorMode(HSB);
  slider = createSlider(0, 360, 60, 40);
  slider.position(10, 10);
  slider.style('width', '80px');
  let t = random(25, 225);
  loadMovers(t);
}

function draw() {
  if (!pause){
  //  background(10, 10, 10, 10);
    mainMover.run();
    for(let i = 0; i < movers.length; i++){
      movers[i].run();
    }

    for (let i = 0; i < segments.length; i++){
      segments[i].run();
    }
  }
  val = slider.value();
}

function keyPressed(){
  // console.log(keyCode);
  if (keyCode === 80 && pause === false){
    pause = true;
  } else if (keyCode === 80 && pause === true){
    pause = false;
  }
}

function loadMovers(n){
  mainMover = new Mover(width/2, height/2);
  for(let i = 0; i < n; i++){
    let a = random(width);
    let b = random(height);
    movers[i] = new Mover(a,b);
  }
}
