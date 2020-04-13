//      --==Global Variables==--

let diff = 5;
board = document.querySelector(".board-container");
startCard = board.querySelector(".start-card");
readyContainer = document.getElementById("readyContainer");

//      --==Objects==--

function card(loc, fac, col) {
    this.location = loc;
    this.face = fac;
    this.color = col;
}
cardDeck = {
    faces: ["archer", "hanzo", "kaiken", "kunoichi", "madoushi"],
    colors: ["red", "blue"]
}

//      ----------=THE GAME OBJECT=---------
matchingGame = {
    //  -Game Variables-
    cardsInPlay : [],
    firstCard   : null,
    secondCard  : null,
    score       : 0,
    //  -Game Methods-
    
    //  method()-Builds divs for each card.
    createBoard : function() {
        console.log("Starting createBoard. Adding n=" + diff + " cards.")
        boardSize = diff;
        createBoard(boardSize);
        readyContainer.style.display = "none";
    }

    //  method() - fills cardsInPlay with pairs of qty(diff/2) and randomizes their locations.
    dealCards   : function() {
        null
    }   
    
}


//      -=Global Functions=-

//func() - Build divs to populate board. Receives # of cards.
//To do:  add animation of dealing cards.
function createBoard(numCards) {
    console.log("Starting createBoard. Num Cards: " + numCards);
    for (i=0; i<numCards; i++) {
        newDiv = document.createElement('div');
        newDiv.classList.add("card-container");
        board.appendChild(newDiv);
    }
}


//      ---==EVENT LISTENERS==---
x = startCard.addEventListener("click",function() {
    console.log("card clicked");
    matchingGame.createBoard();

})
