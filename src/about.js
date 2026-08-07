
function About() {
	const contentDiv = document.querySelector("#content");
	const div = document.createElement("div");
	div.textContent = "This is exported by about"
	div.setAttribute("id", "about-div")
	contentDiv.appendChild(div);
}

export { About };
