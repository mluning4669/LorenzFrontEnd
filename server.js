var express = require("express");
var request = require("request");
var app = express();
var a = - 2.666667, b = -10 , c = 28
var options = {
	url: "http://rlorenz.azurewebsites.net/api/Lorenz/" + a + "/" + b + "/" + c + "/",
	method: "GET",
	headers: {
		'Accept' : 'application/json',
		'Accept-Charset' : 'utf-8',
		'encoding' : 'gzip'
	}
}

app.get("/Lorenz/:a/:b/:c",function(req,res){
	a = req.params.a;
	b = req.params.b;
	c = req.params.c;
	request.get(options,function(error,response,body){
		var base64 = JSON.parse(response.body);
		res.end(response.body);
	})
})

app.get("/Lorenz",function(req,res){
	request.get(options,function(error,response,body){
		var base64 = JSON.parse(response.body);
		res.end(response.body);
	})
})

var server = app.listen(8081, function(){
	var port = server.address().port;

	console.log("Now listening at http://localhost:%s",port);
})
