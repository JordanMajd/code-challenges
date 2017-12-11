'use strict';

module.exports = quicksort;

// Average: O(n log n)
// Worst: O(n^2)
function quicksort(array, low, high){

  if(low === undefined){
    low = 0;
  }

  if(high === undefined){
    high = array.length - 1;
  }

  if(array.length > 1){

    let pivot = partition(array, low, high);

    if(low < pivot - 1){
      quicksort(array, low, pivot - 1);
    }

    if(high > pivot){
      quicksort(array, pivot, high);
    }
  }

  return array;
}

function partition(array, low, high){

  let pivot = array[Math.floor((high + low) / 2)];

  let leftIdx = low;
  let rightIdx = high;

  while(leftIdx <= rightIdx){

    while(array[leftIdx] < pivot){
      leftIdx++;
    }

    while(array[rightIdx] > pivot){
      rightIdx--;
    }

    if(leftIdx <= rightIdx){
      swap(array, leftIdx, rightIdx);
      leftIdx++;
      rightIdx--;
    }
  }

  return leftIdx;
}

function swap(array, leftIdx, rightIdx){
  let tmp = array[leftIdx];
  array[leftIdx] = array[rightIdx];
  array[rightIdx] = tmp;
}

let a = [9, 4, 6, 1, 4, 6, 8, 8, 0, 1 ,2];
quicksort(a);
console.log(a);
