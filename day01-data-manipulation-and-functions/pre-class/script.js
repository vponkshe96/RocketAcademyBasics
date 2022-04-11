//Default Template (Our First Program)
var main = function (input) {
  var myOutputValue = `Hi! ${input}!`;
  return myOutputValue;
};

//Greeting Program
var greetingMain = function (name) {
  var myOutputValue = `Hello ${name} ! Wow ${name} is a great name, reminds me of this movie star..`;
  return myOutputValue;
};

//Metric Conversion
var metricMain = function (distanceInKm) {
  var distanceInMiles = 0.62 * distanceInKm;
  return distanceInMiles;
};

//Using Helper Functions in Main Function
var functionsExampleMain = function (input) {
  var myOutputValue = `${input} km = ${metricMain(input)} miles`;
  return myOutputValue;
};

//Train 2 Speed Comfortable
var trainSpeedMain = function (delayMin) {
  var delayHr = delayMin / 60;
  var distance = 400;
  var tripTime = 2 - delayHr;
  var speed = Math.round(distance / tripTime);

  var result = `For delay of ${delayMin} minutes - Train 2's speed should be ${speed} km/hr to reach Tokyo in 2 hours`;
  return result;
};

//Clock Angle More Comfortable
var clockMain = function (min) {
  //calcmin hand angle with 1 pm
  var minReal = min % 60;
  var anglePerMin = 6;
  var angleMin = minReal * anglePerMin;

  //calc hour hand angle from 1 pm
  var hr = Math.floor(min / 60);
  var anglePerHr = 30;
  var angleHr = hr * anglePerHr;

  var result = angleMin - angleHr;
  var myOutputValue = `The angle b/w hr and min hand for ${min} minutes past 1 pm is ${result}
  degrees`;
  return myOutputValue;
};
