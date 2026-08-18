
function About() {
	const contentDiv = document.querySelector("#content");
	const aboutDiv = document.createElement("div")
	aboutDiv.setAttribute("id", "about-div")


	const storeHeader = document.createElement("header");
	storeHeader.className = "store-header"

	const storeLocation = document.createElement("h2")
	storeLocation.textContent = "JollyBae Restaurant Near Me - Manila Ermita"
	storeLocation.className = "store-heading"

	storeHeader.append(storeLocation)
	aboutDiv.append(storeHeader)
	contentDiv.append(aboutDiv)
}

export { About };
