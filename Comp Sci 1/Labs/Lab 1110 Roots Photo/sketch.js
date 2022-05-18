//Kira O'Grady
//Lan 1110 Root Brush
let brush, roots, count, img1, img2;

function preload() {
  img1 = loadImage('leaf.jpg');
  img2 = loadImage('leaf.jpg');
}
function setup() {
  var cnv = createCanvas(2*img1.width, img1.height);
  cnv.position((windowWidth - width) / 2, 30);
  brush = new Brush(width / 2, height / 2);
  roots = [];
  let count = 0
}

function draw() {
  background(1, 1, 1, 0);
  image(img1, 0, 0);
  image(img2, width / 2, 0, 1);
  brush.run();
  for(let i = 0; i < roots.length; i++){
    roots[i].run();
  }
  checkRoots();
  getSet();
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

function getSet(){
  img1.loadPixels();
  img2.loadPixels();
}
