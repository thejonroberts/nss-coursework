
var SolarSystem = (function(oldSolarSystem) {
	let spacecraft = [
		{name: "Apollo 2.5", year: "1968"}
	];

	let ships = Object.create(null);

	ships.wreckSpacecraft = function() {
		spacecraft.pop();
	};

	ships.printSpacecraft = function() {
		spacecraft.forEach(function(craft) {
			document.getElementById("spacecraft").innerHTML += `<h3>${craft.name} was first launched in ${craft.year}</h3>`;
		});
	};

	ships.getSpacecraft = function() {
		return spacecraft;
	};

	ships.addSpacecraft = function(craft) {
		spacecraft.push(craft);
	};

	// define a new property on SolarSystem and assign it the value of the new ships object:
	oldSolarSystem.Ships = ships;

	return oldSolarSystem;

}(SolarSystem || {}));