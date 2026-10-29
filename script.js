const addbutton = document.getElementById("addplant-btn");
const modal = document.getElementById("Plantformmodal");
addbutton.addEventListener("click", () => {
	modal.style.display = "block";
});
const closeButton = document.getElementById("close-btn");
closeButton.addEventListener("click", () => {
	modal.style.display = "none";
});
const form = document.getElementById("plantform");
form.addEventListener("submit", (e) => {
	e.preventDefault();
	const plantcard = document.createElement("div");
	const heading = document.createElement("h3");
	heading.textContent = document.getElementById("plant-name").value;
	plantcard.appendChild(heading);
	[
		document.getElementById("plant-species").value,
		document.getElementById("plant-location").value,
		document.getElementById("water-frequency").value,
	].forEach((value) => {
		const detail = document.createElement("p");
		detail.textContent = value;
		plantcard.appendChild(detail);
	});
	document.getElementById("plant-container").appendChild(plantcard)
	form.reset();
	modal.style.display = "block";
});
