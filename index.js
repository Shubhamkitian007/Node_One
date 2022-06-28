const http = require("http");

const Server = http.createServer(function(req, res){
    res.write("<h1>This is My First Server</h1>");
    res.end("<h2>Close Our Server</h2>");
    // res.write("<h1>This is My First Server</h1>");

})
Server.listen(4444);