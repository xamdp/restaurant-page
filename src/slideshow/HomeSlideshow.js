
import { slides } from "./slides.js";
import { imageLoader } from "./imageLoader.js";

function HomeSlideshow() {
	let currentIndex = 0;
	const slideBoxes = [];
	const homeDiv = document.querySelector("#home-div");

	const container = document.createElement("div");
	container.classList.add("slideshow-container");

	slides.forEach(slide => {
		const slideBox = document.createElement("div")
		slideBox.classList.add("mySlides", "fade");

		const img = imageLoader(slide.src, slide.alt);
		slideBox.append(img)
		container.append(slideBox);
		slideBoxes.push(slideBox);
	})

	// idk why i used a tags here
	const prevBtn = document.createElement("a");
	const nextBtn = document.createElement("a");
	prevBtn.classList.add("prev")
	nextBtn.classList.add("next")
	prevBtn.textContent = "\u276E"
	nextBtn.textContent = "\u276F"


	container.append(prevBtn, nextBtn);
	homeDiv.prepend(container);

	const firstChild = document.querySelector(".slideshow-container > :first-child");
	firstChild.classList.add("active");

	function showSlide(i) {
		slideBoxes.forEach((box, idx) => {
			box.classList.toggle('active', idx === i)
		})
	}

	nextBtn.addEventListener("click", () => {
		currentIndex = (currentIndex + 1) % slides.length;
		showSlide(currentIndex);
	})

	prevBtn.addEventListener("click", () => {
		currentIndex = (currentIndex - 1 + slides.length) % slides.length;
		showSlide(currentIndex);
	})

}

export { HomeSlideshow };
