console.log('First line in JS file ', Date.now());

let myRequest = new XMLHttpRequest();

function executeThisIfXHRFails() {
	console.log('An error occured while transferrring the data');
}

function executeThisAfterFileIsLoaded() {
	console.log('myRequest', myRequest);  //these two lines are the same.  myRequest is the event.target
	console.log('event.target', event.target);
	var data = JSON.parse(event.target.responseText);  //parse the returned info into js object
	console.log('data', data);
	outputSongs(data.songs);
}

//set up event listeners for compeeted request and aborted request
myRequest.addEventListener("load", executeThisAfterFileIsLoaded);
myRequest.addEventListener("error", executeThisIfXHRFails);

//GET, POST, PUT, DELETE, PATCH - main methods (http verb) for xmr
//tell it which http ver to use
myRequest.open("GET", "songs.json");
//go get it, boy!
myRequest.send();

//DOM manipulation stuff
function outputSongs(songsArray) {
	let songList = document.getElementById("songList");
	songsArray.forEach(function(song) {
		songList.innerHTML += `<h2>${song.title}</h2>`;
	});
}

console.log('Last line in JS File', Date.now());




