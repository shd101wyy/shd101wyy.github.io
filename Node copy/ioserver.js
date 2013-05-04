var app = require('http').createServer(handler)
  , io = require('socket.io').listen(app)
  , fs = require('fs')

app.listen(4444);

function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.write(data)
    res.end();
  });
}


var user_message="Successfully Connected\n";

io.sockets.on('connection', function (socket) {
   // join public room
   
   socket.join('public_room');

  //socket.emit('news', { hello: 'world' });
   socket.emit('init',{init:"Successfully Connect to Nodejs Server",data:user_message});     
   
  
   socket.on('my event', function (data) {
  	console.log("Get data from user");
    console.log(data);
    
    user_message+=data;
    user_message+="\n";
    
    console.log(user_message);
    
    io.sockets.emit("update_textarea",user_message);
       
   });
   

   
  /*
  socket.on('my other event', function (data) {
  	console.log("THAT IS DATA");
    console.log(data);
  });
  */
  
});
