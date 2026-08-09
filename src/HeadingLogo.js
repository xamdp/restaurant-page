import Logo from "./asset/bee-svgrepo-com.svg";

function HeadingLogo() {
	const header = document.querySelector("header");
	const div = document.createElement("div");
	const img = document.createElement("img");
	const p = document.createElement("p");

	div.classList.add("logo-heading");
	img.src = Logo;
	img.classList.add("resto-img");
	p.classList.add("title")
	p.textContent = "JollyBae";

	div.append(p, img);
	header.prepend(div);
	document.querySelector(".container").append(header);
}

export { HeadingLogo };

