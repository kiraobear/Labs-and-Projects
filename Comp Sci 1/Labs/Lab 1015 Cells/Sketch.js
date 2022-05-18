//Kira O'Grady
//Lab 1015 Cells
let numCol, numRow, colWidth, rowHeight
let cells = []
function setup() {
  createCanvas(400, 400);
numCol = 50;
numRow = 50;
colWidth = width/numCol;
rowHeight = height/numRow;
  for(let c = 0; c < numCol; c++){//2d array+++++++++++++++
    cells[c] = []
    for(let r = 0; r < numRow; r++){
      let lv = createVector(c*colWidth+colWidth/2, r*rowHeight+rowHeight/2)
      cells[c][r] = new Cell(lv)
    }
  }//++++++++++++++++++++++++++++++++++++++++++++++++++++++
}

function draw() {
    background(200);
    cells.render
}
