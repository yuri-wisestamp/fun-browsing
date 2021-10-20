let http = require('http');

http.createServer(function (req, res) {
	const headers = {
		'Access-Control-Allow-Origin': '*',
		"Access-Control-Allow-Credentials": "true",
		'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
		"Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
    };

	let body = '';
	req.on('data', function(chunk) {
		body += chunk;
	});
    req.on('end', function() {
        console.log(body);
    });

	res.writeHead(200, headers);
	res.write("I noted everything"); //write a response to the client
	res.end(); //end the response
}).listen(12322); //the server object listens on port 8080