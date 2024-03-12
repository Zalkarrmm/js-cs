const obj = {
  name: 'Zac',
  age: 19,
  job: 'Frontend'
}

const entities = [
  ['name', 'Zac'],
  ['age', 19],
  ['job', 'Frontend'],
  [NaN, 'Not a number'],
  [NaN, 'juju number']
]

// console.log(Object.entries(obj))
// console.log(Object.fromEntries(entities))

const map = new Map(entities)

// console.log(map, 'map')

map
  .set('newField', 42)
  .set(obj, 'Value of object')

// console.log(map.has(NaN))

// console.log(map.size)

// map.delete(NaN)

// console.log(map.size)

// for(let [key, value] of map){
//   console.log('key:', key, 'value:', value)
// }

// for(let keys of map.keys()){
//   console.log(keys)
// }


// for(let value of map.values()){
//   console.log(value)
// }

// map.forEach((val, key, m) => {
//   console.log(key)
// })

// =========


// const array = [...map]

// const array2 = Array.from(map)

// const mapObj = Object.fromEntries(map.entries())


// =========

const users = [
  {name: 'Elena'},
  {name: 'Amino'},
  {name: 'Popo'}
]

const visits = new Map()

visits
  .set(users[0], new Date())
  .set(users[1], new Date(new Date().getTime() + 1000 * 60))
  .set(users[2], new Date(new Date().getTime() + 5000 * 60))

function lastVisit(user){
  return visits.get(user)
}

console.log(lastVisit(users[1]))