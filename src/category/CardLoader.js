
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

	cardDiv.append(imgWrapper, mealName)

	return cardDiv;
}

export { CardLoader };
