var http = require('http');
var express = require('express');
var api = require('instagram-node').instagram();
var app = express();


// 1. Direct the user to the authorization URL
/*
app.get('/', function(req, res) {
	res.redirect('https://api.instagram.com/oauth/authorize/?client_id=49a4ad3a068146e5948e1bd499eb4d8f&redirect_uri=http://localhost:9000/handleAuth&response_type=code');
});


//client_id: '49a4ad3a068146e5948e1bd499eb4d8f',
//	client_secret: 'a777fe9ac28a493bbffc9f266a04bf91'


// 2. Set the application scope for asking user access


exports.authorize_user = function(req, res) {
	res.redirect(api.get_authorization_url(redirect_uri, { scope : ['basic', 'likes']}));
};


var redirect_uri = 'http://localhost:9000/handleAuth';
/* 
exports.authorize_user = function(req, res) {
  res.redirect(api.get_authorization_url(redirect_uri));
};
*/

//app.listen(9400);

api.use({
	client_id: '49a4ad3a068146e5948e1bd499eb4d8f',
	client_secret: 'a777fe9ac28a493bbffc9f266a04bf91' 
});

var redirect_uri = 'http://localhost:9000/handleAuth';



app.get('/', function(req,res){
	res.redirect(api.get_authorization_url(redirect_uri, { scope: ['basic', 'likes']}));
});


app.get('/handleAuth', function(req, res) {
	 console.log('handleAuth');
	// if a user authorizes the application
	// then collect the code
	if (req == redirect_uri){

		var code = req.query.code;

	} else {

		res.send('Error!');
	}
	//console.log(code);

	//console.log(req);
	//console.log(res);
});
/*
app.get('/handleAuth', function(){

});
*/

// Where should I post client id and client secret?

app.post('/', function(code, redirect_uri, function(err, result) {

	if (err) {
		console.log("Error!");
		res.send("Did not work");
	} else {
		console.log('Yippee! Access token is' + result.access_token);
		res.send("It worked");
	}

});

app.listen(9000);