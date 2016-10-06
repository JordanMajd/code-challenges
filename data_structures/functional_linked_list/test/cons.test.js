'use strict';

const assert = require('chai').assert;

const Con = require('../src/cons');

describe('Cons', consTest);

function consTest(){
  describe('length', lengthTest);
  describe('isEmpty', isEmptyTest);
  describe('map', mapTest);
  describe('reduce', reduceTest);
  describe('reduceRight', reduceRightTest);
}


function lengthTest(){

 it('should return the length of the list', function(){

   let list = new Con(1, new Con(2, new Con(3)));

   assert(list.length(), 'length is 3');
 });

}

function isEmptyTest(){

  it('should always return false', function(){

    let list = new Con(1);

    assert(list.isEmpty === false, 'isEmpty is false');
  });

}


function mapTest(){

  it('should run a mapping function for every con in the list', function(){

    let list = new Con(1, new Con(2, new Con(3)));

    let count = 0;
    list.map(() => count++);

    assert(count === 3, 'count is 3');

  });

  it('should return a new list the same length as the previous list', function(){

    let list = new Con(1, new Con(2, new Con(3)));

    let mappedList = list.map((h) => h);

    assert(mappedList.length() === 3, 'new list is same length as previous list');
  });

  it('the cons returned by the mapping function are the cons of the new list', function(){

    let list = new Con(1, new Con(2, new Con(3)));

    let mappedList = list.map((h) => h * 2);

    assert(mappedList.head === 2, 'first con is correct');
    assert(mappedList.tail.head === 4, 'second con is correct');
    assert(mappedList.tail.tail.head === 6, 'third con is correct');
  });

}

function reduceTest(){

  it('should run a reducer function for every con in the list, front to back', function(){

    let list = new Con(1, new Con(2, new Con(3)));

    let count = list.reduce(function(acc, head){
      acc++;
      assert(head === acc, 'cons is front to back.');
      return acc;
    }, 0);

    assert(count === 3, 'count is 3');

  });

  it('the value returned by the reducer function is the accumulation of all cons in list', function(){

    let list = new Con(1, new Con(2, new Con(3)));

    let result = list.reduce((a, h) => a + h, 0);

    assert(result === 6, 'list reduced to 6');
  });
}

function reduceRightTest(){

  it('should run a reducer function for every con in the list, back to front', function(){

    let list = new Con(1, new Con(2, new Con(3)));
    let length = list.length();

    let count = list.reduceRight(function(idx, head){
      assert(length - head === idx, 'cons is front to back.');
      return ++idx;
    }, 0);

    assert(count === 3, 'count is 3');

  });

  it('the value returned by the reducer function is the accumulation of all cons in list', function(){

    let list = new Con(1, new Con(2, new Con(3)));

    let result = list.reduceRight((a, h) => a + h, 0);

    assert(result === 6, 'list reduced to 6');
  });


}
