'use strict';

const Nil = require('./nil');

function Cons(head, tail) {

  if(tail === undefined){
    tail = new Nil();
  }

  this.head = head;
  this.tail = tail;
}

Cons.prototype.isEmpty = false;

Cons.prototype.length = function(){
  return this.reduce((a) => a + 1, 0);
};

Cons.prototype.map = function(fn){
  return this.reduceRight((prev, value) => new Cons(fn(value), prev));
};

Cons.prototype.reduce = function(fn, acc){
  return this.tail.reduce(fn, fn(acc, this.head));
};

Cons.prototype.reduceRight = function(fn, acc){
  return fn(this.tail.reduceRight(fn, acc), this.head);
};


module.exports = Cons;
