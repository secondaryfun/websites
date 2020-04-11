let statusRightContainer = "narrow";

function makeNarrow( event ) {
	event.style.width = "20%";
}

function makeWide( event ) {
	event.style.width = "50%";
}

function showContent(event) {
	event.style.display = "block";
}
function flipCoin(element) {
	element.style.transform = "rotate(.5turn)";
	element.style.boxShadow = "-2px 2px 2px rgba(0,0,0,.5)";
}

function resize() {
	console.log("...resize starting");
	if (statusRightContainer === "wide") {
		makeNarrow(rightContainer);
		makeWide(centerContainer);
		statusRightContainer = "narrow";
	} else if (statusRightContainer === "narrow") {
		makeWide(rightContainer);
		makeNarrow(centerContainer);
		statusRightContainer = "wide";
		showContent(hidden);
		flipCoin(coin);
	} else {console.log(statusRightContainer + " Error!")}
}


var rightContainer = document.querySelector(".rightWrapper");
var centerContainer = document.querySelector(".centerWrapper");
var magicButton = document.querySelector(".magicButton");
var hidden = document.querySelector(".hidden");
var coin = document.querySelector(".magicButton");

magicButton.addEventListener("click",resize);
// centerContainer.addEventListener("click",resize);
