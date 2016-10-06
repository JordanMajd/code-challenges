'use strict';

const assert = require('chai').assert;

const Nil = require('../src/nil');

describe('Nil', nilTest);

function nilTest(){
  describe('isEmpty', isEmptyTest);
  describe('map', mapTest);
  describe('reduce', reduceTest);
  describe('reduceRight', reduceRightTest);
}

function isEmptyTest(){

  it('isEmpty is always true', function(){

    let nil = new Nil();

    assert(nil.isEmpty === true, 'isEmpty is true.');
  });

}

function mapTest(){

  it('map returns reference to iteself', function(){

    let nil = new Nil();

    assert(nil.map() === nil, 'nil.map() is map.');
  });

}

function reduceTest(){

  it('reduce returns accumulator', function(){

    let nil = new Nil();

    assert(nil.reduce(undefined, 0) === 0, 'reduce(0) is 0.');
  });

}


function reduceRightTest(){

  it('reduce returns accumulator', function(){

    let nil = new Nil();

    assert(nil.reduceRight(undefined, 0) === 0, 'reduce(0) is 0.');
  });

}
