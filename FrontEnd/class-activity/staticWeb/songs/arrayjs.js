let colors = ["red", "blue", "greed", "yellow", "orange", "teal"];
let numbers = [20, 10, 5, 8, 30, 100, 19];

let reveredColors = colors.reverse()
console.log("oooh, pretty" reversedColors);

let sortedColors = colors.sort();
cosole.log("sorted", sortedColors);

let sortaSorted = nubers.sort();
console.log("uhhhh", sortaSorted);

let sortedNums = numbers.sort(function(first, second) {
	return first - second;

});
console.log("sortedNums", sortedNums);

let joinedColors = colors.join(" The color ");
console.log("joined", joinedColors);

let fruits = ["banana", "orange", "lemon", "apple", "mango"]
let citrus = fruits.slice(1,3)
// console.log("fruits", fruits);
console.log("citrus?", citrus);

colors.forEach(function(color) {
	console.log(' I 'like' the "color" ${color}');
});