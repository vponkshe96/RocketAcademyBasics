//Global Variables
var gameState = "Dice Roll";
var currentPlayerRolls = [];
var currentPlayer = 1;
var allPlayersScore = [];
var isValidOrderSelection = false;
//helper functions
var rollDice = function () {
  var randomDecimal = Math.random();
  var randomIntegerFrom1to6 = Math.floor(randomDecimal * 6) + 1;
  return randomIntegerFrom1to6;
};

var rollDiceForPlayer = function () {
  var counter = 0;
  while (counter < 2) {
    currentPlayerRolls.push(rollDice());
    counter++;
  }
  return `Welcome Player ${currentPlayer}. <br><br> You rolled ${currentPlayerRolls[0]} for Dice 1 and ${currentPlayerRolls[1]}  for Dice 2 <br><br> Please type either 1 or 2 to select the corresponding dice which would be used as the first digit of your final score `;
};

var getPlayerScore = function (userInput) {
  var playerScore;
  if (userInput != 1 && userInput != 2) {
    return `Error! Please type either 1 or 2 to select which dice to use as the first digit <br><br> You rolled ${currentPlayerRolls[0]} for Dice 1 and ${currentPlayerRolls[1]} for Dice 2 `;
  } else if (userInput == 1) {
    isValidOrderSelection = true;
    playerScore = Number(
      String(currentPlayerRolls[0]) + String(currentPlayerRolls[1])
    );
  } else {
    //input == 2
    isValidOrderSelection = true;
    playerScore = Number(
      String(currentPlayerRolls[1]) + String(currentPlayerRolls[0])
    );
  }
  allPlayersScore.push(playerScore);
  currentPlayerRolls = [];
  return `Player ${currentPlayer}:your chosen value is: ${playerScore}`;
};

var compareScore = function () {
  var resultMessage = `Player 1 scored ${allPlayersScore[0]} <br> Player 2 scored ${allPlayersScore[1]} <br>`;
  if (allPlayersScore[0] > allPlayersScore[1]) {
    return resultMessage + `Player 1 is the winner! <br>`;
  } else if (allPlayersScore[1] > allPlayersScore[0]) {
    return resultMessage + `Player 2 is the winner! <br>`;
  } else {
    return resultMessage + `Woah it's a draw <br>`;
  }
};

var resetGame = function () {
  gameState = "Dice Roll";
  currentPlayer = 1;
  allPlayersScore = [];
  isValidOrderSelection = false;
};

var main = function (input) {
  var outputMessage;
  if (gameState == "Dice Roll") {
    outputMessage = rollDiceForPlayer();
    gameState = "Dice Order";
  } else if (gameState == "Dice Order") {
    outputMessage = getPlayerScore(input);
    if (currentPlayer == 1 && isValidOrderSelection) {
      currentPlayer = 2;
      isValidOrderSelection = false;
      gameState = "Dice Roll";
      return outputMessage + "<br><br> It is now Player 2's turn!";
    } else if (currentPlayer == 2 && isValidOrderSelection) {
      gameState = "Compare Scores";
      return (
        outputMessage +
        "<br><br> Click submit to calculate scores and find out the winner!"
      );
    }
  } else {
    //gameState == Compare Scores
    outputMessage = compareScore() + "<br><br> Click submit to play again!";
    resetGame();
    return outputMessage;
  }
  return outputMessage;
};
