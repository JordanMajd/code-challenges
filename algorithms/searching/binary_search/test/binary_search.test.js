'use strict';

const expect = require('chai').expect;
const binarysearch = require('../src/binary_search');

let sSorted = [1, 8, 10, 23, 45, 74, 78, 88, 100];
let lSorted = [2,6,6,6,7,7,7,7,13,16,17,17,23,23,24,24,26,27,30,31,31,31,32,32,32,33,33,33,34,34,36,36,36,38,38,38,39,39,39,39,40,40,41,41,42,43,45,46,47,47,47,49,50,50,51,53,54,55,56,58,61,61,62,62,63,64,64,65,67,67,67,68,69,71,71,72,73,75,76,79,79,80,81,83,84,86,87,87,89,89,90,90,91,92,92,93,93,95,97,100];

describe('mergesort', function(){
  it('Takes an array and sorts it in place', function(){
    expect(binarysearch(88, sSorted)).to.equal(88);
    expect(binarysearch(17, lSorted)).to.equal(17);
    expect(binarysearch(-17, lSorted)).to.equal(-1);
  });
});
