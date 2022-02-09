smallest();
let array = []
let small = 100;

smallest(array){
  for(let i = 0; i < array.length; i++){
    array[i] = ceil(random(10));
  }
  if(small > array[i]){
    small = array[i]
  }
  return small;
}
