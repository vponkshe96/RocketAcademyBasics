var emojiNumberCharactersMain = function (input) {
  // Complete the Base: Emoji Drawing Number of Characters exercise below with emojiNumberCharactersMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var emojiSquareMain = function (input) {
  var myOutputValue = "";
  //validate input - COME Back to this
  if (input > 1) {
    console.log(input);
    //input is number
    //create a row counter
    var rowCounter = 1;
    //Create an outer loop to print inputs rows
    while (rowCounter <= input) {
      //create a col counter
      var colCounter = 1;
      //create an inner loop to print input colums
      while (colCounter <= input) {
        myOutputValue += "👍";
        colCounter += 1;
      }
      //successfully printed one row
      myOutputValue += `</br>`;
      rowCounter += 1;
    }
  } else {
    myOutputValue = "Please enter a number above 1";
  }
  return myOutputValue;
};

var emojiTriangleMain = function (input) {
  // Complete the Comfortable: Emoji Drawing Triangle exercise below with emojiTriangleMain as the main function.
  var myOutputValue = "";
  //validate input - COME Back to this
  if (input > 1) {
    console.log(input);
    //input is number
    //create a row counter
    var rowCounter = 1;
    //Create an outer loop to print inputs rows
    while (rowCounter <= input) {
      //create a col counter
      var colCounter = 1;
      //create an inner loop to print input colums
      while (colCounter <= rowCounter) {
        myOutputValue += "👍";
        colCounter += 1;
      }
      //successfully printed one row
      myOutputValue += `</br>`;
      rowCounter += 1;
    }
  } else {
    myOutputValue = "Please enter a number above 1";
  }
  return myOutputValue;
};

var emojiOutlineSquareMain = function (input) {
  // Complete the More Comfortable: Emoji Drawing Outline Square exercise below with emojiOutlineSquareMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var emojiCenterSquareMain = function (input) {
  // Complete the More Comfortable: Emoji Drawing Center Square exercise below with emojiCenterSquareMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var multiDiceBaseMain = function (input) {
  // Complete the Base: Multi-Dice Game exercise below with multiDiceBaseMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var multiDiceMultiRoundMain = function (input) {
  // Complete the More Comfortable: Multi-Round Multi-Dice Game exercise below with multiDiceMultiRoundMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var multiDiceTwoPlayerMain = function (input) {
  // Complete the More Comfortable: Two Player Multi-Round Multi-Dice Game exercise below with multiDiceTwoPlayerMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var multiDiceMultiPlayerMain = function (input) {
  // Complete the More Comfortable: Multi-Player Multi-Round Multi-Dice Game exercise below with multiDiceMultiPlayerMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
