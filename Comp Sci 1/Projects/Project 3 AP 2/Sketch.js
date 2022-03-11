let thinRectangle//declare variables
let bud = []
let thinRectangles = [];
function setup() {
  createCanvas(600, 600);
  thinRectangle = new ThinRectangle();//create line

  for(let i = 0; i < 15; i++){
    let hite = height / 15;//evenly spaces out lines

    thinRectangles[i] = new ThinRectangles(hite * i);//even out the line spacing
  }

  for(let i = 0; i < 15; i++){//for loop to create the circles and rectangles
    bud[i] = new Bud(thinRectangles[i].loc2.x, thinRectangles[i].loc2.y);
    // console.log(i);
  }
}

function draw() {
  background(0);
  triangle(0,0, 600, 0, 0, 600);//triangle in the back
  thinRectangle.render();//render the singular line in the middle
  for(let i = 0; i < thinRectangles.length; i++){
    thinRectangles[i].render();//render the array of lines
  }

  for(let i = 0; i < bud.length; i++){
    bud[i].render();//render the circles and rectangles
  }
}
