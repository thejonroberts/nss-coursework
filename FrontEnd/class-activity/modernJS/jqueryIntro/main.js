console.log('hello');

var vanillaStuff = document.getElementById("list-of-stuff");
vanillaStuff.classList.add("myList");
console.log('vanillaStuffDOM', vanillaStuff);

var jQStuff = $("#list-of-stuff");
jQStuff.addClass("myList");
jQStuff.append("<li>Hamburgers</li>");
jQStuff.prepend("<li>Hamburgers</li>");
console.log('jQStuff', jQStuff);


$(document).on("click", "button[id^=button-]", function() {
	$(this).parents(".container").remove();
});

/////////
//AJAX //
/////////

//Old way:
// var myRequest = new XMLHttpRequest();
// myRequest.addEventListener("load", function() {
// 	var data = JSON.parse(this.resonseText);
// 	console.log('data', data);
// })
// myRequest.open("GET", "songs.json");
// myRequest.send();

$.ajax({
	url: "songs.json"
})
	.done( function(data) {
		console.log('data');
	})
	.fail(function(error) {
		console.log('error.statusText', error.statusText);
	});