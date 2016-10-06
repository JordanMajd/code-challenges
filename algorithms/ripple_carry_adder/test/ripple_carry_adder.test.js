'use strict';

const assert = require('chai').assert;
const RippleCarryAdder = require('../src/ripple_carry_adder');

describe('RippleCarryAdder', function(){
  describe('sum', sumTest);
  describe('fullAdder', fullAdderTest);
  describe('halfAdder', halfAdderTest);
});

function sumTest(){

  let rca = new RippleCarryAdder();

  it('Produces base 16 sum of two binary strings', function(){
    assert(rca.sum('0000', '0000') === '0', 'sum is 0');
    assert(rca.sum('0000', '0001') === '1', 'sum is 1');
    assert(rca.sum('0010', '0000') === '2', 'sum is 2');
    assert(rca.sum('0010', '0001') === '3', 'sum is 3');
    assert(rca.sum('1110', '0001') === '15', 'sum is 15');
  });

}

function fullAdderTest(){

  let rca = new RippleCarryAdder();

  it('It sums three bits and returns an object with the result and carry', function(){

    let first = rca.fullAdder(0, 0, 0);
    assert(first.sum === 0, 'sum is 0');
    assert(first.carryOut === 0, 'carry is 0');

    let second = rca.fullAdder(0, 0, 1);
    assert(second.sum === 1, 'sum is 1');
    assert(second.carryOut === 0, 'carry is 0');

    let third = rca.fullAdder(0, 1, 0);
    assert(third.sum === 1, 'sum is 1');
    assert(third.carryOut === 0, 'carry is 0');


    let fourth = rca.fullAdder(0, 1, 1);
    assert(fourth.sum === 0, 'sum is 0');
    assert(fourth.carryOut === 1, 'carry is 1');

    let fifth = rca.fullAdder(1, 0, 0);
    assert(fifth.sum === 1, 'sum is 1');
    assert(fifth.carryOut === 0, 'carry is 0');

    let sixth = rca.fullAdder(1, 0, 1);
    assert(sixth.sum === 0, 'sum is 0');
    assert(sixth.carryOut === 1, 'carry is 1');

    let seventh = rca.fullAdder(1, 1, 0);
    assert(seventh.sum === 0, 'sum is 0');
    assert(seventh.carryOut === 1, 'carry is 1');

    let eighth = rca.fullAdder(1, 1, 1);
    assert(eighth.sum === 1, 'sum is 1');
    assert(eighth.carryOut === 1, 'carry is 1');
  });

}

function halfAdderTest(){

  let rca = new RippleCarryAdder();

  it('It sums two bits and returns an object with the result and carry', function(){

    let firstCase = rca.halfAdder(0, 0);
    assert(firstCase.sum === 0, 'sum is 0');
    assert(firstCase.carryOut === 0, 'carry is 0');

    let secondCase = rca.halfAdder(0, 1);
    assert(secondCase.sum === 1, 'sum is 1');
    assert(secondCase.carryOut === 0, 'carry is 0');

    let thirdCase = rca.halfAdder(1, 0);
    assert(thirdCase.sum === 1, 'sum is 1');
    assert(thirdCase.carryOut === 0, 'carry is 0');

    let fourthCase = rca.halfAdder(1, 1);
    assert(fourthCase.sum === 0, 'sum is 0');
    assert(fourthCase.carryOut === 1, 'carry is 1');
  });
}
