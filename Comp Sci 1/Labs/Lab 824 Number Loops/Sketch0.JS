let nmbr;

function setup() {
  createCanvas(400, 400);

let nmbr = [];
  loadNumbers(10);
  printNumbers();
  printAvg();

function loadNumbers(n){

  for(let g = 0 ; g < n ; g = g + 1){
    nmbr[g] = floor(random(10));

  }
}
function printNumbers(){

    for(let g = 0 ; g < nmbr.length ; g = g + 1)
    console.log("g = " + g + " and nmbr[" + g + "] = " + nmbr[g]);

    }
function printAvg(){

    let sum = 0;
    for(let g = 0 ; g < nmbr.length ; g = g + 1){

      sum = sum + nmbr[g]
      }
  console.log("Average = " + sum/nmbr.length);
    }
  }
