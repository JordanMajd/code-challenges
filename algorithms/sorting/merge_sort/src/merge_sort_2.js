'use strict';

module.exports = mergesort;

// Average: O(n log(n))
// Worst: O(n log(n))
// Memory: variable
// Top Down
function mergesort(arr){
  if(arr === undefined || arr === null || arr.length === 0){
    return -1;
  }

  return ms(arr, 0, arr.length);
}

function ms(arr, low, high) {

  // if single element nothing to do
  if (high - low <= 1) {
    return -1;
  }

  let mid = Math.floor((high + low) / 2);

  // subsection into sections with 1 element
  ms(arr, low, mid); // left
  ms(arr, mid, high); // right

  // merge subsections
  return merge(arr, low, mid, high);
}


function merge(arr, low, mid, high) {

  // create work array
  let copy = arr.slice();

  let arrIdx = low; // array index
  let leftIdx = low; // left section index
  let rightIdx = mid; // right section index

  // while left not finished and right not finished
  while(leftIdx < mid && rightIdx < high) {

    // if left less than or equal to right copy value over
    if(copy[leftIdx] <= copy[rightIdx]){
      arr[arrIdx] = copy[ leftIdx++];
    } else {
      arr[arrIdx] = copy[rightIdx++];
    }
    // every time we copy a value over increment array index
    arrIdx++;
  }

  // either left is finished or right is finished
  // add remaining values into array

  // left finished
  while(leftIdx < mid){
    arr[arrIdx] = copy[leftIdx++];
    arrIdx++;
  }

  // right finished
  while(rightIdx < high){
    arr[arrIdx] = copy[rightIdx++];
    arrIdx++;
  }

  return arr;
}
