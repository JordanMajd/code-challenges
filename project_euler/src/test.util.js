'use strict';

const Timer = require('./timer');


function testExecutionTime(fn, args){
  test(`${fn.name} executes in less than 10 seconds`, function(){
    let timer = new Timer();
    timer.start();
    fn.apply(null, args);
    expect(timer.stop()).toBeLessThan(10);
  });
}

module.exports = {
  testExecutionTime: testExecutionTime
};
