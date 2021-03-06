let brush, roots;//declare variables

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth - width) / 2, 30);
  background(0);
  brush = new Brush(width / 2, height / 2);//new brush
  roots = [];//roots create an array
  for(let i = 0; i < 45; i++){
    roots[i] = new Root(random(width), 800);//create root class
  }
}

function draw() {
  //brush.run();
  for(let i = 0; i < roots.length; i++){
    roots[i].run();//run the roots
  }
  checkRoots();
}

// function mouseMoved() {
//   brush.loc.x = lerp(brush.loc.x, mouseX, 0.7);
//   brush.loc.y = lerp(brush.loc.y, mouseY, 0.7);
//
//   roots.push(new Root(brush.loc.x, brush.loc.y, 25));
//
// }

function checkRoots(){//check if is dead is true and if so take it out of array
  for(let i = roots.length - 1; i >= 0; i--) {
    if(roots[i].isDead) {
      roots.splice(i, 1);
    }
  }
}
