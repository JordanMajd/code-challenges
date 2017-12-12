'use strict';

module.exports = binarysearch;


// Best: & worst O(n log(n))
// Space: O(1)
function binarysearch(item, arr){
  return binarysearchsplit(item, arr, 0, arr.length -1);
}

function binarysearchsplit(item, arr, low, high){

  if(low > high) return -1;

  let mid = Math.floor(high + low / 2);
  if(item < arr[mid]){
    return binarysearchsplit(item, arr, low, mid - 1);
  } else if (item > arr[mid]){
    return binarysearchsplit(item, arr, mid + 1, high);
  } else {
    return arr[mid];
  }
}
