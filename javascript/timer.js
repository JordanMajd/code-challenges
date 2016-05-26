'use strict';

const nano = 1; // one billionth a second
const micro = 1000; // one millionth a second
const milli = micro * 1000; // one thousandth a second
const second = milli * 1000; // one second
const minute = second * 60; // one minute
const hour = minute * 60; // one hour
const day = hour * 24; // one day

const defaultPrecision = 3;
const defaultMagnitude = second;

let startTime;
let precision;
let magnitude;

function start(_precision, _magnitude){
  precision = _precision ? _precision : defaultPrecision;
  magnitude = _magnitude ? _magnitude : defaultMagnitude;
  startTime = process.hrtime();
}

function stop(){
  return (process.hrtime(startTime)[1] / magnitude).toFixed(precision);
}

module.exports = {
  start:start,
  stop:stop,
  nano:nano,
  micro:micro,
  milli:milli,
  second:second,
  minute:minute,
  hour:hour,
  day:day
};
