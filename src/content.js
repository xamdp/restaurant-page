
// maybe i should rename the file to Home.js

// i need to append the title inside the div
function Home() {
	const contentDiv = document.querySelector("#content");
	const div = document.createElement("div")
	const title = document.createElement("h2");
	const p = document.createElement("p");

	div.setAttribute("id", "home-div")
	title.textContent = "JollyBee"
	title.setAttribute("class", "heading");
	p.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aspernatur sed, expedita quae ullam dolorem quas beatae unde iure id alias porro omnis aperiam, molestias recusandae accusantium! Aliquam, quaerat doloremque!"

	div.append(title, p);
	contentDiv.append(div);
}

export { Home };
