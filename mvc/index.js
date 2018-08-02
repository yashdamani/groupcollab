const http = require("http");

http.createServer(function (req, res) {
    // res.write('Hello World!'); 
    res.end('Hello World!'); 
    
  }).listen(8080);


// var server1 = http.createServer(function (req, res) {
//     res.write('Hello World!'); 
//     res.end(); 
//   });
// server1.listen(8080);

//  http.createServer(function (req, res) {
//     res.write('Hello World!'); 
//     res.end(); 
//   });

// http.createServer().listen(8080);

//  http.createServer(function (req, res) {
//     res.write('Hello World!'); 
//     res.end(); 
//   });

// http.createServer.listen(8080);


