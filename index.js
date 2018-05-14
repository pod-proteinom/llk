const conf = require('config');
const express = require('express');
const fetch = require('node-fetch');

const app = express();

app.enable('strict routing');
app.enable('case sensitive routing');

app.use(express.static('public'));

app.set('view engine', 'pug');
app.set('views', conf.dir.views);

app.get('/', async (req, res, next) => {
	const kanjiSecond = await fetch('https://www.wanikani.com/api/user/d77c617eaeddcf1b190183394563b66f/kanji/2');
	const kanjiSecondJson = await kanjiSecond.json();

	console.log(kanjiSecondJson);
	for(let kanji in kanjiSecondJson) {
		
	}

	res.render('index', {})
});

const server = app.listen(conf.port, err => {
	if(err) {
		throw err;
	}

	console.log(`Server is running on port ${conf.port}`);
});

module.exports = server;