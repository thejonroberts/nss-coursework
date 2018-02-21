const song = {
	title: "Private Idaho",
	artist: "The B-52s",
	plays: 120,
	album: "Wild Planet",
	bandMembers: [
	{name:"fred", roles: {vocals: "lead", instriment: null} }
//{"Cindy", 
//{"Ricky", 
//{"keith",
//{"kate"}
]
}

// console.log("fred's vocals", song.bandMembers[0].roles.vocals);
// song.albumCoverColor = "red";
// song = ("the artist", song ["artist"]);
// const record = "album";

// console.log("album?", song[record]);
// console.log(song.makeSongString());

let makeSongString = function() {
	return `"${song.title}" is from the album "${song.album}" by "${song.artist}"`
}

const songCollection {
	b52Song: song
}

console.log('songCollection', songCollection.b52Song);

const member = song.bandMembers[0];
const vocalRole = member.roles.vocals;
if (vocalRole) {
	console.log(`${member.name} was the ${vocalRole} singer on this track`);
} else {
	console.log(`${member.name} did not sing on this track`);
}








