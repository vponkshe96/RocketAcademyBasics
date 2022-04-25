/* ================================================== */
/* ================ GLOBAL VARIABLES ================ */
/* ================================================== */

// Declare Game modes
var GAME_START = "game start";
var GAME_CARDS_DRAWN = "cards are drawn";
var GAME_RESULTS_SHOWN = "results are shown";
var GAME_HIT_OR_STAND = "hit or stand";
var currentGameMode = GAME_START;

var playerHand = [];
var dealerHand = [];
var gameDeck = [];

/* ================================================== */
/* =========== DECK CREATION FUNCTIONS ============== */
/* ================================================== */

// Function that creates a deck of cards, used by createNewDeck function
var createDeck = function () {
  var deck = [];
  var suits = ["♦️", "♣️ ", "♥️", "♠️"];

  for (var indexSuits = 0; indexSuits < suits.length; indexSuits++) {
    var currSuit = suits[indexSuits];
    for (var rankCounter = 1; rankCounter <= 13; rankCounter++) {
      var cardName = rankCounter;
      if (cardName == 1) {
        cardName = "Ace";
      }
      if (cardName == 11) {
        cardName = "Jack";
      }
      if (cardName == 12) {
        cardName = "Queen";
      }
      if (cardName == 13) {
        cardName = "King";
      }
      var card = {
        rank: rankCounter,
        name: cardName,
        suit: currSuit
      };
      deck.push(card);
    }
  }
  return deck;
};

// Function that generates a random number, used by shuffle deck function
var getRandomIndex = function (size) {
  return Math.floor(Math.random() * size);
};

// Function that shuffles a deck, used by createNewDeck function
var shuffleDeck = function (cards) {
  var index = 0;
  while (index < cards.length) {
    var randomIndex = getRandomIndex(cards.length);
    var currentItem = cards[index];
    var randomItem = cards[randomIndex];
    cards[index] = randomItem;
    cards[randomIndex] = currentItem;
    index = index + 1;
  }
  return cards;
};

//Function that creates a new deck which is shuffled, used by main function
var createNewShuffledDeck = function () {
  var newDeck = createDeck();
  var newShuffledDeck = shuffleDeck(newDeck);
  return newShuffledDeck;
};

/* ================================================= */
/* ================ GAME FUNCTIONS ================ */
/* ================================================ */

// Function that checks a hand for blackjack
var checkForBlackjack = function (handArray) {
  var isBlackjack = false;
  var cardOne = handArray[0];
  var cardTwo = handArray[1];

  // Possible black jack scenerios
  // First card is Ace +  Second card is 10 or suits
  // Second card is Ace +  First card is 10 or suits
  if (
    (cardOne.name == "Ace" && cardTwo.rank >= 10) ||
    (cardOne.rank >= 10 && cardTwo.name == "Ace")
  ) {
    isBlackjack = true;
  }

  return isBlackjack;
};

// Function that checks a hand for bust
var checkForBust = function (handArray) {
  var hasBust = false;
  var totalHandValue = calculateTotalHandValue(handArray);
  if (totalHandValue > 21) {
    hasBust = true;
  }
  return hasBust;
};

// Function that calculates a hand value
var calculateTotalHandValue = function (handArray) {
  var totalHandValue = 0;
  var aceCounter = 1;
  var maxValueBeforeBust = 21;

  for (var index = 0; index < handArray.length; index++) {
    if (handArray[index].rank >= 10) {
      //jack, queen, king
      totalHandValue += 10;
    } else {
      totalHandValue += handArray[index].rank;
      //adjustment for ace
      if (
        handArray[index].name == "Ace" &&
        totalHandValue + 10 <= maxValueBeforeBust &&
        aceCounter == 1
      ) {
        totalHandValue += 10;
        aceCounter++;
      }
    }
  }
  return totalHandValue;
};

// Function that displays the player and dealers hand in a message
var displayPlayerAndDealerHands = function (playerHandArray, dealerHandArray) {
  var playerMessage = "Player Hand:<br>";
  var index = 0;
  while (index < playerHandArray.length) {
    playerMessage +=
      "- " +
      playerHandArray[index].name +
      " of " +
      playerHandArray[index].suit +
      "<br>";
    index = index + 1;
  }

  index = 0;
  var dealerMessage = "Dealer Hand:<br>";
  while (index < dealerHandArray.length) {
    dealerMessage +=
      "- " +
      dealerHandArray[index].name +
      " of " +
      dealerHandArray[index].suit +
      "<br>";
    index = index + 1;
  }

  return playerMessage + "<br>" + dealerMessage;
};

// Function that displays the total hand values of the player and the dealer in a message
var displayHandTotalValues = function (playerHandValue, dealerHandValue) {
  var totalHandValueMessage =
    "<br>Player total hand value: " +
    playerHandValue +
    "<br>Dealer total hand value: " +
    dealerHandValue;
  return totalHandValueMessage;
};

/* ================================================= */
/* ================ MAIN FUNCTION ================ */
/* ================================================ */

