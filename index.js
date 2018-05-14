const conf = require('config');
const express = require('express');
const fetch = require('node-fetch');

const app = express();
console.log(Object.assign({port: 5000}, conf));
app.enable('strict routing');
app.enable('case sensitive routing');

app.use(express.static('public'));

app.set('view engine', 'pug');
app.set('views', conf.dir.views);

app.get('/', async (req, res, next) => {
	const kanjiSecondRes = await fetch('https://www.wanikani.com/api/user/d77c617eaeddcf1b190183394563b66f/kanji/2');
	const kanjiSecond = await kanjiSecondRes.json();

	let kanjis = [];
	for(let kanji of kanjiSecond.requested_information) {
		kanjis.push({
			name: kanji.character,
			kana: kanji[kanji.important_reading],
			english: kanji.meaning
		});
	}

	res.render('index', {kanjis})
});

const server = app.listen(conf.port, err => {
	if(err) {
		throw err;
	}

	console.log(`Server is running on port ${conf.port}`);
});

module.exports = server;