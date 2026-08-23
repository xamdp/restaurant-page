// footer.js

function Footer() {
	const footer = document.createElement("footer");
	const p = document.createElement("p");

	p.textContent = "Copyright 2026 - JollyBae Restaurant"
	footer.append(p);
	document.querySelector(".container").append(footer);

}

export { Footer };
