var fs = require('fs');

fs.rename('mynewfile1.txt', 'mynewfile.txt', function(err) {
    if(err) throw err;
    console.log('Renamed!');
}
)
