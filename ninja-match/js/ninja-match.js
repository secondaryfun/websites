//      --==Global Variables==--

let diff = 5;
board = document.querySelector(".board-container");
board.style.display = "none";
startCard = document.getElementById("readyContainer");
readyContainer = document.getElementById("readyContainer");
highScores = document.getElementById("highScores");

//      --==Objects==--

function Card(fac, col, url) {
    this.face = fac;
    this.color = col;
    this.url = url;
}
cardDeck = {
    faces: ["archer", "hanzo", "kaiken", "kunoichi", "madoushi"],
    colors: ["red", "blue"]
}
//      -=Global Functions=-
//returns id index from clicked on element. Id's must end in "-n" where n is the index number.
function getEventIndex(event) {
    element = event.target;
    splitId = element.getAttribute("id").split("-");
    index = parseInt(splitId[splitId.length - 1]);
    console.log("index=" + index + " from ID: " + element.getAttribute("id"));
    return index;
}

//shuffle the array indexes from received array
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
}//-----------shuffle------------

//-----<<<<<<<<<<<<<<=THE GAME OBJECT=>>>>>>>>>>-----
matchingGame = {
    //  -Game Variables-
    cardsInPlay : [],
    matches     : [],
    numToWin    : [],
    pickedCards : [],
    firstCard   : null,    
    secondCard  : null,
    score       : 0,
    //  -Game Methods-
    
    //  method()-Builds divs for each card.
    //To do:  add animation of dealing cards.
    createBoard : function() {
        // console.log("Starting createBoard. Adding n=" + diff + " cards.")
        for (i=0; i<diff; i++) {
            newDiv = document.createElement('div');
            newDiv.classList.add("card-container");
            newDiv.setAttribute("id", "cardContainer-" + i);
            board.appendChild(newDiv);
        }
    },//-----------end createBoard----------------

    //  method() - fills cardsInPlay with randomized pairs and populates images into the board.
    dealCards   : function() {
        //---fill array from deck.faces
        let faces = []
        for (i=0;i<cardDeck.faces.length;i++) {
            faces.push(cardDeck.faces[i]);
        }
        //---randomize the cards
        faces = shuffle(faces);
        
        //---pop off unneeded faces
        i = Math.ceil(diff / 2);
        numToWin = Math.floor(diff / 2);
        while (faces.length > i) {
            faces.pop();
        }

        //create cards
        for (i=0 ; i<faces.length ; i++) {
            for (c=0 ; c<cardDeck.colors.length ; c++) {
            this.cardsInPlay.push(new Card(faces[i],cardDeck.colors[c]));
            }
        }
        //randomize the cards
        this.cardsInPlay = shuffle(this.cardsInPlay);
        this.cardsInPlay.pop();
        //add card urls
        for (i=0; i<this.cardsInPlay.length ; i++) {
            this.cardsInPlay[i].url = ("images/ninjas-" +   matchingGame.cardsInPlay[i].color + "/" + matchingGame.cardsInPlay[i].face + "-" + matchingGame.cardsInPlay[i].color + ".png");
            // console.log("Card created: " + JSON.stringify(this.cardsInPlay[i]));
        }   
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
    showAll    : function() {
        for (i=0; i<diff ; i++) {
            imgCont = document.getElementById("cardContainer-" + i);
            imgCont.style.backgroundImage = 'url("images/card-front.png")';
            image = document.getElementById("ninjaImg-" + i);
            image.src = matchingGame.cardsInPlay[i].url;
        }
    }, //---------end showAll--------------  
    //method() - resets board back to start.
    resetBoard    : function() {
        console.log("resetboard starting.")
        for (i=0; i<diff ; i++) {
            matchFace = this.cardsInPlay[i].face;
            if (!this.matches.some(face => face === matchFace)) {
                image = document.getElementById("ninjaImg-" + i);
                image.src = ("images/card-back.png");
            } 
        }
        this.firstCard = null;
        this.secondCard = null;
        this.score++;
    },//----------end resetBoard--------------
    checkCardReset  : function(face,cipFace){
        console.log("checkCardReset match[i] = " + face + "cipFace = " + cipFace);
        return face === cipFace;
    },

    fullReset   : function() {
        console.log("fullReset starting.");
        document.querySelector(".board-container").innerHTML = null;
        matchingGame.matches = [];
        matchingGame.cardsInPlay = [];
        matchingGame.numToWin = [];
        matchingGame.score = 0;
        matchingGame.startGame();
    },//----------end fullReset--------------
    //method() - show face of target card
    showFace    : function(index) {
        image = document.getElementById("ninjaImg-" + index);
        image.src = matchingGame.cardsInPlay[index].url;
        image.parentElement.style.backgroundImage = 'url("images/card-front.png")';
    },//----------end showFace----------------
    //method() - show back of target card
    showBack    : function(index) {
        // console.log("showBack starting");
        image = document.getElementById("ninjaImg-" + index);
        image.src = "images/card-back.png";
    },
    //method () - checkMatch //Compares two cards passed and returns true if face is equal, else false - received 2 cards
    checkMatch  : function(card1, card2) {
        if (this.firstCard.face === this.secondCard.face) {
            this.matches.push(this.firstCard.face);
            return true;
        } else {return false}
    },//-----------end checkMatch-----------
    //method() - checkWin //Returns true if all possible matches have been found. Iterates through cardsInPlay for num of pairs
    checkWin    : function() {
        if (numToWin === this.matches.length) {
            return true;
        } else {return false}
    },//---------- end checkWin--------------
    decWin: function() {
        highScores.style.display = "block";
        this.showAll();
        setTimeout(highScores.innerHTML = '<h2>Winner!</h2><p>You won in ' + this.score + ' moves. Best possible is ' + Math.floor(diff/2) + ' moves. Click reset board to play again, or try your hand at Ninja Mastery!</p>', 1000)
    },//----------end decWin-----------------
    //method() - flips the card and loads firstCard - receives 1 card
    flipFirst   : function() {
        this.showFace(index);
        this.firstCard = this.cardsInPlay[index];
        console.log("flipFirst complete. this.firstCard is " + JSON.stringify(this.firstCard));
    },//----------end flipFirst--------------
    //method() - second card flip actions: flip card, load secondCard
    flipSecond  : function(index) {
        this.showFace(index);
        this.secondCard = this.cardsInPlay[index];
        console.log("flipSecond complete. secondCard is " + JSON.stringify(this.secondCard));
    },
    startGame   : function() {
        matchingGame.createBoard();
        matchingGame.dealCards();
        startCard.addEventListener("click",function() {
            document.querySelector(".board-container").style.display = "flex";
            document.getElementById("readyContainer").style.display = "none";
        })
        board.querySelectorAll(".card-container").forEach(item => {
            item.addEventListener("click", event => {
                index = getEventIndex(event);
                console.log("Card clicked: " + index);
                console.log("firstCard=" + JSON.stringify(matchingGame.firstCard) + " secondCard=" + JSON.stringify(matchingGame.secondCard));
                //check if card is face up
                let imageType = event.target.src.split("-");
                i = imageType.length - 1;
                console.log("card clicked" + imageType[i]);
                // console.log("firstCard is " + matchingGame.firstCard.face)
                if (imageType[i] === "back.png") {
                    if (!matchingGame.firstCard) {
                        matchingGame.flipFirst(index);
                    } else {
                        matchingGame.flipSecond(index);
                        matchingGame.checkMatch();
                        if(matchingGame.checkWin()) {
                            matchingGame.decWin();
                        } else{
                            setTimeout(function(){matchingGame.resetBoard()}, 1000);
                        }
                    }
                }
            });
        })

    }

}//--------------END GAME OBJECT--------------

//  ------=====Game Play=====------

matchingGame.startGame();


//----------------------------------------





//      ---==EVENT LISTENERS==---
document.getElementById("resetBoardButton").addEventListener("click",matchingGame.fullReset);
