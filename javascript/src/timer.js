'use strict';

function Timer(_precision, _magnitude){
  this.precision = _precision ? _precision : Timer.defaultPrecision;
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
Timer.defaultPrecision = 3;

Timer.prototype.start = function(_precision, _magnitude){
  this.startTime = process.hrtime();
}

Timer.prototype.stop = function(){
  return (process.hrtime(this.startTime)[1] / this.magnitude).toFixed(this.precision);
}

module.exports = Timer;
