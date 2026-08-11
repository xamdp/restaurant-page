
function Menu() {
	const contentDiv = document.querySelector("#content");
	const menuDiv = document.createElement("div");
	const titleContainer = document.createElement("div");
	const title = document.createElement("h2");
	const p = document.createElement("p");

	titleContainer.classList.add("title-container")
	menuDiv.setAttribute("id", "menu-div")
	title.textContent = "Menu"
	title.classList.add("heading")
	p.textContent = "Menu"

	titleContainer.append(p, title);
	menuDiv.append(titleContainer);
	contentDiv.appendChild(menuDiv);
}

export { Menu };
