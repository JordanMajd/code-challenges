'use strict';

function Timer(_magnitude){
  this.magnitude = _magnitude ? _magnitude : Timer.defaultMagnitude;;
};

Timer.nano = 1; // one billionth a second
Timer.micro = 1000; // one millionth a second
Timer.milli = Timer.micro * 1000; // one thousandth a second
Timer.second = Timer.milli * 1000; // one second
Timer.minute = Timer.second * 60; // one minute
Timer.hour = Timer.minute * 60; // one hour
Timer.day = Timer.hour * 24; // one day
Timer.defaultMagnitude = Timer.second;

Timer.prototype.start = function(){
  this.startTime = process.hrtime();
};

Timer.prototype.stop = function(){
  let end = process.hrtime(this.startTime)[1];
  return end / this.magnitude;
};

module.exports = Timer;
