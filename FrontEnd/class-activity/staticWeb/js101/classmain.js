var oneSecond = 1000;
var oneMinute = oneSecond * 60;
var oneHour = oneMinute * 60;
var oneDay = oneHour * 24;
var oneYear = oneDay * 365;
var myAge = 35;

//how many hours in a year?
var yearHours = oneYear / oneHour;
console.log('one year in hours', yearHours);

//how many minutes are in a decade?
var decadeMinutes = oneYear * myAge / oneSecond;

//how many seconds old am I?
var ageSeconds = oneYear * myAge / oneSecond;
console.log('my age in seconds', ageSeconds);

var num = 34;
if (myAge > num) {
	console.log("I'm wise!!");
} else {
	console.log("I'm green", );
}