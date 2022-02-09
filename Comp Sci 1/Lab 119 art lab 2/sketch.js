let p1x, p1y, p2x, p2y;
let slider;
function setup(){
  createCanvas(600, 600);
  background(0, 0, 0);

  p1x = 255;
  p1y = 255;
  p2x = 100;
  p2y = 100;

  slider = createSlider(0, 30, 0)
  slider.position(10, 10);
  slider.style('width', '80px');
}

function draw(){
  let val = slider.value();
  noFill();
  stroke(255);
  p1x = p1x + val;
  p2x = p2x - val;

  bezier(300, 100, p1x, p1y, p2x, p2y, 300, 500);
}
