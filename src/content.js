

function Home() {
	const contentDiv = document.querySelector("#content");
	const div = document.createElement("div")
	div.textContent = "This is exported by Home"
	div.setAttribute("id", "home-div")
	contentDiv.append(div);
}

export { Home };
