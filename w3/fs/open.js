var fs = require('fs');

// Takes a flag w for writing;


fs.open('mynewfile.txt', 'w', function(err, file) {
    if(err) throw err;
    console.log('Saved!');
})
