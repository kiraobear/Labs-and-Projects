let squares, thinRectangles, circs;
function setup() {
  let r = random(255)
  let t = random(255)
  let f = random(255)
  createCanvas(windowWidth, windowHeight);
  squares = [];
  thinRectangles = [];
  circs = [];
  for(let i =0; i < 1000; i++){
    squares[i] = new Square(random(width), random(height));
  }
  for(let i =0; i < 150; i++){
    thinRectangles[i] = new thinRectangle(random(width), random(height), (r, t, f));
  }
  for(let i =0; i < 20; i++){
    circs[i] = new Circ(random(width), random(height));
  }
}

function draw() {
  background(0);
  for(let i =0; i < 1000; i++){
    squares[i].run();
  }
  for(let i =0; i < 150; i++){
    thinRectangles[i].render();
  }
  for(let i =0; i < 20; i++){
    circs[i].run();
  }
}
