//引入http模块
var http = require("http");
//设置主机名
var hostName = '127.0.0.1';
//设置端口
var port = 8080;
//创建服务
var server = http.createServer(function(request,response){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end("hello nodejs");

});
server.listen(port,hostName,function(){
    console.log(`Server is running on http://${hostName}:${port}`);
});