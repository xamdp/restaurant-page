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



	const prevBtn = document.createElement("button");  // left
	const nextBtn = document.createElement("button"); // right

	prevBtn.type = "button"
	nextBtn.type = "button"
	carouselInner.classList.add("carousel-inner")
	// navBtns.classList.add("nav-btns")
	prevBtn.classList.add("left")
	nextBtn.classList.add("right")
	prevBtn.textContent = "\u276E"
	nextBtn.textContent = "\u276F"

	// navBtns.append(prevBtn, nextBtn)
	carouselContainer.append(carouselInner, prevBtn, nextBtn)

	titleContainer.append(p, title);
	menuDiv.append(titleContainer, carouselContainer);
	contentDiv.appendChild(menuDiv);


	document.querySelectorAll('.carousel-container').forEach((carousel) => {
		const inner = carousel.querySelector(".carousel-inner")
		const slides = inner.children;

		carousel.querySelector(".left").addEventListener('click', () => {
			inner.prepend(slides[slides.length - 1]);
		})

		carousel.querySelector(".right").addEventListener('click', () => {
			inner.append(slides[0]);
		})
	})

}

export { Menu };
