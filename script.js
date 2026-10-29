const plants =JSON.parse(localStorage.getItem('plants')) 
const addButton = document.getElementById("addplant-btn");
const modal = document.getElementById("plantform-modal");
const closeButton = document.getElementById("close-btn");
const form = document.getElementById("plantform");
const plantContainer = document.getElementById("plant-container");

addButton.addEventListener("click", () => {
	modal.classList.remove("hidden");
});

closeButton.addEventListener("click", () => {
	modal.classList.add("hidden");
});

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const newPLANT = {
		name: document.getElementById("plant-name").value,
		species: document.getElementById("plant-species").value,
		location: document.getElementById("plant-location").value,
		waterFrequency: document.getElementById("water-frequency").value,
	};
	const plantcard = document.createElement("div");
	plantcard.className = "plant-card";
	const heading = document.createElement("h3");
	heading.textContent = newPLANT.name;
	plantcard.appendChild(heading);
	[newPLANT.species, newPLANT.location, newPLANT.waterFrequency].forEach((value) => {
		const detail = document.createElement("p");
		detail.textContent = value;
		plantcard.appendChild(detail);
	});
	plantContainer.appendChild(plantcard);
	form.reset();
	modal.classList.add("hidden");
});
