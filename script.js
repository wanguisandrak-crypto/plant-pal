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
	const plantcard = document.createElement("div");
	plantcard.className = "plant-card";
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
	plantContainer.appendChild(plantcard);
	document.getElementById("empty-state").remove();
	form.reset();
	modal.classList.add("hidden");
});
