let colors = ["red", "blue", "green", "yellow", "orange", "teal"];

// let colorStrings = []
// colors.forEach(function(item) {
//   colorStrings.push("I like the color" + " " + item)
// });
// console.log("new array", colorStrings);

let reversedColors = colors.map( function(item) {
  return item.split("").reverse().join("");
})

// with a for loop
// var reversedColors = [];
// for (var i = 0; i < colors.length; i++) {
//   var reversed = colors[i].split("").reverse().join("");
//   reversedColors.push(reversed);
// }
console.log("new array with map", reversedColors);

let fourLetters = colors.filter( function(color) {
  return color.length === 4;
});
console.log("four letters", fourLetters);

let numbers = [51, 45, 2, 90, 3];

let sum = numbers.reduce( function(prev, curr) {
  console.log("current val", prev + curr );
  return prev + curr;
});

console.log("sum", sum);


// exercise
var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

// Sort the numbers in descending order (10, 9, 8, 7, etc).
// Remove any integers greater than 19.
// Multiply each remaining number by 1.5 and then substract 1.
// Then output (either in the DOM or the console) the sum of all the resulting numbers.