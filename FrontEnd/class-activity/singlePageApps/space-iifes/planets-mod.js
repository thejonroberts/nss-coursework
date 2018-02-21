{
	let planetsArr = [];
	let dwarfplanets = [];
	let planetsLandedOn = 0;

	planetsArr.push("mercury", "Venus", "earth", "MArs", "jupiter", "saturn", "uranus", "Neptune");

	let planets = Object.create(null);  //empty object with no prototypes.

	planets.setPlanetsLandedOn = function(count) {
		if(count < 0 || count > planetsArr.length) {
		throw `I don't thinks so bud, there are only ${planetsArr.length} planets.`
		} else {
			planetsLandedOn = count;
			}
	}
	planets.lowercasePlanets = function() {
		// TODO loop through the planets and use .toLowerCase()
		planetsArr.forEach(function(planet) {
		planet.toLowerCase();
		})
	};
	planets.addDwarfPlanet = function(planetoid) {
		dwarfPlanets.push(planetoid);
	};

	planets.getPlanets = function() {
		return planetsArr;
	}
	// define a new property on SolarSystem and assign it the value of the new planets object:
	// window is the global object!!
	window.SolarSystem = window.SolarSystem || {};
	SolarSystem.Planets = planets;
}



