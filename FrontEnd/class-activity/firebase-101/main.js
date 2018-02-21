  // let config = {
  //   apiKey: "AIzaSyAqGgRMfkTIZNewTNYMIpUvh2xNjBjIS_o",
  //   authDomain: "fir-101-c3dd7.firebaseapp.com",
  //   databaseURL: "https://fir-101-c3dd7.firebaseio.com",
  //   projectId: "fir-101-c3dd7",
  //   storageBucket: "fir-101-c3dd7.appspot.com",
  //   messagingSenderId: "999948411001"
  // };
  // firebase.initializeApp(config);

  console.log('Firebase is hot');

$.ajax({
	url: "https://fir-101-c3dd7.firebaseio.com/songs.json"
}).done( (songs) => {
	console.log('songs from FB', songs);
}).fail( (error) => {
	console.log('boo', error.statusText);
})