//what I came up with in class:
//----------------------------------------
// get profile info somehow

// (function(nameInput, ageInput, interestInput) {					
// 	let profile = {};
// 	profile.name = nameInput;		//?
// 	profile.age = ageInput;
// 	profile.interests += interestInput;
// 	return { 
// 		profile: "ProfileID",
// 		getProfile: function() {				
// 			return profile;
// 		}
// 	};
// }("Fred Jones", 37, ["puppies", "flowers", "pro wrestling"]));	//?

//here's how we corrected that with Joe.
////return {} is es6 object literal shorthand name: name, used to be necessary
//---------------------------------------------------

var Profile = (function() {
  const name = "Fred Jones";
  const age = 37;
  const likes = ["puppies", "flowers", "pro wrestling"];
  return {
    name, age, likes
  }
}());

var Profile = (function(previousProfile) {
	const possibleDates = ["Barb", "Linda", "Bart"];   //private aspect/interface of our module
	previousProfile.getDates = function () {			//augment existing profile/object
		return possibleDates;
	}
	return previousProfile;								//public aspect is the return
}(Profile));

console.log('profile?', Profile);











