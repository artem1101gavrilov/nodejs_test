var http = require("http"); //���������� http-������, ������� ������������ ������ � Node.js � ������ ��� ��������� ����� ���������� http
var url = require("url");

function start(route) {
	var circle = 0;
	/*
		http.createServer();
		server.listen(8888);
		������� ���������� ������, ������� ����� listen, ����������� �������� �������� ����� ������ HTTP-�������, ������� ���������� ������������.
	*/
	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received.");
		
		route(pathname);
		
		response.writeHead(200, {"Content-Type": "text/plain"}); //��� �������� HTTP-������� 200 � Content-Type � ��������� HTTP-������
		response.write("Hello World! " + circle); //��� �������� ������ �Hello World� � ���� HTTP-������
		circle++;
		response.end(); //��������� ��� �����
	}
	http.createServer(onRequest).listen(8888);
	console.log("Server has started.");
}

exports.start = start;