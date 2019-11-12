var fs = require("fs")
var data = fs.readFileSync("c:\\Angular8\\help.txt");
console.log(data.toString());
console.log("Read Complete --");