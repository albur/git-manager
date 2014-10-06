var express = require('express');
var app = express();
var mock = require('./api/mock');

// Mock API
app.use('/api/1', mock);

/* Enable HTML5 push state */
app.get('/repo/*', function (req, res) {
	res.sendFile(__dirname + '/public/index.html');
});

app.use(express.static(__dirname + '/public'));

var server = app.listen(3002, function () {
	console.log('Listening on port %d', server.address().port);
});