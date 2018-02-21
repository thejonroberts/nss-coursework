'use strict';

console.log('hello ng');

const myApp = angular.module('funWithStuff', ['ngRoute']);

myApp.config( ($routeProvider) => {
	$routeProvider
	.when('/', {
		templateUrl: 'partials/song-list.html', //relative to index.html
		controller: 'SongController'
	})
	.when('/todo', {
		templateUrl: 'partials/todo-list.html', //relative to index.html
		controller: 'TodoController'
	})
	.otherwise('/');
});













myApp.controller('MessageController', function($scope) {
	$scope.message = "Hello, Worlds.";
});

myApp.controller('CountController', function ($scope) {
	$scope.count = () => 12;
});

myApp.controller('NameController', function ($scope) {
	$scope.name = "Broomhilda";
});

myApp.controller('SecondNameController', function ($scope) {
	$scope.name = "Larry";
	$scope.wow = "Parent controller gave me this";
});

myApp.controller('TodoController', function ($scope) {
	$scope.todos = [
		{name: "Master HTML/CSS/JS", completed: true},
		{name: "Learn AngluarJS", completed: false},
		{name: "Get started with ExpressJS", completed: false},
		{name: "Be Awesome!", completed: true}
	];
});

myApp.controller('ScoreController', function ($scope, score) {
	//do something that requires score value
	$scope.scoreCount = score.points;
});

//simple provider
myApp.value( 'score', {points: 10} );

//Another provider, also makes dataa available to our app
//doesn't need scope - and shouldn't have it - not interacting with DOM
// $q - promise - $http - xml request/ajax
myApp.factory('SongFactory', function ($q, $http) {

	function getSongs() {
		return $q( (resolve, reject) => {
			$http.get('./songs.json')
				.then( (songs) => {
					resolve(songs);
				})
				.catch( (err) => {
					reject(err);
				});
		});
	}

	return { getSongs };

});

myApp.controller('SongController', function ($scope, SongFactory) {
	SongFactory.getSongs()
	.then( (songsData) => {
		// console.log('songsData', songsData);
		$scope.songList = songsData.data.songs;
		// $scope.songSearch = "Sharp Dressed Man"; //give it a default value, updates on user entry
	});
});






