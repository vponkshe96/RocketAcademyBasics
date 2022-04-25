//GLOBAL VARIABLES
var gameMode = "greeting player";
var currentPlayer = 1;
var currentPlayerRolls = [];
var allPlayersScore = []; //keeps score for one game round
var allPlayerOverallScore = [0, 0]; //keep cumulative score across multiple game rounds
var gamesPlayed = 0;

//HELPER FUNCTIONS

//Roll Dice function - Invoked in Main Function - Returns Integer
var rollDice = function () {
  var randomIntegerFrom1To6 = Math.floor(Math.random() * 6) + 1;
  return randomIntegerFrom1To6;
};

//Get Current Player Score Function - Invoked in Main Function - Returns Integer
var getCurrentPlayerScore = function (diceNumber) {
  var currentPlayerScore;
  if (diceNumber == 1) {
    currentPlayerScore = Number(
      String(currentPlayerRolls[0]) + String(currentPlayerRolls[1])
    );
  } else {
    //diceNumber == 2
    currentPlayerScore = Number(
      String(currentPlayerRolls[1]) + String(currentPlayerRolls[0])
    );
  }
  return currentPlayerScore;
};

//Reset Game Function - Invoked in Main Function - Returns Nothing
var resetGame = function () {
  gameMode = "greeting player";
  currentPlayer = 1;
  currentPlayerRolls = [];
  allPlayersScore = [];
};

var main = function (input) {
  var outputMessage;
  if (gameMode == "greeting player") {
    outputMessage = `Welcome to Beat That Player ${currentPlayer}, click submit to roll your dice`;
    gameMode = "dice rolling";
    return outputMessage;
  } else if (gameMode == "dice rolling") {
    //loop whichs roll dice twice for current player
    for (var i = 0; i < 2; i++) {
      currentPlayerRolls[i] = rollDice();
    }
    outputMessage = `You rolled <br> ${currentPlayerRolls[0]} for dice 1<br> ${currentPlayerRolls[1]} for dice 2 <br><br> Player ${currentPlayer} type 1 or 2 to tell us which dice's value you would like to use to calculate your final score`;
    gameMode = "dice order selection";
    return outputMessage;
  } else if (gameMode == "dice order selection") {
    if (input != 1 && input != 2) {
      return `ERROR! - Player ${currentPlayer} you can only type in 1 or 2 to decide which dice you want to use first for calculating your final score! <br><br> You rolled ${currentPlayerRolls[0]} for dice 1 and ${currentPlayerRolls[1]} for dice 2 <br><br> Type 1 or 2 to proceed!`;
    } else {
      var currentPlayerScore = getCurrentPlayerScore(input);
      if (currentPlayer == 1) {
        outputMessage = `Well done Player ${currentPlayer} you scored ${currentPlayerScore} <br> Now it is Player 2's turn`;
        allPlayersScore.push(currentPlayerScore);
        allPlayerOverallScore[0] += currentPlayerScore;
        currentPlayer = 2;
        currentPlayerRolls = [];
        gameMode = "greeting player";
        return outputMessage;
      } else {
        //currentPlayer == 2
        outputMessage = `Well done Player ${currentPlayer} you scored ${currentPlayerScore} <br> Click Submit to find out the winner!`;
        allPlayersScore.push(currentPlayerScore);
        allPlayerOverallScore[1] += currentPlayerScore;
        gameMode = "compare scores and determine winner";
        return outputMessage;
      }
    }
  } else if (gameMode == "compare scores and determine winner") {
    gamesPlayed++;
    outputMessage = `Player 1 scored ${allPlayersScore[0]} <br> Player 2 scored ${allPlayersScore[1]}`;
    if (allPlayersScore[0] > allPlayersScore[1]) {
      outputMessage += `<br><br> Player 1 wins Game ${gamesPlayed} congratulations! 🎉`;
    } else if (allPlayersScore[1] > allPlayersScore[0]) {
      outputMessage += `<br><br> Player 2 wins Game ${gamesPlayed} congratulations!🎉`;
    } else {
      outputMessage += `<br><br> It's a tie nobody wins!😔`;
    }
    /*When outputting game results in the output box, also output a leaderboard that lists the 2 players and their scores in decreasing order.*/
    outputMessage += `<br><br> 🏆 📈 Leaderboard after Game ${gamesPlayed}:`;
    if (allPlayerOverallScore[0] > allPlayerOverallScore[1]) {
      outputMessage += `<br> 1. Player 1: ${allPlayerOverallScore[0]} <br> 2. Player 2: ${allPlayerOverallScore[1]}`;
    } else if (allPlayerOverallScore[1] > allPlayerOverallScore[0]) {
      outputMessage += `<br> 1. Player 2: ${allPlayerOverallScore[1]} <br> 2. Player 1: ${allPlayerOverallScore[0]}`;
    } else {
      outputMessage += outputMessage += `<br> Scores are level - ${allPlayerOverallScore[0]}`;
    }
    outputMessage += `<br><br> Great match you two, now click submit to play again!`;
    resetGame();
    return outputMessage;
  }
};
