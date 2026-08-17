
function StoreInfo() {
	const infoContainer = document.createElement("div")
	infoContainer.className = "info-container"

	const tags = document.createElement("div")
	tags.className = "tags"

	const tag1 = document.createElement("p")
	tag1.textContent = "Dine-in"
	const tag2 = document.createElement("p")
	tag2.textContent = "Delivery"
	const tag3 = document.createElement("p")
	tag3.textContent = "Pickup"
	const tag4 = document.createElement("p")
	tag4.textContent = "24hrs"

	tags.append(tag1, tag2, tag3, tag4)

	const buttons = document.createElement("div")
	buttons.className = "store-btns"

	const btn1 = document.createElement("button")
	btn1.textContent = "Directions"
	const btn2 = document.createElement("button")
	btn2.textContent = "View Menu"

	buttons.append(btn1, btn2)

	infoContainer.append(tags, buttons);
	const aboutDiv = document.querySelector("#about-div")
	aboutDiv.append(infoContainer);
}

export { StoreInfo };
