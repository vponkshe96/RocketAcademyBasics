var followAlongMain = function (input) {
  // Attempt the Follow Along exercise from the Loops module below with followAlongMain as the main function.
  var myOutputValue = 'hello world';
  return myOutputValue;
};

var simpleLoopMain = function (input) {
  // Attempt the Simple Loop with Variations exercise from the Loops module below with simpleLoopMain as the main function.
  var myOutputValue = '';
  var counter = 1;
  while(counter <= input){
    myOutputValue += 'hello';
    counter++;
  }
  return myOutputValue;
};

var loopWithinLoopMain = function (input) {
  var myOutputValue = '';
  // Initialise the outer counter, rowCounter
  var row = 1;
  while (row <= input) {
    var col = 1;
    while (col <= input) {
      myOutputValue += `${row}`;
      col++;
    }
    myOutputValue += '<br>';
    row++;
  }
  return myOutputValue;
};


var infiniteLoopMain = function (input) {
  // Attempt the Infinite Loop exercise from the Loops module below with infiniteLoopMain as the main function.
  var myOutputValue = 'hello world';
  return myOutputValue;
};
