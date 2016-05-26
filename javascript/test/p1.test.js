'use strict';

const p1 = require('../src/p1');
const timer = require('../timer');
const expect = require('chai').expect;

describe('solution0', function(){

  it('works with given case', function(){
    expect(p1.solution0(10)).to.equal(23);
  });

  xit('finds the sum of all the multiples of 3 or 5 below 1000', function(){
    expect(p1.solution0(1000)).to.equal(233168);
  });

  xit('executes in less than 10 seconds', function(){
    timer.start();
    p1.solution0(1000);
    expect(timer.stop()).to.be.below(10);
  });
});
