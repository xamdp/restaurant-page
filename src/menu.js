

function Menu() {
	const contentDiv = document.querySelector("#content");
	const div = document.createElement("div");
	div.textContent = "This is exported by menu"
	div.setAttribute("id", "menu-div")
	contentDiv.appendChild(div);
}

export { Menu };
