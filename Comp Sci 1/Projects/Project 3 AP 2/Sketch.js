let thinRectangle
let bud = []
let thinRectangles = [];
function setup() {
  createCanvas(600, 600);
  thinRectangle = new ThinRectangle();

  for(let i = 0; i < 15; i++){
    let hite = height / 15;//evenly spaces out lines

    thinRectangles[i] = new ThinRectangles(hite * i);
  }

  for(let i = 0; i < 15; i++){
    bud[i] = new Bud(thinRectangles[i].loc2.x, thinRectangles[i].loc2.y);
    // console.log(i);
  }
}

function draw() {
  background(0);
  triangle(0,0, 600, 0, 0, 600);
  thinRectangle.render();
  for(let i = 0; i < thinRectangles.length; i++){
    thinRectangles[i].render();
  }

  for(let i = 0; i < bud.length; i++){
    bud[i].render();
  }
}
