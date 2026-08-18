
function imageLoader(src, alt) {
	const img = document.createElement("img")
	img.src = src;
	img.alt = alt;
	img.style = "width: 100%";
	return img;
}

export { imageLoader };
