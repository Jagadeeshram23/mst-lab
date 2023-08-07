const http = require("http")

const server = http.createServer(function(req,res){
    console.log("visited");
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("hello world");
    res.end();
});

server.listen(9000, ()=> {
    console.log("running");
})


//command to run: node ex1.js

//localhost:9000
