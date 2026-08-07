
function About() {
	const contentDiv = document.querySelector("#content");
	const div = document.createElement("div")
	const title = document.createElement("h2");
	const p = document.createElement("p");

	div.setAttribute("id", "about-div")
	title.textContent = "About"
	title.setAttribute("class", "heading");
	p.textContent = "This is the about page of how a beef pares taste like."

	div.append(title, p);
	contentDiv.append(div);
}

export { About };
