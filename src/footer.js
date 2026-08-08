// footer.js

function Footer() {
	const footer = document.createElement("footer");
	const p = document.createElement("p");

	p.textContent = "Copyright 2026"
	footer.append(p);
	document.body.append(footer);

}

export { Footer };
