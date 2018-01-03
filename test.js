var fs = require('fs'),
    readline = require('readline');

var rd = readline.createInterface({
    input: fs.createReadStream('./logfile'),
    output: process.stdout,
    console: false
});

var output = []
rd.on('line', function(line) {
  line = line.replace(/ /g,"")
  var pre = line.split(",")
  output.push(pre)

  console.log("here")
});


setTimeout(() => {
  var getin = ["end"]
  output.push(getin)
  console.log(output)
}, 3000);

//result
var todo = [
  ['elevatorwait'],
  ['studentdown', '0', '2'],
  ['elevator', '2'],
  ['studentin', '0'],
  ['elevator', '0'],
  ['studentout', '0'],
  ['elevatorwait'],
  ['studentdown', '1', '9'],
  ['elevator', '9'],
  ['studentin', '1'],
  ['elevator', '8'],
  ['studentout', '1'],
  ['elevatorwait'],
  ['studentup', '2', '1'],
  ['elevator', '1'],
  ['studentin', '2'],
  ['elevator', '3'],
  ['studentout', '2'],
  ['elevatorwait'],
  ['studentdown', '4', '7'],
  ['studentup', '3', '0'],
  ['elevator', '7'],
  ['studentin', '4'],
  ['elevator', '4'],
  ['studentout', '4'],
  ['elevator', '0'],
  ['studentin', '3'],
  ['elevator', '9'],
  ['studentout', '3'],
  ['elevatorwait'],
  ['studentdown', '5', '7'],
  ['studentdown', '6', '8'],
  ['elevator', '7'],
  ['studentin', '5'],
  ['elevator', '4'],
  ['studentout', '5'],
  ['elevator', '8'],
  ['studentin', '6'],
  ['studentout', '6'],
  ['elevator', '8'],
  ['elevatorwait'],
  ['studentup', '7', '1'],
  ['studentdown', '8', '2'],
  ['elevator', '1'],
  ['studentdown', '9', '5'],
  ['studentin', '7'],
  ['elevator', '5'],
  ['studentout', '7'],
  ['elevator', '5'],
  ['studentin', '9'],
  ['elevator', '2'],
  ['studentout', '9'],
  ['studentin', '8'],
  ['elevator', '5'],
  ['elevator', '2'],
  ['studentout', '8'],
  ['elevatorwait'],
  ['studentdown', '10', '6'],
  ['elevator', '6'],
  ['studentin', '10'],
  ['elevator', '1'],
  ['studentout', '10'],
  ['elevatorwait']
]
