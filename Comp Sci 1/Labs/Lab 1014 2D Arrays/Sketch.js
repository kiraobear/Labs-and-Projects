//Kira O'Grady
//Lab 1014 2D Arrays
let arr=[]
showNumber();
getAverage();
let sum = 0
function setup() {
  createCanvas(400, 400);
  for(let outer = 0; outer < 10; outer++){
    arr[outer] = [];
    for(let inner = 0; inner < 10; inner++){
      arr[outer][inner] = floor(random(100));
    }
  }
  console.log(arr);
  console.log("arr[1][4] = " arr[1][4]);
}

showNumber(){
  console.log("arr[outer][inner]" + arr[outer][inner]);
}

getAverage(){

}
