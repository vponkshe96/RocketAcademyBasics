//Base: Fah to Cel
var fahrenheitToCelsiusHelper = function (fah) {
  var cel = (5 * (fah - 32)) / 9;
  return cel.toFixed(2);
};

var fahrenheitToCelsiusMain = function (input) {
  var myOutputValue = `${input}F is equal to ${fahrenheitToCelsiusHelper(
    input
  )}C`;
  return myOutputValue;
};

//Base Road Trip Cost
var convertKmToMiles = function (distanceInKm) {
  var distanceInMiles = 0.62 * distanceInKm;
  return distanceInMiles;
};

var calculateTotalCost = function (distanceInKm) {
  var distanceInMiles = convertKmToMiles(distanceInKm);
  var fuelConsumed = distanceInMiles / 9;
  var costPerLitreOfFuel = 2.2;
  var fuelCost = fuelConsumed * costPerLitreOfFuel;
  return fuelCost.toFixed(2);
};

var roadTripCostBaseMain = function (distanceInKm) {
  var distanceInMiles = convertKmToMiles(distanceInKm);
  var fuelCost = calculateTotalCost(distanceInKm);
  var result = `Total fuel cost for 
    ${distanceInKm} km trip is $${fuelCost}`;
  return result;
};

//Comfortable Road Trip Cost
var convertKmToMiles = function (distanceInKm) {
  var distanceInMiles = distanceInKm * 0.62;
  return distanceInMiles;
};

var calculateTotalFuelCostForComfortable = function (
  tripLengthInMiles,
  costPerLitreOfFuel
) {
  // Some code that calculates total fuel cost
  var fuelConsumed = tripLengthInMiles / 9;
  var fuelCost = fuelConsumed * costPerLitreOfFuel;
  return fuelCost;
};

var roadTripCostComfortableMain = function (distanceInKm) {
  var tripLengthInMiles = convertKmToMiles(distanceInKm);
  var fuelCostFerrari = calculateTotalFuelCostForComfortable(
    tripLengthInMiles,
    2.2
  );
  var fuelCostTrain = calculateTotalFuelCostForComfortable(
    tripLengthInMiles,
    2
  );
  var costSaving = (fuelCostFerrari - fuelCostTrain).toFixed(2);

  var result = `For trip of ${distanceInKm} km - cost saving of taking train instead of Ferrari is $${costSaving}`;
  return result;
};
//More Comfortable
var iceMachineMain = function (numberOfGuests) {
  var drinkPerGuest = 2;
  var iceCubesPerDrink = 4;
  var iceCubesPerGuest = drinkPerGuest * iceCubesPerDrink;
  var totalIceCubes = iceCubesPerGuest * numberOfGuests;

  var weightIceCubeGrams = 1.5;
  var totalWeightIceCubeGrams = weightIceCubeGrams * totalIceCubes;
  var totalWeightIceCubePounds = totalWeightIceCubeGrams / 454;

  var iceMachineProductionPerHr = 5;
  var iceMachineDurationHr = totalWeightIceCubePounds / 5;
  var iceMachineDurationMin = Math.round(iceMachineDurationHr * 60);

  var result = `For ${numberOfGuests} guests - the ice machine would need to run for ${iceMachineDurationMin} minutes `;
  return result;
};

var beerOrderMain = function (input) {
  // Complete the More Comfortable: Beer Order exercise below with beerOrderMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var cellularDataMain = function (input) {
  // Complete the More Comfortable: Cost of Cellular Data exercise below with cellularDataMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
