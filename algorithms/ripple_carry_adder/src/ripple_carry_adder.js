'use strict';

function RippleCarryAdder(){}

RippleCarryAdder.prototype.sum = function (a, b) {

    let first, second;
    let returnArray = [];

    a = a || '0';
    b = b || '0';

    if(a.length > b.length){
      first = a.split();
      second = b.split();
    }else{
      second = a.split();
      first = b.split();
    }

    let carryIn = 0;
    for(let i = first.length - 1; i >= 0; i--){
      let firstInt = parseInt(first[i], 2);
      let secondInt = parseInt(second[i] || 0, 2);

      let result = this.fullAdder(firstInt, secondInt, carryIn);

      carryIn = parseInt(result.carryOut, 10);
      let sum = parseInt(result.sum, 10);
      returnArray.push(sum);
    }

    if(carryIn !== 0){
      returnArray.push(carryIn);
    }

    return returnArray.join('');
};

RippleCarryAdder.prototype.halfAdder = function (augend, addend) {
  return {
    sum: augend ^ addend,
    carryOut: augend & addend
  };
};

RippleCarryAdder.prototype.fullAdder = function (augend, addend, carryIn) {

    let resultOne = this.halfAdder(augend, addend);
    let resultTwo = this.halfAdder(resultOne.sum, carryIn);

    return {
      sum: resultTwo.sum,
      carryOut: resultOne.carryOut | resultTwo.carryOut
    };
};

module.exports = RippleCarryAdder;
