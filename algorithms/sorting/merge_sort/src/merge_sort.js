'use strict';

module.exports = mergesort;

// Average: O(n log(n))
// Worst: O(n log(n))
// Memory: variable
// Top Down
function mergesort(a){

  //copy array into helper
  let b = a.slice();
  splitmerge(a, b, 0, a.length);

  return a;
}

function splitmerge(a, b, low, high){

  if(high - low < 2){
    return;
  }

  let mid = Math.floor((high + low) / 2);

  splitmerge(b, a, low, mid);
  splitmerge(b, a, mid, high);
  merge(b, a, low, mid, high);
}

function merge(a, b, low, mid, high){

  let left = low;
  let right = mid;

  for(let cur = low; cur < high; cur++){

    if(left < mid && (right >= high || a[left] <= a[right])){
      b[cur] = a[left++];
    } else {
      b[cur] = a[right++];
    }
  }
}
