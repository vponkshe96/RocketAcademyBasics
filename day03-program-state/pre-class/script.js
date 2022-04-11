// global scope
var globalVariable = 0;
// also global scope
var introScopeMain = function (input) {
  // function scope
  console.log(`globalVariable has a value of ${globalVariable}`);
  // we can manipulate the value of a global varaible
  // without having to re-declare using the var keyword:
  globalVariable += 1;
  console.log(`globalVariable now has a value of ${globalVariable}`);
  var myOutputValue;
  if (globalVariable % 2 == 0) {
    // block scope
    // we can access both myOutputValue and globalVariable within block scope
    myOutputValue = `Global variable is even, with a value of ${globalVariable}`;
  } else {
    myOutputValue = `Global variable is odd, with a value of ${globalVariable}`;
  }
  return myOutputValue;
};
//****************DICE GAME PART********************//

var lastDiceRoll;

var getLastDiceInfo = function () {
  var OutputMessage;
  if (lastDiceRoll == undefined) {
    OutputMessage = `<br> This is your first move`;
  } else {
    OutputMessage = `<br> You rolled ${lastDiceRoll}`;
  }
  return OutputMessage;
};
var rollDice = function () {
  return Math.floor(Math.random() * 6) + 1;
};
var appSetupMain = function (input) {
  var compMove = rollDice();
  var userInput = input;
  var OutputMessage;
  if (compMove == userInput) {
    OutputMessage = `You Win! You guessed ${userInput} and ${compMove} was rolled.`;
  } else {
    OutputMessage = `You Lose :( You guessed ${userInput} and ${compMove} was rolled.`;
  }
  OutputMessage += getLastDiceInfo();
  lastDiceRoll = compMove;
  return OutputMessage;
};
//******************************//

var lastRollMain = function (input) {
  //implemented above
};

var winLossMain = function (input) {};

var mostRolledMain = function (input) {
  // Attempt the More Comfortable: Most Rolled exercise from the Program Lifecycle and State module below with mostRolledMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var guessingMain = function (input) {
  // Attempt the More Comfortable: Guessing exercise from the Program Lifecycle and State module below with guessingMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var advancedGuessingMain = function (input) {
  // Attempt the More Comfortable: Advanced Guessing exercise from the Program Lifecycle and State module below with advancedGuessingMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

//******Program State for Game Modes *******//

var mode = "collect username";
var username;
// var followAlongMain = function (input) {
//   // Attempt the Follow Along exercise from the Program State for Game Modes module below with followAlongMain as the main function.
//   if (input == "blue mode") {
//     mode = "blue";
//   } else {
//     mode = "green"; //default mode
//   }
//   var myOutputValue = "Green Goblin (default message)";
//   if (mode == "blue") {
//     myOutputValue = "Aquaman (message if you change mode";
//   }
//   return myOutputValue;
// };

var redModeMain = function (input) {
  // Attempt the Red Mode exercise from the Program State for Game Modes module below with redModeMain as the main function.
  if (mode == "collect username") {
    var OutputMessage;
    OutputMessage = `Hi ${input} which superhero would you like to choose today?`;
    mode = "superhero selection";
    return OutputMessage;
  } else if (mode == "superhero selection") {
    var OutputMessage = "You have chosen";
    if (input == "blue") {
      mode = "blue";
      OutputMessage += " Aquaman!";
    } else if (input == "red") {
      mode = "red"; //default mode
      OutputMessage += " Spiderman!";
    } else {
      OutputMessage += " Green Goblin!";
    }
    OutputMessage += `<br> Type in a color and click Submit to choose another superhero!`;
    mode = "superhero selection";
    return OutputMessage;
  }
};
