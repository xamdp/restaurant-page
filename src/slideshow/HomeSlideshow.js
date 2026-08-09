
import { slides } from "./slides.js";
import { imageLoader } from "./imageLoader.js";

function HomeSlideshow() {
	let currentIndex = 0;
	const slideBoxes = [];
	const homeDiv = document.querySelector("#home-div");

	const container = document.createElement("div");
	container.classList.add("slideshow-container");

	// const slideElements = slides.map(s => imageLoader(s.src, s.alt))
	slides.forEach(slide => {
		const slideBox = document.createElement("div")
		slideBox.classList.add("mySlides", "fade");

		const img = imageLoader(slide.src, slide.alt);
		slideBox.append(img)
		container.append(slideBox);
		slideBoxes.push(slideBox);
	})

	const prevBtn = document.createElement("a");
	const nextBtn = document.createElement("a");
	prevBtn.classList.add("prev")
	nextBtn.classList.add("next")
	prevBtn.textContent = "\u276E"
	nextBtn.textContent = "\u276F"


	container.append(prevBtn, nextBtn);
	homeDiv.append(container);

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
		currentIndex = (currentIndex - 1) % slides.length;
		showSlide(currentIndex);
	})

}


export { HomeSlideshow };
