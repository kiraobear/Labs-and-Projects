class FlowField {
    constructor() {
        this.cellWidth = 40;
        this.numCols = floor(width / this.cellWidth);// set in html;
        this.numRows = floor(height / this.cellWidth);// set in html;

        this.cells = this.loadCells();
       // this.setCellAngle();
        //this.actors = this.loadActors(11);
    }//  +++++++++++++++++++++++++++++++++++++++++++++++++++  end Constructor

    loadCells() {
        let cells = new Array(this.numRows);
        //  load cells array
        this.cellId = 0;
        //  load cells matrix
        for (let r = 0; r < cells.length; r++) {
            cells[r] = new Array(this.numCols);
            for (let c = 0; c < this.numCols; c++) {
                cells[r][c] = new Cell(this.numRows, this.numCols, r, c);
            }
        }
        return cells;
    }

    loadActors(n) {
        let a = [];
        for (let i = 0; i < n; i++) {
            a.push(new Actor(this));
        }
        return a;
    }
    // function to run the ecoSystem each animation cycle
    run() {
        this.setCellAngle();
        //  drawing the cells at the creation of the ecosystem
        for (let r = 0; r < this.numRows; r++) {
            for (let c = 0; c < this.numCols; c++) {
                this.cells[r][c].run();
            }
        }
        // for (let i = 0; i < this.actors.length; i++) {
        //     this.actors[i].run();
        // }

    }// ++++++++++++++++++++++++  end run()

    setCellAngle() {

        let yOff = 0;
        for (let r = 0; r < this.numRows; r++) {
            let xOff = 0;
            for (let c = 0; c < this.numCols; c++) {
              this.cells[r][c].angle = noise(xOff, yOff)*TWO_PI;
              xOff += 0.09;
            }
            yOff += 0.09;

        }
    }

}//  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++  end Class

