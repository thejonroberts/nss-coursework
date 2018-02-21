'use strict';

let $ = require('jquery');
let Handlebars = require('hbsfy/runtime');

let test = "What is Joes doing?";
console.log('test', test);

Handlebars.registerPartial( "nav", require('../templates/partials/header.hbs') );

let testTemplate = require('../templates/test.hbs');
let solarSystemTemplate = require('../templates/solarSystem.hbs');

Handlebars.registerHelper("add", function() {
	return 2 + 2;
});

let solarSystemData = {
	planets: [
		{
			type: "rocky",
			name: "Mercury"
		},
		{
			type: "rocky",
			name: "Earth"
		},
		{
			type: "gassy",
			name: "Saturn"
		}
	]
};

$(".output").append( testTemplate() );
$(".output").append( solarSystemTemplate(solarSystemData) );