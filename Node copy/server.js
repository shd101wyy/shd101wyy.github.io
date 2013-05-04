var http=require("http");
var url=require("url");
var fs=require("fs");
function start(route,handle){
	var requestServer=function(request,response){
			console.log("Begin to request server");
			
			
			// read file
			/*
			var data=fs.readFileSync("./test.txt","utf8");
			console.log(data);
			*/
			
			var pathname = url.parse(request.url).pathname;
			console.log("Request for " + pathname + " received.");

			route(handle,pathname,response);
			
			response.writeHead(200, {"Content-Type": "text/plain"});
			//var content=route(handle,pathname);

	        //response.write(content);
	        response.end();	
	};
	var server=http.createServer(requestServer);
	
	server.listen(5555);
	
	console.log("Server Started");
}

exports.start=start;