var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
const path = require('path');
var cors = require('cors');
var app = express();
var request = require('request');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.disable('etag');

function sendJsonResult(res, obj) {
    setTimeout(() => {
	res.header('Access-Control-Allow-Origin', '*');
        res.setHeader("Content-Type", "application/json");
        res.send(JSON.stringify(obj));
    }, 1000);
}

app.post('/authenticate', (req, res) => {
	var params = req.body;
	//request.post({url:'http://service.com/upload', form: {key:'value'}}, function(err,httpResponse,body){ /* ... */ })
	request.post({
        url: 'http://10.2.230.128/IGTPMODashboard/api/values/login',
        form: params
    }, function (error, response, body) {
		//sendJsonResult(res, response);
    });
	return res.send('Received a POST HTTP method');
});

/* app.post({
    url: '/authenticate'
}, (req, res, next) => {
    var params = req.params;
	console.log("params", params);
    request.post({
        uri: 'http://10.2.230.128/IGTPMODashboard/api/values/login',
        qs: params // Send data which is require
    }, function (error, response, body) {
        console.log(body);
		sendJsonResult(res, body);
    });
}); */
//app.use('/api', router);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/dist/igtPmoDashboard/index.html'));
});

app.use(express.static(__dirname + "/dist/igtPmoDashboard"));
app.listen(process.env.PORT || 8086, function () {
    console.log("Listening!");
});




