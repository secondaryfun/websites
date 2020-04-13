//      -=Global Variables=-
let diff = 5;
board = document.querySelector(".board-container");
cardClicked = board.querySelector(".card-container");

//      -=Objects=-
function card(loc, fac, col) {
    this.location = loc;
    this.face = fac;
    this.color = col;
}
cardDeck = {
    faces: ["archer", "hanzo", "kaiken", "kunoichi", "madoushi"],
    colors: ["red", "blue"]
}

matchingGame = {
    //  -=Game Variables=-
    cardsInPlay : [],
    firstCard   : null,
    secondCard  : null,
    score       : 0,
    //  -=Game Methods=-
    //  -Builds divs for each card.
    createBoard : function() {
        console.log("Starting createBoard. Adding n=" + diff + " cards.")
        boardSize = diff;
        createBoard(boardSize);
    }
}



x = cardClicked.addEventListener("click",function() {
    console.log("card clicked");
    matchingGame.createBoard();

})

//Build divs to populate board. Receives # of cards.
//To do:  add animation of dealing cards.
function createBoard(numCards) {
    console.log("Starting createBoard. Num Cards: " + numCards);
    for (i=0; i<numCards; i++) {
        newDiv = document.createElement('div');
        newDiv.classList.add("card-container");
        board.appendChild(newDiv);
    }
}
