var fs = require('fs');

fs.writeFile('mynewfile.txt', 'Hello World', function(err) {
    if(err) throw err;
    console.log('Saved!');
});
