'use strict';

module.exports = bubblesort;

// Average O(n^2)
// Worst O(n^2)
// Space O(1)
function bubblesort(arr){

  let sorted = false;

  while(!sorted){
    sorted = true;

    for(let i = 0; i < arr.length - 1; i++){

      if(arr[i] > arr[i+1]){
        let tmp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = tmp;
        sorted = false;
      }
    }
  }

  return arr;
}
