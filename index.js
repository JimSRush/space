var express = require('express')
  	cors = require('cors'),
   	app = express(),
   	data = require ('./keys.txt');//we need this!

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.use(cors());

//Basic routing below

//Home route
app.get('/', function(request, response) {
	

	response.send("Hello World")
});


//finally, wildcard to catch anyting else that people might want (that might be invalid)
app.get('*', function(request, response) {
	response.status(400).send({ error : "Hey, that's not a valid path. Please check your GET request and try again." }); //helpful! AREA 51
		next();  //get us out of here 
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
