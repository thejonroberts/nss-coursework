//class activity 6-13 - array methods

let colors = ["red", "blue", "green", "yellow", "orange", "teal"];

let colorStrings = [];

colors.forEach(function (item) {
	colorStrings.push('I like the color ' + item);	
});

console.log('new array', colorStrings);

//map is like forEach but maps to new array

let reversedColors = colors.map(function(item) {
	// return 'I like the color ' + item;
	return item.split("").reverse().join("");
 })//.reverse(); //-- could chain the methods as long as result is still an array.
;
// //behaves same as for loop with push.
console.log('new array with map', reversedColors);

let fourLetters = colors.filter(function (item) {
	return item.length === 4 || item.length === 5;
});
console.log('new array with filter', fourLetters);

let numbers = [51, 45, 2, 99, 3];

let sum = numbers.reduce( function(prev, curr) {
	console.log('currentValue', prev + curr );
	return prev + curr;
});

console.log('sum', sum);




















