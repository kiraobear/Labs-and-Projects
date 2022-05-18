let ff;


function setup() {
  var cnv = createCanvas(640,640);
  cnv.position((windowWidth - width) / 2, 30);
  background(30);
  ff = new FlowField();
  
}

function draw(){
    background(30);
    ff.run();
}

