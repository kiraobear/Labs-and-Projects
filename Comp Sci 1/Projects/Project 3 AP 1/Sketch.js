//Kira O'Grady
//Art Project 1 215
let movers = [];
let mainMover,distToMainMover ;
let segments = [];
let v;
let pause = false;
let slider,sliderval;
let particles = [];
function setup() {
  //createCanvas(400, 400);
  createCanvas(windowWidth, windowHeight);
  background(10, 10, 10);
  slider = createSlider(0, 5, 0, 0.05)
  slider.position(10, 10);
  slider.style('width', '80px');
  let t = random(25, 225);
  loadMovers(t);
}

function draw() {
  for(let i = 0; i < 100; i++){
    let c = random(width);
    let d = random(height);
    particles[i] = new Particle(c, d);
  }
  particles.run
  if (!pause){
//    background(10, 10, 10, 10);
    mainMover.run();
    for(let i = 0; i < movers.length; i++){
      movers[i].run();
    }

    for (let i = 0; i < segments.length; i++){
      segments[i].run();
    }
  }
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