var main = function (input) {
  gameDeck = createNewShuffledDeck();
  var outputMessage = "";

  //FIRST CLICK
  if (currentGameMode == GAME_START) {
    for (var cardNumber = 1; cardNumber <= 2; cardNumber++) {
      playerHand.push(gameDeck.pop());
      dealerHand.push(gameDeck.pop());
    }

    outputMessage =
      "Cards have been drawn, click submit to evaluate your hand!";
    currentGameMode = GAME_CARDS_DRAWN;
    return outputMessage;
  }

  //SECOND CLICK
  if (currentGameMode == GAME_CARDS_DRAWN) {
    var playerHasBlackjack = checkForBlackjack(playerHand);
    var dealerHasBlackjack = checkForBlackjack(dealerHand);

    var playerHandTotalValue = calculateTotalHandValue(playerHand);
    var dealerHandTotalValue = calculateTotalHandValue(dealerHand);

    if (playerHasBlackjack == true || dealerHasBlackjack == true) {
      if (playerHasBlackjack == true && dealerHasBlackjack == true) {
        outputMessage =
          displayPlayerAndDealerHands(playerHand, dealerHand) +
          `<br> It's blackjack tie!` +
          displayHandTotalValues(playerHandTotalValue, dealerHandTotalValue);
      } else if (playerHasBlackjack == true) {
        outputMessage =
          displayPlayerAndDealerHands(playerHand, dealerHand) +
          `<br> Congrats player, you won with blackjack!` +
          displayHandTotalValues(playerHandTotalValue, dealerHandTotalValue);
      } else {
        outputMessage =
          displayPlayerAndDealerHands(playerHand, dealerHand) +
          `<br> Tough luck player, dealer has won with blackjack!` +
          displayHandTotalValues(playerHandTotalValue, dealerHandTotalValue);
      }
    } else {
      outputMessage = "There is no Blackjack!<br><br>";

      var playerHandTotalValue = calculateTotalHandValue(playerHand);
      var dealerHandTotalValue = calculateTotalHandValue(dealerHand);

      outputMessage +=
        displayPlayerAndDealerHands(playerHand, dealerHand) +
        "<br>" +
        displayHandTotalValues(playerHandTotalValue, dealerHandTotalValue) +
        "<br><br>" +
        "Type whether you would like to hit or stand.";

      currentGameMode = GAME_HIT_OR_STAND;
    }
    return outputMessage;
  }

  //THIRD CLICK - NO ONE has a BLACKJACK and game continues
  if (currentGameMode == GAME_HIT_OR_STAND) {
    var playerHandTotalValue = calculateTotalHandValue(playerHand);
    var dealerHandTotalValue = calculateTotalHandValue(dealerHand);

    if (input == "hit") {
      playerHand.push(gameDeck.pop());
      playerHandTotalValue = calculateTotalHandValue(playerHand);
      if (playerHandTotalValue > 21) {
        outputMessage =
          "You drew another card and busted! You will not be able to draw any more cards. <br><br>" +
          displayPlayerAndDealerHands(playerHand, dealerHand) +
          "<br" +
          displayHandTotalValues(playerHandTotalValue, dealerHandTotalValue) +
          "<br><br> Type stand and find out the result of this round.";
      } else {
        outputMessage =
          `You drew another card.  <br><br>` +
          displayPlayerAndDealerHands(playerHand, dealerHand) +
          "<br>" +
          displayHandTotalValues(playerHandTotalValue, dealerHandTotalValue) +
          "<br>" +
          "What would you like to do next? Type hit or stand.";
      }
    } else if (input == "stand" || input == " ") {
      // playerHandTotalValue = calculateTotalHandValue(playerHand);
      // dealerHandTotalValue = calculateTotalHandValue(dealerHand);
      while (dealerHandTotalValue < 17) {
        dealerHand.push(gameDeck.pop());
        dealerHandTotalValue = calculateTotalHandValue(dealerHand);
      }

      var playerHasBust = checkForBust(playerHand);
      var dealerHasBust = checkForBust(dealerHand);
      outputMessage = "There is no blackjack! <br><br>";
      if (playerHasBust == true || dealerHasBust == true) {
        if (playerHasBust == true && dealerHasBust == true) {
          outputMessage +=
            displayPlayerAndDealerHands(playerHand, dealerHand) +
            `<br> No one wins, both dealer and player have bust!` +
            displayHandTotalValues(playerHandTotalValue, dealerHandTotalValue);
        } else if (playerHasBust == true) {
          outputMessage +=
            displayPlayerAndDealerHands(playerHand, dealerHand) +
            `<br> You bust and lost!` +
            displayHandTotalValues(playerHandTotalValue, dealerHandTotalValue);
        } else {
          outputMessage +=
            displayPlayerAndDealerHands(playerHand, dealerHand) +
            `<br> Congratulations you won as dealer has bust!` +
            displayHandTotalValues(playerHandTotalValue, dealerHandTotalValue);
        }
      } else {
        //NO ONE HAS BUSTED
        if (playerHandTotalValue == dealerHandTotalValue) {
          outputMessage =
            displayPlayerAndDealerHands(playerHand, dealerHand) +
            `<br> It's a tie!` +
            displayHandTotalValues(playerHandTotalValue, dealerHandTotalValue);
        } else if (playerHandTotalValue > dealerHandTotalValue) {
          outputMessage =
            displayPlayerAndDealerHands(playerHand, dealerHand) +
            `<br> Player wins!` +
            displayHandTotalValues(playerHandTotalValue, dealerHandTotalValue);
        } else {
          outputMessage =
            displayPlayerAndDealerHands(playerHand, dealerHand) +
            `<br> Dealer wins!` +
            displayHandTotalValues(playerHandTotalValue, dealerHandTotalValue);
        }
      }
    } else {
      outputMessage =
        "wrong input... only hit or stand are valid.<br><br>" +
        displayPlayerAndDealerHands(playerHand, dealerHand);
    }
    return outputMessage;
  }
};
