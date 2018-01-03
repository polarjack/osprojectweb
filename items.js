var user_id = [
  "user0",
  "user1",
  "user2",
  "user3",
  "user4",
  "user5",
  "user6",
  "user7",
  "user8",
  "user9"
]

var elevatorbasic = 12;
var elevatorposition = elevatorbasic + (9 - 0) * 80;

var elevatorcurrent = 0;
var peoplepositionX = [
  60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60
]

// var peoplepositionY = [
//   , 0, 0, 0, 0, 0, 0, 0, 0, 0
// ]


var floors = [750, 670, 590, 510, 430, 350, 270, 190, 110, 30]

// var floors = [30, 110, 190, 270, 350, 430, 510, 590, 670, 750]
var passenger = []


// var todo = [
//   ['elevatorwait'],
//   ['studentdown', '0', '2'],
//   ['elevator', '2'],
//   ['studentin', '0'],
//   ['elevator', '0'],
//   ['studentout', '0'],
//   ['elevatorwait']
// ]


var setting1 = [
  ['elevatorwait'],
  ['studentup', '0', '1'],
  ['studentdown', '3', '7'],
  ['studentup', '2', '1'],
  ['studentup', '1', '3'],
  ['elevator', '1'],
  ['studentin', '2'],
  ['studentin', '0'],
  ['elevator', '3'],
  ['studentin', '1'],
  ['studentout', '2'],
  ['elevator', '4'],
  ['studentout', '1'],
  ['elevator', '8'],
  ['studentout', '0'],
  ['elevator', '7'],
  ['studentin', '3'],
  ['elevator', '2'],
  ['studentout', '3'],
  ['elevator', '1'],
  ['elevatorwait'],
  ['studentup', '4', '6'],
  ['studentdown', '5', '2'],
  ['elevator', '6'],
  ['studentin', '4'],
  ['elevator', '8'],
  ['studentout', '4'],
  ['elevator', '2'],
  ['studentin', '5'],
  ['elevator', '2'],
  ['studentout', '5'],
  ['elevatorwait'],
  ['studentup', '6', '6'],
  ['elevator', '6'],
  ['studentin', '6'],
  ['elevator', '7'],
  ['studentout', '6'],
  ['elevatorwait'],
  ['end']
]

var setting2 = [
  ['elevatorwait'],
  ['studentdown', '0', '7'],
  ['elevator', '7'],
  ['studentin', '0'],
  ['elevator', '6'],
  ['studentout', '0'],
  ['elevatorwait'],
  ['studentup', '1', '1'],
  ['studentdown', '2', '2'],
  ['elevator', '1'],
  ['studentin', '1'],
  ['elevator', '8'],
  ['studentout', '1'],
  ['elevator', '2'],
  ['studentin', '2'],
  ['elevator', '1'],
  ['studentout', '2'],
  ['elevatorwait'],
  ['studentdown', '3', '8'],
  ['studentdown', '4', '9'],
  ['studentup', '5', '2'],
  ['studentup', '6', '2'],
  ['elevator', '8'],
  ['studentup', '8', '2'],
  ['studentdown', '7', '9'],
  ['studentup', '10', '5'],
  ['studentdown', '9', '5'],
  ['studentin', '3'],
  ['studentdown', '11', '6'],
  ['elevator', '7'],
  ['studentout', '3'],
  ['elevator', '6'],
  ['studentin', '11'],
  ['elevator', '5'],
  ['studentin', '9'],
  ['elevator', '3'],
  ['studentout', '11'],
  ['elevator', '0'],
  ['studentout', '9'],
  ['elevator', '2'],
  ['studentin', '8'],
  ['studentin', '5'],
  ['studentin', '6'],
  ['elevator', '4'],
  ['studentout', '8'],
  ['elevator', '5'],
  ['studentout', '6'],
  ['studentin', '10'],
  ['elevator', '6'],
  ['studentout', '5'],
  ['elevator', '9'],
  ['studentout', '10'],
  ['elevator', '9'],
  ['studentin', '7'],
  ['studentin', '4'],
  ['elevator', '4'],
  ['studentout', '7'],
  ['elevator', '9'],
  ['studentout', '4'],
  ['elevatorwait'],
  ['studentup', '13', '5'],
  ['studentdown', '12', '9'],
  ['elevator', '5'],
  ['studentin', '13'],
  ['elevator', '9'],
  ['studentout', '13'],
  ['elevator', '9'],
  ['studentin', '12'],
  ['elevator', '2'],
  ['studentout', '12'],
  ['elevator', '9'],
  ['elevatorwait'],
  ['end']
]

