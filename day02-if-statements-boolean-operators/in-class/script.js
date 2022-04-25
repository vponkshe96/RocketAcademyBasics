var lucky11Main = function (input) {
  // Complete the Base: Lucky 11 exercise below with lucky11Main as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

/*
Hawker food is a convenient and affordable food option in Singapore. 
To help educate non-Singaporeans about hawker food, create an app that takes a hawker dish name as input, 
and tells users whether the dish has a "rice", "noodle", or "other" base. 
Some sample dishes are: "chicken rice", "roti prata", "nasi lemak", "hokkien mee", "bak kut teh", and "laksa".
For example, if a user enters "laksa", the program should output "noodle". 
If a user enters "roti prata", the program could output "other".
Please use the || operator.

*/

// User input hawker dishes
// Matching the category of hawker dishes
// Return the output of category to hawker dishes

var hawkerFoodCategorisationMain = function (input) {
  // Input Validation
  // Predefine function .toLowerCase
  var lowerCaseInput = input.toLowerCase();
  var myOutputValue = "";
  if (
    lowerCaseInput != "chicken rice" &&
    lowerCaseInput != "roti prata" &&
    lowerCaseInput != "nasi lemak" &&
    lowerCaseInput != "hokkien mee" &&
    lowerCaseInput != "bak kut teh" &&
    lowerCaseInput != "laksa"
  ) {
    myOutputValue =
      "Please only input some signature dishes like Chicken Rice, Roti Prata, Nasi Lemak, Hokkien Mee, Bak Kut Teh, or Laksa";
    return myOutputValue;
  }
  // User lowerCaseInput hawker dishes
  if (lowerCaseInput == "chicken rice" || lowerCaseInput == "nasi lemak") {
    myOutputValue = "rice";
  } else if (lowerCaseInput == "laksa" || lowerCaseInput == "hokkien mee") {
    myOutputValue = "noodle";
  } else {
    myOutputValue = "others";
  }
  return myOutputValue;

  // Complete the Base: Hawker Food Categorisation exercise below with hawkerFoodCategorisationMain as the main function.
};

/* 4D is a popular betting game in Singapore run by Singapore Pools. Rocket Academy does not endorse gambling.
Create a version of 4D where the player wins if their guess matches any of the 4 digits. The player will input a single digit, and the computer generates 4 random digits between 0 and 9. If the player-inputted digit matches any of the randomly-generated digits, the player wins.
In addition to the win/loss result, output the player guess and all randomly-generated digits so the player can see how close they were.
*/
var fourDSingleDigitMain = function (input) {
  //User Input - single digit number
  var myOutputValue;
  if (input < 0 || input > 9) {
    myOutputValue = "Please enter a single digit number between 0 and 9";
    return myOutputValue;
  }
  //generate 4 random digits
  var digit1 = Math.floor(Math.random() * 9 + 1);
  var digit2 = Math.floor(Math.random() * 9 + 1);
  var digit3 = Math.floor(Math.random() * 9 + 1);
  var digit4 = Math.floor(Math.random() * 9 + 1);

  //conditions
  if (
    input == digit1 ||
    input == digit2 ||
    input == digit3 ||
    input == digit4
  ) {
    myOutputValue = `Congratulation you won - you guessed ${input} and you got ${digit1} ${digit2} ${digit3} ${digit4}`;
  } else {
    myOutputValue = `Try Again next time :( - you guessed ${input} and you got ${digit1} ${digit2} ${digit3} ${digit4}`;
  }

  return myOutputValue;
};

var hawkerFoodRandomnessMain = function (input) {
  // Complete the Comfortable: Hawker Food Randomness exercise below with hawkerFoodRandomnessMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
/*Create a version of 4D where the player wins if they guess within 1000 (above or below) of the winning 4-digit number. Consider using comparison operators such as less than (<) and greater than (>).*/
var fourDWinningRangeMain = function (input) {
   //User Input - single digit number and input validation
   var numInput = Number(input);
   var myOutputValue = '';
   if (numInput < 0 || numInput > 9999) {
     myOutputValue = "Please enter a number between 0 and 9999";
     return myOutputValue;
   }
  //generate 4 digits
  var num4D = Math.(Math.random()*9999);
  //calculate difference b/w input and 4 digits
  var diff = Math.abs(num4D - numInput);
  //conditionals
  if(){

  }

  // Complete the More Comfortable: 4D with Winning Range exercise below with fourDWinningRangeMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var hawkerFoodOmakaseMain = function (input) {
  // Complete the More Comfortable: Hawker Food Omakase exercise below with hawkerFoodOmakaseMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
