// let globalVar = 500;

// iife - immediately invoked function expression
// (function(num) {						//no name (bc you can't invoke it later, anyway)
// 	globalVar += num;
// }(globalVar));								//argument to pass into at end

// console.log('global var', globalVar);


// let globalVar = 500;

// iife - immediately invoked function expression
 		//more secure, can't manipulate through console. 

var globalThing = (function() {						//var on purpose (can redefine later)
	let name = "Fred";
	return { 
		title: "GlobalThing",
		sayMyName: function() {						//method in object
			return name;							//getters and setters.  two such.
			},
		printAName: function() {
			return name + "Smith";
			}
	};
}());	

// var globalThing = (function (thing) {				//augmenting
// 	thing.newProp = "Now I'm Lost";
// 	return thing;		
// }(globalThing));

console.log('globalThing', globalThing);


