var setting3 = [
  ["elevatorwait"],
  ["studentdown", "0", "7"],
  ["studentup", "2", "1"],
  ["studentup", "1", "2"],
  ["elevator", "1"],
  ["studentin", "2"],
  ["elevator", "2"],
  ["studentin", "1"],
  ["elevator", "5"],
  ["studentout", "2"],
  ["elevator", "6"],
  ["studentout", "1"],
  ["elevator", "7"],
  ["studentin", "0"],
  ["elevator", "0"],
  ["studentout", "0"],
  ["elevatorwait"],
  ["studentdown", "3", "8"],
  ["studentup", "4", "4"],
  ["studentdown", "7", "2"],
  ["studentup", "5", "1"],
  ["elevator", "8"],
  ["studentup", "6", "0"],
  ["studentdown", "8", "3"],
  ["studentin", "3"],
  ["elevator", "7"],
  ["studentdown", "9", "7"],
  ["studentout", "3"],
  ["studentup", "10", "5"],
  ["studentdown", "11", "3"],
  ["elevator", "3"],
  ["studentdown", "13", "9"],
  ["studentup", "12", "5"],
  ["studentin", "11"],
  ["studentout", "11"],
  ["studentin", "8"],
  ["elevator", "2"],
  ["studentin", "7"],
  ["elevator", "1"],
  ["studentout", "8"],
  ["elevator", "0"],
  ["studentout", "7"],
  ["elevator", "0"],
  ["studentin", "6"],
  ["elevator", "1"],
  ["studentin", "5"],
  ["elevator", "4"],
  ["studentin", "4"],
  ["elevator", "5"],
  ["studentout", "5"],
  ["studentin", "10"],
  ["studentin", "12"],
  ["elevator", "7"],
  ["studentout", "4"],
  ["studentout", "6"],
  ["elevator", "9"],
  ["studentout", "12"],
  ["studentout", "10"],
  ["elevator", "9"],
  ["studentin", "13"],
  ["elevator", "8"],
  ["studentout", "13"],
  ["elevator", "7"],
  ["studentin", "9"],
  ["elevator", "6"],
  ["studentout", "9"],
  ["elevator", "3"],
  ["elevatorwait"],
  ["studentup", "14", "2"],
  ["studentup", "17", "3"],
  ["studentdown", "18", "8"],
  ["studentup", "16", "3"],
  ["studentup", "15", "3"],
  ["elevator", "2"],
  ["studentin", "14"],
  ["elevator", "3"],
  ["studentout", "14"],
  ["studentin", "16"],
  ["studentin", "17"],
  ["studentin", "15"],
  ["elevator", "4"],
  ["studentout", "16"],
  ["elevator", "6"],
  ["studentout", "17"],
  ["elevator", "7"],
  ["studentout", "15"],
  ["elevator", "8"],
  ["studentin", "18"],
  ["elevator", "6"],
  ["studentout", "18"],
  ["elevatorwait"],
  ["studentup", "20", "0"],
  ["studentdown", "21", "8"],
  ["studentup", "22", "8"],
  ["studentup", "19", "0"],
  ["elevator", "0"],
  ["studentup", "23", "1"],
  ["studentin", "19"],
  ["studentin", "20"],
  ["elevator", "1"],
  ["studentin", "23"],
  ["studentout", "19"],
  ["elevator", "3"],
  ["studentout", "23"],
  ["elevator", "4"],
  ["studentout", "20"],
  ["elevator", "8"],
  ["studentin", "22"],
  ["elevator", "9"],
  ["studentout", "22"],
  ["elevator", "8"],
  ["studentin", "21"],
  ["elevator", "5"],
  ["studentout", "21"],
  ["elevator", "0"],
  ["elevator", "1"],
  ["elevatorwait"],
  ["end"]
]

var setting4 =[]

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
  ['elevatorwait'],
  ['end']
]

var setting
var running = false



