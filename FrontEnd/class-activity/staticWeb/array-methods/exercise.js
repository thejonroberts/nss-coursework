var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

					// Sort the numbers in descending order (10, 9, 8, 7, etc).
																	// Remove any integers greater than 19.
																											// Multiply each remaining number by 1.5 and then substract 1.
// Then output (either in the DOM or the console) 																											//the sum of all the resulting numbers.
let result = integers.sort(function (a, b) {
		return a - b})
	.reverse()
	.filter( function(item) {
		return item < 20})
	.map( function(item) {
		return (item * 1.5) - 1})
	.reduce( function(prev, curr) {
		return prev + curr;});

console.log('result', result);