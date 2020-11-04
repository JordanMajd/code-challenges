'use strict';

const justify = require('../src/justify');

test('can justify one word', function () {
  // a single word is already justified
  expect(justify('hello', 99)).toBe('hello');
});

test('can justify two words', function () {
  expect(justify('hello world', 14)).toBe('hello    world');
});

test('can justify three words', function () {
  expect(justify('hello today world', 19)).toBe('hello  today  world');
});

test('can justify with uneven spacing', function () {
  expect(justify('hello today world', 20)).toBe('hello   today  world');
});

test('can justify multiple words, uneven spacing', function () {
  expect(justify('hello today is a weekday', 30)).toBe('hello   today   is  a  weekday');
});


// bonus tests
test('can justify words with multiple spaces between', function () {
  expect(justify('hello  today    is  a    weekday', 30)).toBe('hello   today   is  a  weekday');
});

test('can justify words with other tabs between', function () {
  expect(justify('hello	today	is	a	weekday', 30)).toBe('hello   today   is  a  weekday');
});