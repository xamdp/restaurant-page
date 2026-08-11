import { featureSlides } from "./slides.js";
import { imageLoader } from "./imageLoader.js";
import { Menu } from "../menu.js";

function FeatureSlideshow() {
	// let currentIndex = 0;
	const slideBoxes = [];

	const homeDiv = document.querySelector("#home-div")

	const featureContainer = document.createElement("div");
	const featured = document.createElement("div");

	const titleLinkToMenuDiv = document.createElement("div");
	const title = document.createElement("h2");
	const linkToMenu = document.createElement("a");

	featureContainer.classList.add("feature-container");
	featured.classList.add("featured");

	title.textContent = "Featured Menu"
	linkToMenu.textContent = "View All"
	linkToMenu.href = "#"
	linkToMenu.setAttribute("id", "link-to-menu")
	titleLinkToMenuDiv.classList.add("title-link-menu")
	titleLinkToMenuDiv.append(title, linkToMenu);

	featureSlides.forEach(slide => {
		const slideBox = document.createElement("div");
		slideBox.classList.add("myBox", "fade");

		const img = imageLoader(slide.src, slide.alt);
		const featureText = document.createElement("p");
		featureText.textContent = slide.alt;
		slideBox.append(img, featureText);
		featured.append(slideBox);
		slideBoxes.push(slideBox);
	})

	linkToMenu.addEventListener('click', (event) => {
		event.preventDefault();
		document.querySelector("#content").replaceChildren();
		Menu();
	});

	featureContainer.prepend(titleLinkToMenuDiv, featured);
	homeDiv.append(featureContainer);
}

export { FeatureSlideshow };
