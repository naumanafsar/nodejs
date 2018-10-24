
// Split the web address into readable formats!

var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2018&month=October';
var q = url.parse(adr,true);

console.log(q.host); // returns localhost:8080;
console.log(q.pathname);  // returns /defailt.htm
console.log(q.search); //returns &year=2018&month=October   

var qdata = q.query;
console.log(qdata.month); //returns October
