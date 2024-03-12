const Users = [
  {name: 'Elena'},
  {name: 'Alex'},
  {name: 'Zac'}
]

const visits = new WeakSet()

visits.add(Users[0]).add(Users[1])

Users.splice(1, 1)

console.log(Users)

console.log(visits.has(Users[0])) //true
console.log(visits.has(Users[1])) //false