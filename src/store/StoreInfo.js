import TelephoneIcon from "../asset/telephone-svgrepo-com.svg"
import MailIcon from "../asset/mail-svgrepo-com.svg"
import { Menu } from "../menu.js"
import { ViewMenu } from "../category/ViewMenu.js"


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
	btn1.className = "directions-btn"
	const btn2 = document.createElement("button")
	btn2.textContent = "View Menu"
	btn2.className = "view-menu-btn"

	buttons.append(btn1, btn2)

	const contactStore = document.createElement("div")
	contactStore.className = "contact-store"

	const contactHeading = document.createElement("h3")
	contactHeading.textContent = "Contact Store"
	contactHeading.className = "contact-heading"

	const tel = document.createElement("div")
	tel.className = "telephone"
	const telephone = document.createElement("p")
	const telIcon = document.createElement("img")
	telIcon.src = TelephoneIcon
	telephone.textContent = "09123456745"
	tel.append(telIcon, telephone)

	const mail = document.createElement("div")
	mail.className = "mail"
	const email = document.createElement("p")
	const mailIcon = document.createElement("img")
	mailIcon.src = MailIcon
	email.textContent = "chickenandspag@jollybae.com.ph"
	mail.append(mailIcon, email)

	const locationStore = document.createElement("div")
	locationStore.className = "location-store"
	const locationHeading = document.createElement("h3")
	locationHeading.className = "location-heading"
	locationHeading.textContent = "Location"
	const location = document.createElement("p")
	location.textContent = "B23 L19 Purok 8 Barangay Maharlika, Ermita, Manila"
	locationStore.append(locationHeading, location)

	const openingHoursStore = document.createElement("div")
	openingHoursStore.className = "opening-hours-store"
	const openHeading = document.createElement("div")
	openHeading.className = "open-heading"

	const openingHours = document.createElement("h3")
	openingHours.className = "opening-hours"
	openingHours.textContent = "Opening Hours"

	const openSign = document.createElement("p")
	openSign.className = "open-sign"
	openSign.textContent = "Open"

	openHeading.append(openingHours, openSign)
	openingHoursStore.append(openHeading)

	const sched = document.createElement("div")
	sched.className = "sched"
	const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

	days.forEach((day) => {
		const div = document.createElement("div")
		div.className = "day-sched"
		const whatDay = document.createElement("p")
		const open = document.createElement("p")
		whatDay.textContent = `${day}`
		open.textContent = "Open 24 hours"
		div.append(whatDay, open)
		sched.append(div)
	})

	contactStore.append(contactHeading, tel, mail, locationStore, openingHoursStore, sched)



	infoContainer.append(tags, buttons, contactStore);
	const aboutDiv = document.querySelector("#about-div")
	aboutDiv.append(infoContainer);

	const viewMenuBtn = document.querySelector(".view-menu-btn")
	viewMenuBtn.addEventListener('click', (event) => {
		event.preventDefault();
		document.querySelector("#content").replaceChildren();
		Menu()
		ViewMenu()
	})

}

export { StoreInfo };
