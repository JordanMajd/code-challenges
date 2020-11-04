'use strict';

const Con = require('../src/cons');

test('Length should return the length of the list', function () {
  let list = new Con(1, new Con(2, new Con(3)));
  expect(list.length()).toBe(3);
});

test('isEmpty should always return false', function () {
  let list = new Con(1);
  expect(list.isEmpty).toBe(false);
});


test('should run a mapping function for every con in the list', function () {

  let list = new Con(1, new Con(2, new Con(3)));

  let count = 0;
  list.map(() => count++);

  expect(count).toBe(3);
});

test('should return a new list the same length as the previous list', function () {

  let list = new Con(1, new Con(2, new Con(3)));

  let mappedList = list.map((h) => h);

  expect(mappedList.length()).toBe(3);
});

test('the cons returned by the mapping function are the cons of the new list', function () {

  let list = new Con(1, new Con(2, new Con(3)));

  let mappedList = list.map((h) => h * 2);

  expect(mappedList.head).toBe(2);
  expect(mappedList.tail.head).toBe(4);
  expect(mappedList.tail.tail.head).toBe(6);
});

test('should run a reducer function for every con in the list, front to back', function () {

  let list = new Con(1, new Con(2, new Con(3)));

  let count = list.reduce(function (acc, head) {
    acc++;
    expect(head).toBe(acc);
    return acc;
  }, 0);

  expect(count).toBe(3);

});

test('the value returned by the reducer function is the accumulation of all cons in list', function () {

  let list = new Con(1, new Con(2, new Con(3)));

  let result = list.reduce((a, h) => a + h, 0);

  expect(result).toBe(6);
});

test('should run a reducer function for every con in the list, back to front', function () {

  let list = new Con(1, new Con(2, new Con(3)));
  let length = list.length();

  let count = list.reduceRight(function (idx, head) {
    expect(length - head).toBe(idx);
    return ++idx;
  }, 0);

  expect(count).toBe(3);

});

test('the value returned by the reducer function is the accumulation of all cons in list', function () {

  let list = new Con(1, new Con(2, new Con(3)));

  let result = list.reduceRight((a, h) => a + h, 0);

  expect(result).toBe(6, 'list reduced to 6');
});
