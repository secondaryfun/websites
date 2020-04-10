var toggle = 1;
function toggleClass() {
	var element = document.getElementById("contact-image");
	if (toggle % 2 == 0) {
		element.classList.toggle("wide");
}
if (toggle % 2 == 1) {
	element.classList.toggle("narrow");
}
toggle = toggle + 1;
}
document.getElementById("").onclick = function () {
  toggleClass();
}                                                 