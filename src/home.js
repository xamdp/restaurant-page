
function Home() {
	const contentDiv = document.querySelector("#content");
	const adjacentHeader = document.querySelector("header");
	const div = document.createElement("div")
	const title = document.createElement("h2");
	const p = document.createElement("p");
	const headingTextContainer = document.createElement("div");

	headingTextContainer.classList.add("heading-text-container")
	div.setAttribute("id", "home-div")
	title.textContent = "JollyBae"
	title.setAttribute("class", "heading");
	p.classList.add("text");
	p.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aspernatur sed, expedita quae ullam dolorem quas beatae unde iure id alias porro omnis aperiam, molestias recusandae accusantium! Aliquam, quaerat doloremque!"

	headingTextContainer.append(title, p);
	div.append(headingTextContainer);
	contentDiv.append(div);
	adjacentHeader.insertAdjacentElement("afterend", contentDiv); // inserts the #content div, after the header tag
}

export { Home };
