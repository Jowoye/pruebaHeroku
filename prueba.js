var http = require('http');
var hostname= '127.0.0.1';
var port = 3000;
var fs = require('fs');


fs.readFile('index.html', function(error,html){
    if(error){
        throw error;

    }
    var server = http.createServer(function(request, respond){
        respond.statusCode=200;
        respond.setHeader('Content-type','text/html');
        respond.write(html);
        respond.end();
    
    });
    
    server.listen(port, hostname, function(){
        console.log("servidor iniciado "+ port);
    
    });

});

