import { CardLoader } from "./CardLoader.js";
import { meals } from "../category/categories.js"

function ViewMenu() {
	const menuDiv = document.querySelector("#menu-div")

	const categoryTitleDiv = document.createElement("div")
	categoryTitleDiv.className = "caterory-title-div"

	const categoryHeading = document.createElement("h2");
	categoryHeading.textContent = "Breakfast"
	categoryHeading.className = "category-heading"
	categoryTitleDiv.append(categoryHeading)

	const wrapper = document.createElement("div")
	wrapper.className = "wrapper"
	wrapper.append(categoryTitleDiv)

	const cardsWrapper = document.createElement("div")
	cardsWrapper.className = "cards-wrapper"

	meals.forEach((meal) => {
		const card = CardLoader(meal.img, meal.text)
		cardsWrapper.append(card)
	})

	wrapper.append(cardsWrapper)
	menuDiv.append(wrapper)
}

export { ViewMenu };
