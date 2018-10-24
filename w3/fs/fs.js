var fs = require('fs');
var http = require('http');


fs.readFile('demo.html',(err,html) => {
    if(err) {
        throw err;
    }

    http.createServer(function (req, res) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(html);
      res.end();
    }).listen(8080);
});

console.log('Starting server on http://127.0.0.1:8080');
