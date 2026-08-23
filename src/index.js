
import "./styles.css";
import { Container } from "./container.js";
import { Home } from "./home.js"
import { HeadingLogo } from "./HeadingLogo.js";
import { HomeSlideshow } from "./slideshow/HomeSlideshow.js";
import { FeatureSlideshow } from "./slideshow/FeatureSlideshow.js";
import { ViewMenu } from "./category/ViewMenu.js";
import { Menu } from "./menu.js";
import { About } from "./about.js";
import { Footer } from "./footer.js";
import { StoreInfo } from "./store/StoreInfo.js";

class Restaurant {
	constructor() {
		this.contentDiv = document.querySelector("#content");
		this.homeBtn = document.querySelector("#home-btn");
		this.menuBtn = document.querySelector("#menu-btn");
		this.aboutBtn = document.querySelector("#about-btn");
	}

	initListeners() {
		this.homeBtn.addEventListener('click', this.loadThisPage);
		this.menuBtn.addEventListener('click', this.loadThisPage);
		this.aboutBtn.addEventListener('click', this.loadThisPage);
	}

	initialPageLoad() {
		Container();
		HeadingLogo();
		Home();
		HomeSlideshow();
		FeatureSlideshow();
		Footer();
	}

	loadThisPage = (event) => {
		let id = event.target.id;
		if (id === "home-btn") {
			this.contentDiv.replaceChildren();
			Home();
			HomeSlideshow();
			FeatureSlideshow();
		}
		if (id === "menu-btn") {
			this.contentDiv.replaceChildren();
			Menu();
			ViewMenu();
		}
		if (id === "about-btn") {
			this.contentDiv.replaceChildren();
			About();
			StoreInfo();
		}
	}

}

const resto = new Restaurant();
resto.initListeners();
resto.initialPageLoad();



