'use strict';

function mergeSort(arr, left, right){

  //base case
  if(left >= right){
    return;
  }

  // get middle of array
  // overflow safe
  let mid = Math.floor(left + (right  - left) / 2);

  // left
  mergeSort(arr, left, mid);

  // right
  mergeSort(arr, mid + 1, right);

  merge(arr, mid, left, right);
}

function merge(arr, left, mid, right){

  let leftIdx = left;
  let rightIdx = mid + 1;

  // already sorted check
  // left array = left to mid
  // right array = mid + 1 to right
  while(leftIdx <= middle && rightIdx <= right){
    // already in place, move left index forward
    if(arr[leftIdx]  <= arr[rightIdx]){
      leftIdx++;
    } else {
      
    }
  }
}




console.log(mergeSort([88, 74, 78, 45, 23, 1, 10, 8, 100]));