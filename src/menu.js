import { categories } from "./category/categories.js";
import { TextLoader } from "./category/TextLoader.js";

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

	const carouselContainer = document.createElement("div");
	const carouselInner = document.createElement("div");
	carouselContainer.classList.add("carousel-container")

	categories.forEach((category) => {
		const textDiv = document.createElement("div");
		textDiv.classList.add("text-box")
		const text = TextLoader(category);
		text.textContent = category.text;

		textDiv.append(text);
		carouselInner.append(textDiv);
	})



	const navBtns = document.createElement("div");
	const prevBtn = document.createElement("span");  // left
	const nextBtn = document.createElement("span"); // right

	carouselInner.classList.add("carousel-inner")
	navBtns.classList.add("nav-btns")
	prevBtn.classList.add("left")
	nextBtn.classList.add("right")
	prevBtn.textContent = "\u276E"
	nextBtn.textContent = "\u276F"

	navBtns.append(prevBtn, nextBtn)
	carouselInner.append(navBtns);
	carouselContainer.append(carouselInner)


	titleContainer.append(p, title);
	menuDiv.append(titleContainer, carouselContainer);
	contentDiv.appendChild(menuDiv);

	const right = document.querySelector(".right")
	const left = document.querySelector(".left")
	const track = document.querySelector(".carousel-inner")
	const navs = document.querySelector(".nav-btns")

	const carouselWidth = document.querySelector(".carousel-container").offsetWidth;
	// navs.style.width = carouselWidth + 'px';

}

export { Menu };
