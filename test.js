var fs = require('fs'),
  readline = require('readline');

var rd = readline.createInterface({
  input: fs.createReadStream('./elevator24.log'),
  output: process.stdout,
  console: false
});

var output = []
rd.on('line', function (line) {
  line = line.replace(/ /g, "")
  var pre = line.split(",")
  output.push(pre)

  console.log("here")
});

setTimeout(() => {
  var getin = ["end"]
  output.push(getin)

  var file = fs.createWriteStream('elevator24.txt');
  file.on('error', function (err) { /* error handling */ });
  output.forEach(function (v) {
    file.write('["' + v.join('","') +'"],'+ '\n');
  });
  
  file.end();
  // console.log(output)
}, 3000);