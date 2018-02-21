console.log('hello');

let myArr = ["Hello", "Howdy", "Bonjour", "Sup?"];
let phraseDOM = document.getElementById("greeting");

myArr.forEach( function(greeting, index) {
	let phraseString = `<div id="phrase-${index + 1}"><h3>${greeting}, world!</h3></div>`;
	let phraseDiv = document.createElement("div");
	// phraseDiv.setAttribute("id", `phrase-${index + 1}--wrapper`);
	phraseDiv.innerHTML = phraseString;
	phraseDOM.appendChild(phraseDiv);
	document.getElementById(`phrase-${index + 1}`).addEventListener("click", function (){
		event.target.classList.add("blue");
	});
});

//forEach vs for loop example:
// myArr.forEach( function(itemFromArray,) {
// 	console.log('itemFromArray', itemFromArray);
// });

// for (var i = 0; i < myArr.length; i++) {
// 	console.log(`myArr[${i}]`, myArr[i]);
// }
// 
// you can define function before forEach call:
// function loopIt(arrayItem) {
// 		console.log(arrayItem);
// }
// myArr.forEach(loopIt);

