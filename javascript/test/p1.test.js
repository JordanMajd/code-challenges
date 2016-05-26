'use strict';

const p1 = require('../solution/p1');
const Timer = require('../src/timer');
const expect = require('chai').expect;

describe('s0', function(){

  it('works with given case', function(){
    expect(p1.s0(10)).to.equal(23);
  });

  it('finds the sum of all the multiples of 3 or 5 below 1000', function(){
    expect(p1.s0(1000)).to.equal(233168);
  });

  it('executes in less than 10 seconds', function(){
    let timer = new Timer();
    timer.start();
    p1.s0(1000);
    expect(timer.stop()).to.be.below(10);
  });
});

describe('s1Sum', function(){

  it('sums all increments of number under given max', function(){
    expect(p1.s1Sum(3, 1000)).to.equal(166833);
    expect(p1.s1Sum(5, 1000)).to.equal(99500);
    expect(p1.s1Sum(15, 1000)).to.equal(33165);
  });

  it('executes in less than 10 seconds', function(){
    let timer = new Timer();
    timer.start();
    p1.s1Sum(3, 1000)
    expect(timer.stop()).to.be.below(10);
  });

});

describe('s1', function(){
  it('works with given case', function(){
    expect(p1.s1(10)).to.equal(23);
  });

  it('finds the sum of all the multiples of 3 or 5 below 1000', function(){
    expect(p1.s1(1000)).to.equal(233168);
  });

  it('executes in less than 10 seconds', function(){
    let timer = new Timer();
    timer.start();
    p1.s1(1000);
    expect(timer.stop()).to.be.below(10);
  });
});
