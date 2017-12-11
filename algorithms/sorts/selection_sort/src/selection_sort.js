'use strict';


module.exports = selectionsort;

// Average: O(n^2)
// Worst: O(n^2)
// Time: O(1)
function selectionsort(arr){

  if(arr.length > 0){

    for(let i = 0; i < arr.length; i++){

      let smallest = arr[i];
      let swapIdx = i;
      let j = i;

      for(; j < arr.length; j++){

        if(arr[j] < smallest){
          smallest = arr[j];
          swapIdx = j;
        }
      }

      if(swapIdx != i){
        arr[swapIdx] = arr[i];
        arr[i] = smallest;
      }
    }
  }

  return arr;
}
