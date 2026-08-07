
// i should create cards here, that displays menus available.

function Menu() {
	const contentDiv = document.querySelector("#content");
	const div = document.createElement("div");
	const title = document.createElement("h2");
	const p = document.createElement("p");

	div.setAttribute("id", "menu-div")
	title.textContent = "Menu"
	p.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aspernatur sed, expedita quae ullam dolorem quas beatae unde iure id alias porro omnis aperiam, molestias recusandae accusantium! Aliquam, quaerat doloremque!"

	div.append(title, p)
	contentDiv.appendChild(div);
}

export { Menu };
