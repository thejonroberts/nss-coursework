console.log('hello');

let articleEl = document.getElementsByClassName("article-section");
let ouputDiv = document.getElementById("output");

function handleSectionClick() {
	console.log(event);
	let elementText = event.target.innerHTML;
	ouputDiv.innerHTML = `<p class="msg">You clicked on the ${elementText} section</p>`;
}

articleEl[0].addEventListener("click", handleSectionClick);
	    														 //ASYNCHRONOUS BEHAVIOR - non-blocking code
																	//function called 'callback function'
function sayYourName(name) {
	console.log('May name is ' + name)
}

let piggie = document.getElementById("guinea-pig");

document.getElementById("add-color").addEventListener("click", function() {
	// console.log('piggle', piggie.classList);
	piggie.classList.toggle("blue");
})

document.getElementById("make-large").addEventListener("click", function() {
	// console.log('piggle', piggie.classList);
	piggie.classList.toggle("large");
})

document.getElementById("add-border").addEventListener("click", function() {
	// console.log('piggle', piggie.classList);
	piggie.classList.toggle("border");
})

document.getElementById("add-rounding").addEventListener("click", function() {
	// console.log('piggle', piggie.classList);
	piggie.classList.toggle("round");
})


// console.log('still going');
//cannot add listener to something that is not in the dom yet
//		-can use bubbling to watch the part of DOM that it will be in, though.
//------
//
