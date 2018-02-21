'use strict';

const express = require('express');
const app = express();

app.set('view engine', 'pug');
// app.set('anything', 'My name is not Larry');

// console.log('locals', app.locals.settings);

const names = ['Larry', 'Moe', 'Curly', 'Shep'];
app.get('/', (req, res, next) => {
	res.render('index', {
		subtitle: 'This came from the js',
		names,
		loggedIn: false,
		url: `${req.url}`
	});
});

app.get('/article', (req, res, next) => {
	res.render('article', {
		subtitle: 'This came from my article data',
		names,
		loggedIn: false,
		url: `${req.url}`
	});
});

app.use(express.static(__dirname + '/public'));

app.listen(3000, () => {
	console.log('listening on port 3000');
});
