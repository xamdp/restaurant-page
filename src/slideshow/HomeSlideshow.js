
import { slides } from "./slides.js";
import { imageLoader } from "./imageLoader.js";

function HomeSlideshow() {
	const homeDiv = document.querySelector("#home-div");

	const container = document.createElement("div");
	const imageContainer = document.createElement("div");

	const slideElements = slides.map(s => imageLoader(s.src, s.alt))

	const prevBtn = document.createElement("button");
	const nextBtn = document.createElement("button");

	const dots = document.createElement("div");
	const dot1 = document.createElement("span");
	const dot2 = document.createElement("span");
	const dot3 = document.createElement("span");

	dots.append(dot1, dot2, dot3);

	container.classList.add("slideshow-container");
	prevBtn.classList.add("prev")
	nextBtn.classList.add("next")
	imageContainer.classList.add("mySlides", "fade");
	imageContainer.append(...slideElements);

	container.append(imageContainer, prevBtn, nextBtn);
	homeDiv.append(container, dots);

}


export { HomeSlideshow };
