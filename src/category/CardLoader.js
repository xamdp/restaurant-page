
// accepts meal image and meal name
function CardLoader(src, text) {
	const cardDiv = document.createElement("div")
	cardDiv.className = "card-div"
	const imgWrapper = document.createElement("div")
	imgWrapper.className = "img-wrapper"

	const img = document.createElement("img")
	img.src = src
	imgWrapper.append(img)

	const mealName = document.createElement("p");
	mealName.textContent = text

	const viewBtn = document.createElement('button')
	viewBtn.className = "view-btn"
	viewBtn.textContent = "View Meal"

	const orderBtn = document.createElement('button')
	orderBtn.className = "order-btn"
	orderBtn.textContent = "Order Now"

	const btnContainer = document.createElement("div")
	btnContainer.className = "meal-btns-container"
	btnContainer.append(viewBtn, orderBtn)

	cardDiv.append(imgWrapper, mealName, btnContainer)

	return cardDiv;
}

export { CardLoader };
