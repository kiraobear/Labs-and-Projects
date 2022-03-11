//Kira O'Grady
//Art Project 1 215
let movers = [];//declaring variables
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
  slider = createSlider(0, 5, 0, 0.05)//slider creating
  slider.position(10, 10);
  slider.style('width', '80px');
  let t = random(25, 175);//random number of movers
  loadMovers(t);//loading movers
}

function draw() {
  for(let i = 0; i < 100; i++){//for loop for the array
    let c = random(width);//random width and height
    let d = random(height);
    particles[i] = new Particle(c, d);
  }
  //particles.run
  if (!pause){//pause function
//    background(10, 10, 10, 10);
    mainMover.run();
    for(let i = 0; i < movers.length; i++){//running movers
      movers[i].run();
    }

    for (let i = 0; i < segments.length; i++){//running lines (not being used)
      segments[i].run();
    }
  }
}

function keyPressed(){//key pressed for pause function
  // console.log(keyCode);
  if (keyCode === 80 && pause === false){
    pause = true;
  } else if (keyCode === 80 && pause === true){
    pause = false;
  }
}

function loadMovers(n){//loading movers
  mainMover = new Mover(width/2, height/2);//mainmover is the center mover
  for(let i = 0; i < n; i++){
    let a = random(width);//random height and random width
    let b = random(height);
    movers[i] = new Mover(a,b);
  }
}
