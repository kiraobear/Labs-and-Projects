let thinRectangle, bud;
let z;
function setup() {
  createCanvas(600, 600);
  for(let i = 0; i < 100; i++){
    thinRectangle = new ThinRectangle(0, 0);
    bud = new Bud(0, 0);
  }
}

function draw() {
  bud.run();
  thinRectangle.run();
  background(220);
  line(width/2, 0, width/2, 600)
}
