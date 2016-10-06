'use strict';

function Nil(){}

Nil.prototype.isEmpty = true;

Nil.prototype.map = function(){
  return this;
};

Nil.prototype.reduce = function(fn, acc){
  return acc;
};

Nil.prototype.reduceRight = Nil.prototype.reduce;

module.exports = Nil;
