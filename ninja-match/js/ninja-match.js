board = document.querySelector(".board-container");
cardClicked = document.querySelector(".card-container");
x = cardClicked.addEventListener("click",function() {
    console.log("card clicked");
    cardCopy = cardClicked.innerHTML;
    for (i=0; i < 5; i++) {
        newDiv = document.createElement('div');
        newDiv.classList.add("card-container");
        newDiv.innerHTML = cardCopy;
        board.appendChild(newDiv);
    }
})
