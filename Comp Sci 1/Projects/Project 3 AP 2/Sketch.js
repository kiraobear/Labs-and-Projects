let thinRectangle, bud;
let thinRectangles = [];
let z;
function setup() {
  createCanvas(600, 600);
  /*for(let i = 0; i < 100; i++){
    bud = new Bud(0, 0);
  }*/
  thinRectangle = new ThinRectangle();

  for(let i = 0; i < 15; i++){
    thinRectangles[i] = new ThinRectangles();
  }
}

function draw() {
  background(220);
  //bud.run();
  thinRectangle.render();
  thinRectangles[0].render();
}
