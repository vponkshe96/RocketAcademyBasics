//Orange Juice Calculator
var orangeJuiceMain = function (numGuests) {
  var glassesPerGuest = 2;
  var numGlasses = glassesPerGuest * numGuests;
  var orangesPerGlass = 4;
  var numOranges = numGlasses * orangesPerGlass;

  var result = `We need ${numOranges} oranges to serve ${numGuests} guests at the party`;
  return result;
};

var orangeJuiceAdvanced = function (numGuests, glassesPerGuest) {
  var numGlasses = numGuests * glassesPerGuest;
  var orangesPerGlass = 4;
  var numOranges = orangesPerGlass * numGlasses;

  var result = `We need ${numOranges} oranges to serve ${numGuests} guests at the party`;
  return result;
};

//House Paint

var paintMain = function (costPerLitre) {
  var areaPerRoom = 3 * 3;
  var numRooms = 6;
  var numCoatsPerArea = 2;
  var areaToPaint = areaPerRoom * numRooms * numCoatsPerArea;

  var areaPerLitre = 300;
  var litreUsed = areaToPaint / areaPerLitre;
  var cost = (litreUsed * costPerLitre).toFixed(2);

  var result = `Paint Cost: $${cost}`;
  return result;
};

var paintMainAdvanced = function (costPerLitre, numRooms, numCoatsPerArea) {
  var areaPerRoom = 3 * 3;
  var areaToPaint = areaPerRoom * numRooms * numCoatsPerArea;

  var areaPerLitre = 300;
  var litreUsed = areaToPaint / areaPerLitre;
  var cost = litreUsed * costPerLitre;

  var result = `Paint Cost: $${cost}`;
  return result;
};

//Control Flow Module
var rollDice = function () {
  var randomNum = Math.random() * 6;
  var randomInt = Math.floor(randomNum);
  var diceNum = randomInt + 1;
  return diceNum;
};
var randomDiceMain = function (input) {
  var randomDiceNum = rollDice();
  var myOutputValue = `You rolled ${randomDiceNum} - try again!`;
  if (input == randomDiceNum) {
    myOutputValue = `Congrats! - you rolled ${input} and won`;
  }
  return myOutputValue;
};

//secret Phrase
var secretPhraseMain = function (input) {
  var output = "The door shall not open";

  if (input == "hello world" || input == "yo" || input == "hola") {
    output = "The door shall open!";
  } else if (input == "hello") {
    output += ", you are VERY CLOSE";
  } else {
    output += ", try HARDER";
  }
  return output;
};

//dice game
var diceGameMain = function (input) {
  var randomDiceNum = rollDice();
  var myOutputValue = `Your guess was ${input} and you just rolled a ${randomDiceNum} - `;
  if (
    (input == "odd" && randomDiceNum % 2 == 1) ||
    (input == "even" && randomDiceNum % 2 == 0)
  ) {
    myOutputValue += `Congratulations you won!`;
  } else if (input == "palatable papaya") {
    myOutputValue = "You still win!";
  } else {
    myOutputValue += `Try again :(`;
  }
  return myOutputValue;
};

//twiceGuess
var twiceGuessMain = function (input) {
  var randomDiceNum = rollDice();
  var myOutputValue;
  if (randomDiceNum == input) {
    myOutputValue = "Congrats you won!";
  } else {
    myOutputValue = `You lose, you guessed ${
      2 * input
    } instead of ${randomDiceNum}`;
  }
  return myOutputValue;
};
