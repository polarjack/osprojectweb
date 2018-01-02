function onload() {
  console.log("onload")

  var i = 0;
  console.log(todo.length)
  setelevatorposition();
  elevatorgoto(0);
  setInterval(() => {
    switch (todo[i][0]) {
      case 'elevatorwait':
        break;
      case 'studentdown':
        var who = Number(todo[i][1])
        var floor = Number(todo[i][2])
        peopleshow(who, floor)
        break;
      case 'studentup':
        var who = Number(todo[i][1])
        var floor = Number(todo[i][2])
        peopleshow(who, floor)
        break;
      case 'elevator':
        var floor = Number(todo[i][1])
        elevatorgoto()
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

function elevatordown() {
  elevatorposition += 82;

  TweenLite.to("#elevator", 0.5, {
    marginTop: elevatorposition + 'px'
  })
  passenger.map(i => {
    TweenLite.to("#people" + i, 0.5, {
      marginTop: elevatorposition + 'px'
    })
  })
}

function elevatorgoto(floor) {
  elevatorposition = floors[floor];
  console.log(elevatorposition)

  TweenLite.to("#elevator", 0.5, {
    marginTop: elevatorposition + 'px'
  })
  passenger.map(i => {
    TweenLite.to("#people" + i, 0.5, {
      marginTop: elevatorposition + 'px'
    })
  })
}

function elevatorup() {
  elevatorposition -= 80;

  TweenLite.to("#elevator", 0.5, {
    marginTop: elevatorposition + 'px'
  })
  passenger.map(i => {
    TweenLite.to("#people" + i, 0.5, {
      marginTop: elevatorposition + 'px'
    })
  })
}


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

function peopleshow(id, atfloor) {

  TweenLite.to("#people" + id, 0.1, {
    marginTop: floors[atfloor] + 'px'
  })
  TweenLite.to("#people" + id, 0.4, {
    opacity: 1,
    delay: 0.1
  })
}

function peoplegetinelevator(id) {
  peoplepositionX[id] += 70
  passenger.push(id)
  TweenLite.to("#people" + id, 0.5, {
    marginLeft: peoplepositionX[id] + 'px'
  })
}

function peoplegetoutelevator(id) {
  peoplepositionX[id] += 40
  TweenLite.to("#people" + id, 0.5, {
    marginLeft: peoplepositionX[id] + 'px'
  })
  TweenLite.to("#people" + id, 0.1, {
    opacity: 0
  })
}