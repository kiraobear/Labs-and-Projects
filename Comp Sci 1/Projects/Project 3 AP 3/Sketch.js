let roots;
function setup() {
  createCanvas(400, 400);
  roots = [];

  roots.push(new Root(brush.loc.x, brush.loc.y, 25));
}

function draw() {
  background(220);
  for(let i = 0; i < roots.length; i++){
      roots[i].run();
    }
  checkRoots();
}

function checkRoots(){
  for(let i = roots.length - 1; i >= 0; i--) {
    if(roots[i].isDead) {
      roots.splice(i, 1);
    }
  }
}
