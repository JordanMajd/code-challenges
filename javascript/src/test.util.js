'use strict';

const Timer = require('./timer');
const expect = require('chai').expect;

function testExecutionTime(fn, args){
  it('executes in less than 10 seconds', function(){
    let timer = new Timer();
    timer.start();
    fn.apply(null, args);
    expect(timer.stop()).to.be.below(10);
  });
}

module.exports = {
  testExecutionTime: testExecutionTime
};
