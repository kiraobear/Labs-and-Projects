let thinRectangle
let bud = []
let thinRectangles = [];
let z;
function setup() {
  createCanvas(600, 600);
  thinRectangle = new ThinRectangle();

  for(let i = 0; i < 15; i++){
    let hite = height / 15;

    thinRectangles[i] = new ThinRectangles(hite * i);
  }

  for(let i = 0; i < 15; i++){
    bud = new Bud(thinRectangles[i].loc2.x, thinRectangles[i].loc2.y);
    console.log(i);
  }
}

function draw() {
  background(220);
  thinRectangle.render();
  for(let i = 0; i < 15; i++){
    thinRectangles[i].render();
  }

  for(let i = 0; i < 15; i++){
    bud[i].render();
  }
}
