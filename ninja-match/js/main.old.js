let cardsInPlay = [];
let cards = [];
let result;
let cardOne;
let cardTwo;
let guessOne;
let guessTwo;
//manually generate the card positions
cards = ["queen","queen","king","king"];

boardSize = 4;
function buildDeck () {
	
}

//check for match
// function check_match () {
// 	if (cardsInPlay.length === 2) {
// 		if (cardsInPlay[0] === cardsInPlay[1]) {
// 			return true;
// 		} else {
// 			return false;
// 		}
// 	} else return null;
// }

// //manually generate user entry
// 	x = 4;
// 	y = 3;

// cardOne = cards[x - 1];
// cardsInPlay.push(cardOne);
// console.log("User flipped " + cardsInPlay[0]);

// //user guessed card 2
// cardTwo = cards[y - 1];
// cardsInPlay.push(cardTwo);
// console.log("User flipped " + cardsInPlay[1]);
// result = check_match();
//console.log(result);

function check_match () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
			return true;
	} else {
			return false;
	}
}

function boardReset() {
	document.getElementById("card1").src = "images/back.png";
	document.getElementById("card2").src = "images/back.png";
	document.getElementById("card3").src = "images/back.png";
	document.getElementById("card4").src = "images/back.png";
	cardsInPlay = [];
}

function revealAll() {
	document.getElementById("card1").src = "images/queen-of-diamonds.png";
	document.getElementById("card2").src = "images/queen-of-hearts.png";
	document.getElementById("card3").src = "images/king-of-diamonds.png";
	document.getElementById("card4").src = "images/king-of-hearts.png";
	document.getElementById("winner").style.display = "block";
}

document.getElementById("reset").onclick = function() {
	boardReset();
	document.getElementById("winner").style.display = "none";
}

// document.getElementById("checkButton").onclick = function() {
// 	//get the input positions
// 	guessOne = document.getElementById("firstCard").value;
// 	guessTwo = document.getElementById("secondCard").value;

// 	//convert input positions into cards
// 	cardOne = cards[guessOne];
// 	cardsInPlay[0] = cardOne;
// 	console.log("User flipped " + cardsInPlay[0]);

// 	cardTwo = cards[guessTwo];
// 	cardsInPlay[1] = cardTwo;
// 	console.log("User flipped " + cardsInPlay[1]);
	
// 	//check for success
// 	result = check_match();
// 	console.log(result);
// }


document.getElementById("card1").onclick = function() {
	let guess = 0;
	let cardNum = "quee";
	let suite = "-of-diamonds"
	if (cardsInPlay.length === 0) {
		cardOne = cards[guess];
		cardsInPlay.push(cardOne);
		// document.getElementById("card1").src = "'images/queen-of-diamonds.png";	
		document.getElementById("card1").src = "images/" + cardNum + suite + ".png";	
	} else if (cardsInPlay.length === 1) {
		cardTwo = cards[guess];
		cardsInPlay.push(cardTwo);	
		document.getElementById("card1").src = "images/queen-of-diamonds.png";
	} else {alert("Error: cardsInPlay has wrong length" + cardsInPlay.length)};
	
	result = check_match(); 
	console.log(cardsInPlay[0] + cardsInPlay[1] + result);

	if (result === true) {
		revealAll();
		//alert("Matched!");
	} else if (cardsInPlay.length > 1) {
		setTimeout(function() {boardReset()}, 2000);
	}
}

function flipCard(guess) {


	// if (cardsInPlay.length === 0) {
	// 	cardOne = cards[guess];
	// 	cardsInPlay.push(cardOne);
	// 	document.getElementById("card1").src = "images/queen-of-diamonds.png";	
	// } else if (cardsInPlay.length === 1) {
	// 	cardTwo = cards[guess];
	// 	cardsInPlay.push(cardTwo);	
	// 	document.getElementById("card1").src = "images/queen-of-diamonds.png";
	// } else {alert("Error: cardsInPlay has wrong length" + cardsInPlay.length)};
	
	// result = check_match(); 
	// console.log(cardsInPlay[0] + cardsInPlay[1] + result);

	// if (result === true) {
	// 	revealAll();
	// 	//alert("Matched!");
	// } else if (cardsInPlay.length > 1) {
	// 	setTimeout(function() {boardReset()}, 2000);
	// }
}

document.getElementById("card2").onclick = function() {
	let guess = 1;
	
	if (cardsInPlay.length === 0) {
		cardOne = cards[guess];
		cardsInPlay.push(cardOne);
		document.getElementById("card2").src = "images/queen-of-hearts.png";	
	} else if (cardsInPlay.length === 1) {
		cardTwo = cards[guess];
		cardsInPlay.push(cardTwo);	
		document.getElementById("card2").src = "images/queen-of-hearts.png";
	} else {alert("Error: cardsInPlay has wrong length" + cardsInPlay.length)};
	
	result = check_match(); 
	console.log(cardsInPlay[0] + cardsInPlay[1] + result);

	if (result === true) {
		revealAll();
		//alert("Matched!");
	} else if (cardsInPlay.length > 1) {
		setTimeout(function() {boardReset()}, 2000);
	}
}

document.getElementById("card3").onclick = function() {
	let guess = 2;
	
	if (cardsInPlay.length === 0) {
		cardOne = cards[guess];
		cardsInPlay.push(cardOne);
		document.getElementById("card3").src = "images/king-of-diamonds.png";	
	} else if (cardsInPlay.length === 1) {
		cardTwo = cards[guess];
		cardsInPlay.push(cardTwo);	
		document.getElementById("card3").src = "images/king-of-diamonds.png";
	} else {alert("Error: cardsInPlay has wrong length" + cardsInPlay.length)};
	
	result = check_match(); 
	console.log(cardsInPlay[0] + cardsInPlay[1] + result);

	if (result === true) {
		revealAll();
		//alert("Matched!");
	} else if (cardsInPlay.length > 1) {
		setTimeout(function() {boardReset()}, 2000);
	}
}

document.getElementById("card4").onclick = function() {
	let guess = 3;
	
	if (cardsInPlay.length === 0) {
		cardOne = cards[guess];
		cardsInPlay.push(cardOne);
		document.getElementById("card4").src = "images/king-of-hearts.png";	
	} else if (cardsInPlay.length === 1) {
		cardTwo = cards[guess];
		cardsInPlay.push(cardTwo);	
		document.getElementById("card4").src = "images/king-of-hearts.png";
	} else {alert("Error: cardsInPlay has wrong length" + cardsInPlay.length)};
	
	result = check_match(); 
	console.log(cardsInPlay[0] + cardsInPlay[1] + result);

	if (result === true) {
		revealAll();
		//alert("Matched!");
	} else if (cardsInPlay.length > 1) {
		setTimeout(function() {boardReset()}, 2000);
	}
}
// click on a card
// 	check if first or second card
// 	if first, load card into first position
// 		show card
// 	if second, load card into second position
// 		show card
// 	test for match
// 		print success
// 		show all cards
// 		show reset board button
// 		if yes, reset board.
// 	if two cards shown, reset board