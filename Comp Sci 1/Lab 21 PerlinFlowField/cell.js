class Cell {
    // numRows, numCold, row, col, cellWidth
    constructor( nr, nc, r, c ) {
       this.numRows = nr;
       this.numCols = nc;
       this.row = r;
       this.col = c;
       this.cellWidth = floor(width/nc);
       this.loc = createVector(c*this.cellWidth, r*this.cellWidth);
       this.center = createVector(this.loc.x + this.cellWidth/2,this.loc.y + this.cellWidth/2 )
       this.angle = random( TWO_PI );
       // create a vector form angle

    }//  +++++++++  end constructor

    run() {
        this.render();
    }

    render() {
      stroke(2);
      strokeWeight(2);
      fill(120,50,200)
      rect(this.loc.x, this.loc.y, this.cellWidth, this.cellWidth);

      push();
        translate(this.center.x, this.center.y);
        rotate(this.angle);
        line(0,0, this.cellWidth/2, 0);
        ellipse(0,0, 5, 5);
      pop();
      
    }

  
}//+++++++++++++++++++++  end of Cell class
