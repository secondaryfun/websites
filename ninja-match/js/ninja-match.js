//      --==Global Variables==--

let diff = 5;
board = document.querySelector(".board-container");
startCard = board.querySelector(".start-card");
readyContainer = document.getElementById("readyContainer");

//      --==Objects==--

function Card(loc, fac, col) {
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
    },
    // method() - fills cardsInPlay with pairs of qty(diff/2)
    pickPairs : function() {
        //fill array from deck.faces
        let faces = []
        for (i=0;i<cardDeck.faces.length;i++) {
            faces.push(cardDeck.faces[i]);
        }
        //choose diff/2 faces
        let numPairs = Math.floor(diff/2);
        let pairs = [];
        for (i=0;i<numPairs;i++) {
            randomIndex = Math.floor(Math.random() * faces.length);
            pairs.push(faces[randomIndex]);
            faces.splice(randomIndex, 1);
        }
        //create diff.length cards in cardsInPlay
        for (i=0;i<diff.length;i++) {
            for (p=0;p<pairs.length;p++) {
                for (c=0;c<cardDeck.colors.length;c++)
                cardsInPlay[i] = new card(null,pairs[p],cardDeck.colors[c])
            }
        }
        return cardsInPlay;
    },
    //  method() - fills cardsInPlay with pairs of qty(diff/2) and randomizes their locations.
    dealCards   : function() {
        dealCards(cardsInPlay, diff)
    }   
    
}//--------------END GAME OBJECT--------------

//  ------=====Current Test=====------


x = startCard.addEventListener("click",function() {
    console.log("card clicked");
    // matchingGame.createBoard();
    test = matchingGame.pickPairs();
    console.log(JSON.stringify(test));
})
//----------------------------------------



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
function dealCards(cardsInPlay, numCards) {
    let pairs = [], colors = [];

    for (i=0;i<numCards;i++) {
        random = Math.floor(Math.random() * numCards);

    }
}
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

//      ---==EVENT LISTENERS==---
