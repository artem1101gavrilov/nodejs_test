var exec = require("child_process").exec;
var circle = 0;

function start(response) {
  console.log("Request handler 'start' was called.");
  
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("" + circle);
    response.end();
	
	circle++;
}

function upload(response) {
  console.log("Request handler 'upload' was called.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello Upload");
  response.end();
}

exports.start = start;
exports.upload = upload;