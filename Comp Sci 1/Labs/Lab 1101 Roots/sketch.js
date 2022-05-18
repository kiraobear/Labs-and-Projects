let brush, roots, count;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth - width) / 2, 30);
  background(0);
  brush = new Brush(width / 2, height / 2);
  roots = [];
  let count = 0
}

function draw() {
  brush.run();
  for(let i = 0; i < roots.length; i++){
    roots[i].run();
  }
  checkRoots();
  branchOut();
}

function mouseMoved() {
  brush.loc.x = lerp(brush.loc.x, mouseX, 0.7);
  brush.loc.y = lerp(brush.loc.y, mouseY, 0.7);

  roots.push(new Root(brush.loc.x, brush.loc.y, 25));

}

function checkRoots(){
  for(let i = roots.length - 1; i >= 0; i--) {
    if(roots[i].isDead) {
      roots.splice(i, 1);
    }
  }
}

function branchOut(){
  for(let i = roots.length - 1; i >= 0; i--){
    // if(roots[i].value === 2){
    //    roots.push(new Root(roots[i].loc.x, roots[i].loc.y, 25));
    // }
  }
}
