'use strict';

module.exports = binarysearch;

// Best: & worst O(n log(n))
// Space: O(1)
// Return -1 if nothing found
// Seeing if I remember how to BS
function binarysearch(item, arr){

  if (item === undefined || item === null || arr === undefined || arr === null || arr.length === 0){
    return -1;
  }

  return binarySearchF(item, arr, 0, arr.length);
}

function binarySearchF(item, arr, left, right) {

  if(left > right){
    return -1;
  }

  let mid = Math.floor((left + right) / 2);
  let cur = arr[mid];

  if(cur === item) {
    return cur;
  } else if (mid > item) {
    return binarySearchF(item, arr, left, mid - 1);
  } else { // mid < item
    return binarySearchF(item, arr, mid + 1, right);
  }
}
