'use strict';

const RippleCarryAdder = require('../src/ripple_carry_adder');

let rca;
beforeEach(()=>{
  rca = new RippleCarryAdder();
});



test('Produces base 16 sum of two binary strings', function(){
  expect(rca.sum('0000', '0000')).toBe('0');
  expect(rca.sum('0000', '0001')).toBe('1');
  expect(rca.sum('0010', '0000')).toBe('2');
  expect(rca.sum('0010', '0001')).toBe('3');
  expect(rca.sum('1110', '0001')).toBe('15');
});

test('It sums three bits and returns an object with the result and carry', function(){

  let first = rca.fullAdder(0, 0, 0);
  expect(first.sum).toBe(0);
  expect(first.carryOut).toBe(0);

  let second = rca.fullAdder(0, 0, 1);
  expect(second.sum).toBe(1)
  expect(second.carryOut).toBe(0)

  let third = rca.fullAdder(0, 1, 0);
  expect(third.sum).toBe(1);
  expect(third.carryOut).toBe(0);


  let fourth = rca.fullAdder(0, 1, 1);
  expect(fourth.sum).toBe(0);
  expect(fourth.carryOut).toBe(1);

  let fifth = rca.fullAdder(1, 0, 0);
  expect(fifth.sum).toBe(1);
  expect(fifth.carryOut).toBe(0);

  let sixth = rca.fullAdder(1, 0, 1);
  expect(sixth.sum).toBe(0);
  expect(sixth.carryOut).toBe(1);

  let seventh = rca.fullAdder(1, 1, 0);
  expect(seventh.sum).toBe(0);
  expect(seventh.carryOut).toBe(1);

  let eighth = rca.fullAdder(1, 1, 1);
  expect(eighth.sum).toBe(1);
  expect(eighth.carryOut).toBe(1);
});


test('It sums two bits and returns an object with the result and carry', function(){

    let firstCase = rca.halfAdder(0, 0);
    expect(firstCase.sum).toBe(0);
    expect(firstCase.carryOut).toBe(0);

    let secondCase = rca.halfAdder(0, 1);
    expect(secondCase.sum).toBe(1);
    expect(secondCase.carryOut).toBe(0);

    let thirdCase = rca.halfAdder(1, 0);
    expect(thirdCase.sum).toBe(1);
    expect(thirdCase.carryOut).toBe(0);

    let fourthCase = rca.halfAdder(1, 1);
    expect(fourthCase.sum).toBe(0);
    expect(fourthCase.carryOut).toBe(1);
  });
