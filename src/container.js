
function Container() {
	const header = document.querySelector(".jolly-header")
	const wrapper = document.querySelector(".content-footer-wrapper")
	const container = document.createElement("div");
	container.className = "container"

	container.append(wrapper)
	document.body.append(container);

}

export { Container };
