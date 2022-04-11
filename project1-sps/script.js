//GLOBAL VARIABLES
var userName;
var gameMode = "collect username";
var validGamesPlayed = 0;
var userWins = 0;
var userLosses = 0;
var draws = 0;

//HELPER FUNCTIONS

//helper function for runSPS -> generates computer move and returns scissors, paper or stone randomly
var generateComputerMove = function () {
  var myOutputValue;
  var randomIntegerFrom1To3 = Math.floor(Math.random() * 3) + 1;
  if (randomIntegerFrom1To3 == 1) {
    myOutputValue = "scissors";
  } else if (randomIntegerFrom1To3 == 2) {
    myOutputValue = "paper";
  } else {
    myOutputValue = "stone";
  }
  return myOutputValue;
};

//helper function for main -> returns result of the game
var runSPS = function (userInput, computerMove) {
  var myOutputValue;
  if (gameMode == "regular") {
    if (
      (userInput == "scissors" && computerMove == "scissors") ||
      (userInput == "paper" && computerMove == "paper") ||
      (userInput == "stone" && computerMove == "stone")
    ) {
      myOutputValue = `It's a draw!<br> You played ${userInput} and the computer played ${computerMove}.`;
      draws += 1;
      validGamesPlayed += 1;
    } else if (
      (userInput == "scissors" && computerMove == "paper") ||
      (userInput == "paper" && computerMove == "stone") ||
      (userInput == "stone" && computerMove == "scissors")
    ) {
      myOutputValue = `Well done! You won! 🤩<br> You played ${userInput} and the computer played ${computerMove}.`;
      validGamesPlayed += 1;
      userWins += 1;
    } else {
      myOutputValue = `Try again, you lost 😭 <br> You played ${userInput} and the computer played ${computerMove}.`;
      validGamesPlayed += 1;
      userLosses += 1;
    }
  } else if (gameMode == "reverse") {
    //code for reverse mode
    if (
      (userInput == "scissors" && computerMove == "scissors") ||
      (userInput == "paper" && computerMove == "paper") ||
      (userInput == "stone" && computerMove == "stone")
    ) {
      myOutputValue = `It's a draw!<br> You played ${userInput} and the computer played ${computerMove}.`;
      draws += 1;
      validGamesPlayed += 1;
    } else if (
      (userInput == "scissors" && computerMove == "paper") ||
      (userInput == "paper" && computerMove == "stone") ||
      (userInput == "stone" && computerMove == "scissors")
    ) {
      myOutputValue = `Try again, you lost 😭 <br> You played ${userInput} and the computer played ${computerMove}.`;
      validGamesPlayed += 1;
      userLosses += 1;
    } else {
      myOutputValue = myOutputValue = `Well done! You won! 🤩<br> You played ${userInput} and the computer played ${computerMove}.`;
      validGamesPlayed += 1;
      userWins += 1;
    }
  }
  return myOutputValue;
};
//helper function for main function -> returns the stats of the game
var generateStatsGame = function () {
  var myOutputValue;
  var userWinPercentage;

  if (validGamesPlayed == 0) {
    userWinPercentage = 0;
    myOutputValue = "";
    return myOutputValue;
  } else {
    userWinPercentage = Math.round((userWins / validGamesPlayed) * 100);
  }
  myOutputValue = `Your record is: ${userWins} wins, ${draws} draws and  ${userLosses} losses. <br> Your winning percentage is ${userWinPercentage}%. <br><br> Keep going ${userName} you got this!`;
  return myOutputValue;
};
//main function
var main = function (input) {
  var myOutputValue;
  if (gameMode == "collect username") {
    userName = input;
    myOutputValue = `Hi ${userName}! Are you excited? Type regular or reverse to select the game mode!`;
    gameMode = "selecting game mode";
    return myOutputValue;
  } else if (gameMode == "selecting game mode") {
    if (input == "regular") {
      myOutputValue = `You will be playing regular SPS today! Type scissors, paper, or stone to start the game!`;
      gameMode = "regular";
      return myOutputValue;
    } else if (input == "reverse") {
      myOutputValue = `You will be playing reverse SPS today! Type scissors, paper, or stone to start the game!`;
      gameMode = "reverse";
      return myOutputValue;
    } else {
      myOutputValue = `ERROR - Hi ${userName} please input regular or reverse to select the game mode!`;
      return myOutputValue;
    }
  } else if (gameMode == "regular") {
    var userMove = input;
    if (userMove == "reverse") {
      gameMode = "reverse";
      myOutputValue = `You are now in reverse SPS! Type scissors, paper, or stone to start the game!`;
      return myOutputValue;
    } else if (
      userMove != "scissors" &&
      userMove != "paper" &&
      userMove != "stone"
    ) {
      myOutputValue = `Hi ${userName} you need to enter scissors, paper, or stone to play the game!`;
      return myOutputValue;
    }
    var computerMove = generateComputerMove();
    var gameResult = runSPS(userMove, computerMove);
    var gameStats = generateStatsGame();
    myOutputValue = `${gameResult} <br><br> ${gameStats}`;
    return myOutputValue;
  } else if (gameMode == "reverse") {
    var userMove = input;
    if (userMove == "regular") {
      gameMode = "regular";
      myOutputValue = `You are now in regular SPS! Type scissors, paper, or stone to start the game!`;
      return myOutputValue;
    } else if (
      userMove != "scissors" &&
      userMove != "paper" &&
      userMove != "stone"
    ) {
      myOutputValue = `Hi ${userName} you need to enter scissors, paper, or stone to play the game!`;
      return myOutputValue;
    }
    var computerMove = generateComputerMove();
    var gameResult = runSPS(userMove, computerMove);
    var gameStats = generateStatsGame();
    myOutputValue = `${gameResult} <br><br> ${gameStats}`;
    return myOutputValue;
  }
};
