let cardDeck = [
	["archer","-blue"],
	["archer","-red"],
	["kunoichi","-blue"],
	["kunoichi","-red"],
	["madoushi","-blue"],
	["madoushi","-red"],
	["kaiken","-blue"],
	["kaiken","-red"],
	["hanzo","-blue"],
	["hanzo","-red"]
];
let boardSize; //holds the number of cards to load
let board = []; //holds shuffled cards
let cardsInPlay = []; //holds selected cards - 2 max
let matchedCards = []; //holds locations of matched pairs
let numAttempts = 0; //# of attempts
let targetWinner;  // matches needed to win

let cards = [
{
	rank: "archer",
	suite: "red",
	cardImage: ""
}

//Shuffle func 
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function boardReset() {
	console.log(boardSize);
	for (i = 0; i < boardSize; i += 1) {
		if (matchedCards.length > 0) {
			for (n = 0; n < matchedCards.length; n += 1) {
				if (i !== matchedCards[n]) {
					document.getElementById("card" + (i + 1)).src = "images/card-back.png";
				} 
			}
		}	
		else {
			document.getElementById("card" + (i + 1)).src = "images/card-back.png";
		}
	}
	cardsInPlay = [];
	if (boardSize <= 5) {
		document.getElementById("boardRow2").style.display = "none";
	}
}

function swapImage(cardId) {
	document.getElementById("card" + (cardId + 1)).src = "images/" + board[cardId][0] + board[cardId][1] + ".png";
}

function printCards(cardArray) {
	for (i = 0; i < cardArray.length; i += 1) {
		console.log(cardArray[i][0] + cardArray[i][1] + "");
	}
	console.log(cardArray.length);
}

function loadCardDeck () {
		for (i = 0; i < boardSize; i += 1) {
			board.push(cardDeck[i]);
		}
	if (boardSize >= 5) {
		//turn on board view
		document.getElementById("boardRow1").style.display = "inline";
	} if (boardSize > 5) {
		document.getElementById("boardRow2").style.display = "inline";
	} 
	//console.log(board[0] + " " + board[(board.length - 1)]);
	//console.log(boardSize);
	shuffle(board);
	printCards(board);	
}

function boardShowAll() {
	console.log(boardSize);
	for (i = 0; i < boardSize; i += 1) {
		swapImage(i,board);
	}
	document.getElementById("winner").style.display = "block";
}


function checkMatch() {
	console.log("checkMatch" + cardsInPlay[0][0] + " " + cardsInPlay[1][0]);

	if (cardsInPlay[0][0] === cardsInPlay[1][0]) {
		for (i=0; i < board.length; i += 1) {
			for (n=0; n < cardsInPlay.length; n +=1) {
				console.log("cIp=" + cardsInPlay[n] + " board=" + board[i])
				if (cardsInPlay[n] === board[i]) {
					matchedCards.push(i);
				}
			}
		} 
		return true;
	} else {
		return false;
	}
}

function showCard(cardId) {
	if (cardsInPlay.length <=1) {swapImage(cardId)}
}

function flipCard(cardId) {
	let result = false;
	if (cardsInPlay.length === 0) {
		cardsInPlay.push(board[cardId]);
		printCards(cardsInPlay);
		swapImage(cardId);
	} else if (cardsInPlay.length === 1) {
		cardsInPlay.push(board[cardId]);
		printCards(cardsInPlay);
		swapImage(cardId);		
		checkMatch();
		numAttempts += 1;
		console.log(result);
	} else console.log("too many cards in play");

	targetWinner = Math.floor(boardSize / 2);
	console.log("targetWinner=" + targetWinner + " matchedCards.length=" + matchedCards.length)
	if ((matchedCards.length/2) === targetWinner) {
		document.getElementById("winner").style.display = "block";
		boardShowAll();
	}
	else if (cardsInPlay.length > 1) {
		boardReset();
	}
}

document.getElementById("instructionsLink").onclick = function () {
	document.getElementById("instructionsSection").style.display = "block";
	document.getElementById("gameSection").style.display = "none";
	document.getElementById("boardRowButtons").style.display = "none";
}
document.getElementById("gameLink").onclick = function () {
	document.getElementById("gameSection").style.display = "block";
	document.getElementById("boardRowButtons").style.display = "block";
	document.getElementById("instructionsSection").style.display = "none";
}
document.getElementById("boardSizeSmallButton").onclick = function() {
	boardSize = 5;
	matchedCards = [];
	loadCardDeck();
	boardReset();
}
document.getElementById("boardSizeLargeButton").onclick = function () {
	boardSize = 10;
	matchedCards = [];
	loadCardDeck();
	boardReset();
}
// document.getElementById("resetBoardButton").onclick = function () {location.reload()}

document.getElementById("card1").onclick = function () {flipCard(0)}
document.getElementById("card2").onclick = function () {flipCard(1)}
document.getElementById("card3").onclick = function () {flipCard(2)}
document.getElementById("card4").onclick = function () {flipCard(3)}
document.getElementById("card5").onclick = function () {flipCard(4)}
document.getElementById("card6").onclick = function () {flipCard(5)}
document.getElementById("card7").onclick = function () {flipCard(6)}
document.getElementById("card8").onclick = function () {flipCard(7)}
document.getElementById("card9").onclick = function () {flipCard(8)}
document.getElementById("card10").onclick = function () {flipCard(9)}

document.getElementById("card1").onmousedown = function () {showCard(0)}
document.getElementById("card2").onmousedown = function () {showCard(1)}
document.getElementById("card3").onmousedown = function () {showCard(2)}
document.getElementById("card4").onmousedown = function () {showCard(3)}
document.getElementById("card5").onmousedown = function () {showCard(4)}
document.getElementById("card6").onmousedown = function () {showCard(5)}
document.getElementById("card7").onmousedown = function () {showCard(6)}
document.getElementById("card8").onmousedown = function () {showCard(7)}
document.getElementById("card9").onmousedown = function () {showCard(8)}
document.getElementById("card10").onmousedown = function () {showCard(9)}
