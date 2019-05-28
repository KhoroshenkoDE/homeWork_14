var http = require('http');
var fs = require('fs');
var port = 3000;
var request = require('request');
var url = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3&fbclid=IwAR1208FuOXIZu35v9SPj5ZqDXENLT3J5VHKqcO3lgCB3hDdpkNYBjBeJli0"

var app = http.createServer(function (req, res) {
	if (req.url === '/') {
		res.write('Hello World');
		res.end();
	} else if (req.url === '/contact') {
		var file = fs.readFileSync('index.html', 'utf-8');
		res.write(file);
		res.end();
	} else if (req.url === '/about') {
		console.log(req.url);
		res.end();
	} else if (req.url === '/pubinfo') {
		request( url, { json: true }, (err, res, body) => {
			if (err) { return console.log(err); }
			console.log(body.url);
 			console.log(body);
		});
	res.end();
	}
	
});

app.listen(3000, function () {
	console.log('Server at http://localhost:3000');
});





