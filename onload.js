function testing() {
  alert("hi")
}

function onload() {
  console.log("onload")

  var i = 0;
  console.log(todo.length)
  setelevatorposition();
  // peopleshow(0, 0)
  // peoplegetinelevator(0)
  // elevatorgoto(2)
  // peoplegetoutelevator(0);
  
  setInterval(() => {
    switch (todo[i][0]) {
      case 'elevatorwait':
        break;
      case 'studentdown':
        var who = Number(todo[i][1])
        var floor = Number(todo[i][2])
        peopleshow(who, floor, "down")
        break;
      case 'studentup':
        var who = Number(todo[i][1])
        var floor = Number(todo[i][2])
        peopleshow(who, floor, "up")
        break;
      case 'elevator':
        var floor = Number(todo[i][1])
        elevatorcurrent = floor
        elevatorgoto(floor)
        break;
      case 'studentout':
        var who = Number(todo[i][1])
        peoplegetoutelevator(who);
        break;
      case 'studentin':
        var who = Number(todo[i][1])
        peoplegetinelevator(who);
        break;
      default:
        console.log(todo[i])
        break;
    }
    i++
  }, 1000)
}

function getObject(id) {
  return $('#' + id)
}

function setelevatorposition() {
  TweenLite.to("#elevator", 0.1, {
    marginTop: elevatorposition + 'px'
  })
  TweenLite.to("#elevator", 0.5, {
    opacity: 1,
    delay: 0.1
  })
}

// function elevatordown() {
//   elevatorposition += 82;

//   TweenLite.to("#elevator", 0.5, {
//     marginTop: elevatorposition + 'px'
//   })
//   passenger.map(i => {
//     TweenLite.to("#people" + i, 0.5, {
//       marginTop: elevatorposition + 'px'
//     })
//   })
// }

function elevatorgoto(floor) {
  var positiontogo = elevatorbasic + (9-floor)* 80;
  console.log(elevatorposition)
  var peopletogo = floors[floor]
  
  TweenLite.to("#elevator", 0.5, {
    marginTop: positiontogo + 'px'
  })
  passenger.map(i => {
    TweenLite.to("#people" + i, 0.5, {
      marginTop: peopletogo + 'px'
    })
  })
}

// function elevatorup() {
//   elevatorposition -= 80;

//   TweenLite.to("#elevator", 0.5, {
//     marginTop: elevatorposition + 'px'
//   })
//   passenger.map(i => {
//     TweenLite.to("#people" + i, 0.5, {
//       marginTop: elevatorposition + 'px'
//     })
//   })
// }


// function peopledown(id) {
//   peopleposition[id]
//   TweenLite.to("#"+ id, 0.5, {
//     marginTop: peopleposition[id] + 'px'
//   })
// }

function initpeopleposition() {
  floors.map((v, i) => {
    peopleposition[i] = v
  });
}

function peopleshow(id, atfloor, action) {

  TweenLite.to("#people" + id, 0.1, {
    marginTop: floors[atfloor] + 'px'
  })
  TweenLite.to("#people" + id, 0.4, {
    opacity: 1,
    delay: 0.1
  })
  console.log(action)

  TweenLite.to("#"+ action + atfloor, 0.1, {
    color: 'green'
  })
  
  

}

function peoplegetinelevator(id) {
  passenger.push(id)
  TweenLite.to("#people" + id, 0.5, {
    marginLeft: 130 + 'px'
  })
  TweenLite.to("#up" + elevatorcurrent, 0.1, {
    color: 'black'
  })
  TweenLite.to("#down" + elevatorcurrent, 0.1, {
    color: 'black'
  })
}

function peoplegetoutelevator(id) {
  TweenLite.to("#people" + id, 0.5, {
    marginLeft: 170 + 'px'
  })
  TweenLite.to("#people" + id, 0.1, {
    opacity: 0
  })
}