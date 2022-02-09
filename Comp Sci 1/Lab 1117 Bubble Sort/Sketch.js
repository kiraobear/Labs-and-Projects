let nums = [];

function setup(){
  swap();
  loadNumbers(20);
  bubbleSort(nums);
  //bubble2(nums);
  //selection(nums);
  //insert(nums);
  mySort(nums);
}

function loadNumbers(n){
  for(let i = 0 ; i < n ; i++){
    nums[i] = ceil(random(10));
  }return nums;
}
console.log(nums)

function bubbleSort(arr) {
  for(let i = arr.length-1; i > 0; i--){
    for(let j = 0; j < i; j++){
      if(nums[i]  > nums[j]){
        swap(arr, i, j);
      }
    }
  }
}

function bubble2(arr){
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length-1; j++){
      if(arr[i] > arr[j]){
        swap(arr, j, j+1);
      }
    }
  }
}

function selection(arr){
  for(let i = 0; i < arr.length; i++){
    let index = i;
    for(let j = i+1; j < arr.length; j++){
      if(arr[j] < arr[index]){
        index = j;
      }
    }
    swap(arr, i ,index);
  }
}

function insert(arr){
  for(let i = 1; i < arr.length; i++){
    let j = i;
    while((j > 0) && arr[j] < arr[j-1]){
      swap(arr, j, j-1)
      j--
    }
  }return nums

console.log(nums);


function swap(arr, i, j){
  let temp = arr[i];
    arr[i] = arr[j]
    arr[j] = temp;
}

function mySort(arr){
  for(let i = arr.length-1; i > 0; i--){
    for(let j = 0; j < arr.length; j++){
    }
  } swap(arr, j, i);
}
