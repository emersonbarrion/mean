var http = require("http"),
    mongojs = require("mongojs");

var uri = "mongodb://localhost:27017/hbfc",
    db = mongojs.connect(uri, ["players"]);

function requestHandler(request, response) {
	response.writeHead(200, {"Content-Type": "text/html"});
	db.players.find({"name": "emerson"}, function(err, records) {
		if(err) {
		    console.log("There was an error executing the database query.");
		    response.end();
		    return;
		}

		var html = '<h2>Vehicles with a red finish</h2>',
		    i = records.length;

		while(i--) {
		    html += '<p><b>Name:</b> ' 
		         + records[i].name 
		         + ' <br /><b>Number of wheels:</b> ' 
		         + records[i].position 
		         + '<br /><b>Color: </b>' 
		         + records[i].team;
		}

		response.write(html);
		response.end();
	});
}

var server = http.createServer(requestHandler);

server.listen(3000);