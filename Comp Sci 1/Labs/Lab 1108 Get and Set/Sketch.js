//kira ogrady
//lab 1110
let img1, img2;
function preload() {
  img1 = loadImage('klee.jfif');
  img2 = loadImage('klee.jfif');
}
function setup() {
  let cnv = createCanvas(2 * img1.width, img1.height);
  cnv.position((windowWidth - width) / 2, 50);
  getSet();
  background(1);
}

function draw() {
  background(220);

  image(img1, 0, 0);
  image(img2, width / 2, 0);
}

function getSet(){
  img1.loadPixels();
  img2.loadPixels();
  for(let i = 0; i < 50000; i++){
    let x1 = random(img1.width);
    let y1 = random(img1.height);

    let x2 = random(img1.width);
    let y2 = random(img1.height);

    let c = img1.get(x1, y1);
    img2.set(x2, y2, c);
  }

  img2.updatePixels();
  image(img1, 0, 0);
  image(img2, width / 2, 0);
}
