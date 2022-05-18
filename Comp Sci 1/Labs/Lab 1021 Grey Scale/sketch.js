//kira ogrady
//lab 1025
let img1, img2;
let threshold;
function preload() {
  img1 = loadImage('klee.jfif');
  img2 = loadImage('klee.jfif');
}
function setup() {
  let cnv = createCanvas(2 * img1.width, img1.height);
  cnv.position((windowWidth - width) / 2, 50);
  background(1);

  threshold = createSlider(0, 255, 100);
  threshold.position(20, 20);
}

function draw() {
  background(1);
  //highContrast();
  //swapPixels();
  //swapPixels1();
  //swapPixels2();
  //swapPixels3();
  swapPixels4();

  image(img1, 0, 0);
  image(img2, width / 2, 0);
}

function swapPixels() {
  img1.loadPixels();
  img2.loadPixels();
  for (let i = 0; i < img1.pixels.length; i += 4) {
    img2.pixels[i + 0] = img1.pixels[i + 2];
    img2.pixels[i + 1] = img1.pixels[i + 1];
    img2.pixels[i + 2] = img1.pixels[i + 0];
  }
  img2.updatePixels();
}

function swapPixels1() {
  img1.loadPixels();
  img2.loadPixels();
  for (let i = 0; i < img1.pixels.length; i += 4) {
    img2.pixels[i + 0] = random(0, 255);
    img2.pixels[i + 1] = img1.pixels[i + 1];
    img2.pixels[i + 2] = random(0, 255);
  }
  img2.updatePixels();
}

function swapPixels2() {
  img1.loadPixels();
  img2.loadPixels();
  for (let i = 0; i < img1.pixels.length; i += 4) {
    img2.pixels[i + 0] = img1.pixels[i + 1]//  green --> red
    img2.pixels[i + 1] = img1.pixels[i + 0]//  red --> green
    img2.pixels[i + 2] = 200
  }
  img2.updatePixels();
}

function swapPixels3() {
  img1.loadPixels();
  img2.loadPixels();
  for (let i = 0; i < img1.pixels.length; i += 4) {
    img2.pixels[i + 0] = img1.pixels[i + 2]*random(-1.5, 1.5);
    img2.pixels[i + 1] = img1.pixels[i + 1];
    img2.pixels[i + 2] = img1.pixels[i + 0]*random(-1.5, 1.5);
  }
  img2.updatePixels();
}

function swapPixels4() {
  img1.loadPixels();
  img2.loadPixels();
  for (let i = 0; i < img1.pixels.length; i += 4) {
    img2.pixels[i + 0] = img1.pixels[i + 0]*mouseX;
    img2.pixels[i + 1] = img1.pixels[i + 1];
    img2.pixels[i + 2] = img1.pixels[i + 2]*mouseY;
  }
  img2.updatePixels();
}

function highContrast() {
  img1.loadPixels();
  img2.loadPixels();
  for (let i = 0; i < img1.pixels.length; i += 4) {
    let sum = img1.pixels[i] + img1.pixels[i + 1] + img1.pixels[i + 2];
    let avg = sum / 3;
    if (avg < (threshold.value())) {
      img2.pixels[i + 0] = 0;
      img2.pixels[i + 1] = 0;
      img2.pixels[i + 2] = 0;
    } else {
      img2.pixels[i + 0] = 255;
      img2.pixels[i + 1] = 255;
      img2.pixels[i + 2] = 255;
    }
  }
  img2.updatePixels();
}
