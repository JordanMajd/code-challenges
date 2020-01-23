'use strict';

const p2 = require('../solution/p2');
const testUtil = require('../src/test.util');


describe('s0', function(){

  test('works with given case', function(){
    expect(p2.s0()).to.equal(-1);
  });

  test('finds the sum of all even fib numbers under 4 million', function(){
    expect(p2.s0()).to.equal(-1);
  });

  testUtil.testExecutionTime(p2.s0, []);
});
