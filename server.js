var http = require('http');
var express = require('express');
var api = require('instagram-node').instagram();
var app = express();
var redirect_uri = 'http://localhost:9000/handleauth';
var querystring = require('querystring');
var postcode = require('postcode');

api.use({
	client_id: '49a4ad3a068146e5948e1bd499eb4d8f',
	client_secret: 'a777fe9ac28a493bbffc9f266a04bf91' 
});


app.get('/authorize_user', function(req,res){
	res.redirect(api.get_authorization_url(redirect_uri, { scope: ['basic', 'likes']}));
});


app.get('/handleauth', function(req, res) {
	 
	 
	 console.log('handleauth');
	// if a user authorizes the application
	// then collect the code
	if (req.query.error) {
		var error = req.query.error;
	} else {
		var code = req.query.code;
	}
	
});

/*
function postCode(code, res){

	console.log('Hello');

    var postData = querystring.stringify({
    	'client_id' : '49a4ad3a068146e5948e1bd499eb4d8f',
    	'client_secret' : 'a777fe9ac28a493bbffc9f266a04bf91',
    	'grant_type' : 'authorization_code',
    	'redirect_uri' : 'http://localhost:9000/handleAuth',
    	'code' : code
    });
};

var getAccessToken = postCode {

    res.redirect('http://localhost:9000/about_page')

};


/*
app.post('https://api.instagram.com/oauth/access_token', function(req,res) {

	if (err) {
		console.log("Error!");
		res.send("Did not work");
	} else {
		console.log('Yippee! Access token is' + result.access_token);
		res.send("It worked");
	}

});


/*
app.post('/', function(code, redirect_uri, function(err, result) {

	if (err) {
		console.log("Error!");
		res.send("Did not work");
	} else {
		console.log('Yippee! Access token is' + result.access_token);
		res.send("It worked");
	}

});

*/

app.listen(9000);