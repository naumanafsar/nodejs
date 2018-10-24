var fs = require('fs');

fs.appendFile('mynewfile.txt', 'This is my second line', function(err) {
    if(err) throw err;
    console.log('Updated!');
});
