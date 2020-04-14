//      --==Global Variables==--

let diff = 5;
board = document.querySelector(".board-container");
startCard = document.getElementById("readyContainer");
readyContainer = document.getElementById("readyContainer");

//      --==Objects==--

function Card(fac, col) {
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
    //  method() - fills cardsInPlay with randomized pairs and populates images into the board.
    dealCards   : function() {
        //---fill array from deck.faces
        let faces = []
        for (i=0;i<cardDeck.faces.length;i++) {
            faces.push(cardDeck.faces[i]);
        }
        console.log("faces pulled from global deck: " + JSON.stringify(faces));
        //---randomize the cards
        faces = shuffle(faces);
        
        //---pop off unneeded faces
        i = Math.ceil(diff / 2);
        while (faces.length > i) {
            faces.pop();
            console.log("while loop going")
        }

        //create cards
        for (i=0 ; i<faces.length ; i++) {
            for (c=0 ; c<cardDeck.colors.length ; c++) {
            this.cardsInPlay.push(new Card(faces[i],cardDeck.colors[c]));
            console.log("Card created: " + JSON.stringify(this.cardsInPlay[i]));
            }
        }
        //randomize the cards
        this.cardsInPlay = shuffle(this.cardsInPlay);
        this.cardsInPlay.pop();
        //load cards into divs
        for (i=0 ; i < diff ; i++) {
            container = document.getElementById("cardContainer-" + i);
            newImg = document.createElement("img");
            newImg.classList.add("card");
            newImg.setAttribute("id","ninjaImg-" + i);
            newImg.src = ("images/card-back.png");
            container.appendChild(newImg);
        }
    }, // ----------------dealCards---------------------
    //method() - Flip cards to show faces.
    showFace    : function() {
        for (i=0; i<diff ; i++) {
            imgCont = document.getElementById("cardContainer-" + i);
            imgCont.style.backgroundImage = 'url("images/card-front.png")';
            image = document.getElementById("ninjaImg-" + i);
            image.src = ("images/ninjas-" + matchingGame.cardsInPlay[i].color + "/" + matchingGame.cardsInPlay[i].face + "-" + matchingGame.cardsInPlay[i].color + ".png");
        }
    }, //---------showface--------------  
    showBack    : function() {
        for (i=0; i<diff ; i++) {
            image = document.getElementById("ninjaImg-" + i);
            image.src = ("images/card-back.png");
        }
    },//----------showBack--------------
}//--------------END GAME OBJECT--------------

//  ------=====Debugger Testing=====------
y = document.getElementById("showBackButton").addEventListener("click",matchingGame.showBack);
x = document.getElementById("showFaceButton").addEventListener("click",matchingGame.showFace);
z = startCard.addEventListener("click",function() {
    console.log("card clicked");
    matchingGame.createBoard();
    test = matchingGame.dealCards();
    console.log("test = " + JSON.stringify(test));
    console.log("cardsInPlay has been set: " + JSON.stringify(matchingGame.cardsInPlay));
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
        newDiv.setAttribute("id", "cardContainer-" + i);
        board.appendChild(newDiv);
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
