'use strict';

/**
 * Problem 1
 * https://projecteuler.net/problem=1
 *
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we
 * get 3, 5, 6 and 9. The sum of these multiples is 23.
 *
 * Find the sum of all the multiples of 3 or 5 below 1000.
 */

/*
* s0
*
* divisible solution
*
* loops through all numbers below max and checks if they are divisible by 3 or 5
*/
function s0(max){
  let sum = 0;
  for(let i = 3; i < max; i++){
    if(i % 3 === 0 || i % 5 === 0){
      sum += i;
    }
  }
  return sum;
}

/*
* s1
*
* additive solution
*
* sums all increments of 3 less than max
* sums all increments of 5 less than max
* sums all increments of 15 less than max
* adds sums of 3 and 5 and subtracts sums of 15
*/
function s1(max){
  return s1Sum(3, max) + s1Sum(5, max) - s1Sum(15, max);
}

/*
* s1Sum
*
* helper function for s1
*
* sums all increments of num less than max
*/
function s1Sum(num, max){
  let sum = 0;
  let inc = 0;

  while(inc < max - num){
    inc += num;
    sum += inc;
  }

  return sum;
}

module.exports = {
  s0: s0,
  s1: s1,
  s1Sum: s1Sum
};
