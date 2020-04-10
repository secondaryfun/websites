// Get the input field
var input = document.getElementById("numShadesInput");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("shadeButton").click();
  }
});

function generateCircles(numShades, color, r, g, b) {
	console.log("generateCircles starting");
	document.getElementById("circleContainer").innerHTML = "";
	for (var i = 0; i < numShades; i++) {
		document.getElementById("circleContainer").innerHTML += ('<div id="circle-' + i + '" class="colorCircle" style="background:' + color + ';"></div>')
		console.log(i + " num circles generated.")
	}
}

function convertColor (red,green,blue) {
	r = Math.floor(Math.floor(red) * 255);
	g = Math.floor(Math.floor(green) * 255);
	b = Math.floor(Math.floor(blue) * 255);
	return ("rgb(" + r + "," + g + "," + b + ")");
parent.childNodes[1].style.color = col;
}

document.getElementById("shadeButton").onclick = function() {
	let numShades = document.getElementById("numShadesInput").value;
	let r = document.getElementById("redInput").value;
	let g = document.getElementById("greenInput").value;
	let b = document.getElementById("blueInput").value;
	 // let color = document.getElementById("colorInput").value;
	let color = convertColor(r,g,b);

	console.log("input=" + input + " color=" + color)
	generateCircles(numShades, color, r, g, b);
}