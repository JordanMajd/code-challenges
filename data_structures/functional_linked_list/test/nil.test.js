'use strict';

const Nil = require('../src/nil');

test('isEmpty is always true', function () {
  let nil = new Nil();
  expect(nil.isEmpty).toBe(true);
});

test('map returns reference to iteself', function () {
  let nil = new Nil();
  expect(nil.map()).toBe(nil);
});

test('reduce returns accumulator', function () {
  let nil = new Nil();
  expect(nil.reduce(undefined, 0)).toBe(0);
});

test('reduce returns accumulator', function () {
  let nil = new Nil();
  expect(nil.reduceRight(undefined, 0)).toBe(0);
});
