let g;
let nmbr = [];

function setup() {
  createCanvas(400, 400);


  loadNumbers(10);
  printReverse();
}
function loadNumbers(n){

  for(let g = 0 ; g < n ; g = g + 1){
    nmbr[g] = floor(random(10));

    
  }
}
function printReverse(){

   let n2 = [];
  for(let g = nmbr.length - 1; g >= 0; g = g - 1){
      n2.push(nmbr[g]);
    }
   console.log("nmbr= " + nmbr);
  console.log ("n2= " + n2);

}
