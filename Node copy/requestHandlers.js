
function start(response) {

  /*
  // sleep 5 s
  function sleep(milliSeconds) {
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + milliSeconds);
  }

  sleep(5000);
  */
  
   console.log("Request handler 'start' was called.");

   var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Submit text" />'+
    '</form>'+
    '</body>'+
    '</html>';
    
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

function upload(response) {
  console.log("Request handler 'upload' was called.");
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("Upload");
  response.end();

}

function error(response){
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("404 error");
  response.end();
}

exports.start = start;
exports.upload = upload;
exports.error = error;
