var http = require("http"); //подключает http-модуль, который поставляется вместе с Node.js и делает его доступным через переменную http

var circle = 0;

/*
  http.createServer();
  server.listen(8888);
  функция возвращает объект, имеющий метод listen, принимающий числовое значение порта нашего HTTP-сервера, который необходимо прослушивать.
*/

function onRequest(request, response) {
  console.log("Request received.");
  response.writeHead(200, {"Content-Type": "text/plain"}); //для отправки HTTP-статуса 200 и Content-Type в заголовке HTTP-ответа
  response.write("Hello World! " + circle); //для отправки текста «Hello World» в теле HTTP-ответа
  circle++;
  response.end();
}
http.createServer(onRequest).listen(8888);
console.log("Server has started.");