var http = require('http');
var fs = require('fs');

fs.appendFile('mynewfile.txt', 'Hello World!', function(err) {
    if(err) {
        throw err;
    }
    console.log('File saved!');
})
