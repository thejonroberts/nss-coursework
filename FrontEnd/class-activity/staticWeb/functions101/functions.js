// // console.log('howdy', );
// // 
// // HOISTING:  functions are hoisted fully. var are hoisted but not defined. let and const do not get hoisted.

// function sayHello(name) {
// 	console.log(`Hello, ${name}`);
// }

// sayHello("Greta");
// sayHello("Fred");

// let myArr = ["green", 2, true];

// //FUNCTION EXPRESSION
// var printBackwardsArray = function() {
// 	let hidden = "Try to read this";
// 	console.log("backwards", myArr.reverse());
// }
// //FUNCTION DECLARATION
// // function printBackwardsArray() {
// // 	let hidden = "Try to read this";
// // 	console.log("backwards", myArr.reverse());
// // }

// // console.log('hidden', hidden);

// printBackwardsArray();

// function sayHi() {
// 	console.log('Hi');
// }

// sayHi();

// let confusion = "Hoisting is Weird.";
// console.log('confusion', confusion);

//-------------------
// function addStuff(num1, num2) {
// 	let sum = num1 + num2;
// 	return sum;
// }

// let mySum1 = addStuff;
// let numberUno = 4;
// let numberDos = 5;


// STORE THE RESULT OF A FUNCTION IN A VARIABLE
// let mySum = addStuff(numberUno , numberDos);

// console.log('mySum', mySum);

//-----------FUNCTIONS IN FUNCTIONS - FUNCTIONCEPTION?

function addStuff(num1, num2) {
	let sum = num1 + num2;
	return sum;
}

function divideStuff(num1, num2) {
	let quotient  =  num1 / num2;
	return quotient;
}

function doMath(numnum1, numnum2, func) {
	return func(numnum1, numnum2)
}

let number1 = 6;
let number2 = 3;
let myCalc = doMath(number1 , number2, divideStuff);

console.log('myCalc', myCalc);

//-----
function doMoreMath(nums, func) {
	let result = func(nums[0], nums[2])
	return result
}

myCalc = doMoreMath([3,4,6,10,456], divideStuff);

console.log('myCalc', myCalc);

//--------

function makeString(song) {
	return `${song.title} is my totes fave track by ${song.artist}`;
}

let myFaveSong= {
	title: "24K Magic",
	artist: "Bruno Mars"
}

let songString = makeString(myFaveSong);
console.log('not', songString);


//----
let songBuilder = {
	makeString: function() {
		return "I made a song!"
	}
}
function createSong(title, artist) {
	let newSong = Object.create(songBuilder);  //songBuilder -> null to not link/prototype:  don't know why you would do this?
	newSong.title = title;
	newSong.artist = artist;
	return newSong;
}

let myNewSong = createSong("Don't Stop Believin'", "Journey")
console.log('overplayed song', myNewSong);




















