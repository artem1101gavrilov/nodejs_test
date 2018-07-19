var http = require("http"); //подключает http-модуль, который поставляется вместе с Node.js и делает его доступным через переменную http
var url = require("url");

function start(route) {
	var circle = 0;
	/*
		http.createServer();
		server.listen(8888);
		функция возвращает объект, имеющий метод listen, принимающий числовое значение порта нашего HTTP-сервера, который необходимо прослушивать.
	*/
	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received.");
		
		route(pathname);
		
		response.writeHead(200, {"Content-Type": "text/plain"}); //для отправки HTTP-статуса 200 и Content-Type в заголовке HTTP-ответа
		response.write("Hello World! " + circle); //для отправки текста «Hello World» в теле HTTP-ответа
		circle++;
		response.end(); //завершить наш ответ
	}
	http.createServer(onRequest).listen(8888);
	console.log("Server has started.");
}

exports.start = start;