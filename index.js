var express = require('express');
var app = express();
var	cors = require('cors');
var fs = require('fs');

// var keysArray = [];

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.use(cors());

//Helper functions
// function readLines() {
//  	var input = fs.createReadStream('keys.txt');
//   	var remaining = '';
//   	var localKeysArray = []
//   	input.on('data', function(data) {
//     	remaining += data;
//     	var index = remaining.indexOf('\n');
//     	while (index > -1) {
//       		var line = remaining.substring(0, index);
//       		remaining = remaining.substring(index + 1);
//       		localKeysArray.push(line);
//       		index = remaining.indexOf('\n');
//     	}

//     	return localKeysArray;
//   	});
// }

//Basic routing below

//Home route
app.get('/', function(request, response) {
	response.send("Hello World");
});


//finally, wildcard to catch anyting else that people might want (that might be invalid)
app.get('*', function(request, response) {
	response.status(400).send({ error : "Hey, that's not a valid path. Please check your GET request and try again." }); //helpful! AREA 51
		// next();  //get us out of here 
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});

