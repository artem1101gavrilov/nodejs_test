var http = require("http"); //подключает http-модуль, который поставляется вместе с Node.js и делает его доступным через переменную http
var url = require("url");

function start(route, handle) {
	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received.");
		
		route(handle, pathname, response);
		
	}
	http.createServer(onRequest).listen(8888);
	console.log("Server has started.");
}

exports.start = start;