
function Home() {
	const contentDiv = document.querySelector("#content");
	const adjacentHeader = document.querySelector("header");
	const div = document.createElement("div")
	const title = document.createElement("h2");
	const p = document.createElement("p");

	div.setAttribute("id", "home-div")
	title.textContent = "JollyBae"
	title.setAttribute("class", "heading");
	p.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aspernatur sed, expedita quae ullam dolorem quas beatae unde iure id alias porro omnis aperiam, molestias recusandae accusantium! Aliquam, quaerat doloremque!"

	div.append(title, p);
	contentDiv.append(div);
	adjacentHeader.insertAdjacentElement("afterend", contentDiv); // targets the header and inserts #content after it
}

export { Home };
