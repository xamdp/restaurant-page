import Logo from "./asset/bee-svgrepo-com.svg";
import { Home } from "./home.js";
import { FeatureSlideshow } from "./slideshow/FeatureSlideshow.js";
import { HomeSlideshow } from "./slideshow/HomeSlideshow.js";

function HeadingLogo() {
	const contentDiv = document.querySelector("#content")
	const header = document.querySelector(".jolly-header");
	const logoheadingContainer = document.createElement("a");
	const img = document.createElement("img");
	const p = document.createElement("p");

	logoheadingContainer.className = "logo-heading"
	img.src = Logo;
	img.classList.add("resto-img");
	p.classList.add("title")
	p.textContent = "JollyBae";

	logoheadingContainer.append(p, img);
	header.prepend(logoheadingContainer);
	document.querySelector(".container").append(header);

	logoheadingContainer.addEventListener('click', () => {
		contentDiv.replaceChildren()
		Home()
		HomeSlideshow()
		FeatureSlideshow()
	})
}

export { HeadingLogo };

