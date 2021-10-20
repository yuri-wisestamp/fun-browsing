let http = require('http');

const COLOR = '#1122cc'
http.createServer(function (req, res) {
	const headers = {
		'Access-Control-Allow-Origin': '*',
		"Access-Control-Allow-Credentials": "true",
		'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
		"Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
    };
	res.writeHead(200, headers);

	if(req.method === 'POST') {
		let body = '';
		req.on('data', function(chunk) {
			body += chunk;
		});
		req.on('end', function() {
			console.log(body);
		});


		res.write("I noted everything"); //write a response to the client
	}
	else if (req.method === "GET") {
		res.write(COLOR);
	}

	res.end(); //end the response
}).listen(12322); //the server object listens on port 8080