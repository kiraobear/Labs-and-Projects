let brush, roots;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth - width) / 2, 30);
  background(0);
  brush = new Brush(width / 2, height / 2);
  roots = [];
  roots[0] = new Root(width/2, height-height/9);
}

function draw() {
  brush.run();
  for(let i = 0; i < roots.length; i++){
    roots[i].run();
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

function checkRoots(){
  for(let i = roots.length - 1; i >= 0; i--) {
    if(roots[i].isDead) {
      roots.splice(i, 1);
    }
  }
}
