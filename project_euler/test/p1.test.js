'use strict';

const p1 = require('../solution/p1');
const testUtil = require('../src/test.util');


test('S2: sums all occurances of number under given max', function(){
  expect(p1.s2Sum(3, 1000)).toBe(166833);
  expect(p1.s2Sum(5, 1000)).toBe(99500);
  expect(p1.s2Sum(15, 1000)).toBe(33165);
});

testUtil.testExecutionTime(p1.s2Sum, [3, 1000]);

test('S2: works with given case', function(){
  expect(p1.s2(10)).toBe(23);
});

test('S2: finds the sum of all the multiples of 3 or 5 below 1000', function(){
  expect(p1.s2(1000)).toBe(233168);
});

testUtil.testExecutionTime(p1.s2, [1000]);


test('S1: sums all increments of number under given max', function(){
  expect(p1.s1Sum(3, 1000)).toBe(166833);
  expect(p1.s1Sum(5, 1000)).toBe(99500);
  expect(p1.s1Sum(15, 1000)).toBe(33165);
});

testUtil.testExecutionTime(p1.s1Sum, [3, 1000]);

test('S1: works with given case', function(){
  expect(p1.s1(10)).toBe(23);
});

test('S1: finds the sum of all the multiples of 3 or 5 below 1000', function(){
  expect(p1.s1(1000)).toBe(233168);
});

testUtil.testExecutionTime(p1.s1, [1000]);


test('S0: works with given case', function(){
  expect(p1.s0(10)).toBe(23);
});

test('S0 finds the sum of all the multiples of 3 or 5 below 1000', function(){
  expect(p1.s0(1000)).toBe(233168);
});

testUtil.testExecutionTime(p1.s0, [1000]);

