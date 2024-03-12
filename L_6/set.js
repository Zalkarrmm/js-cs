const set = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

set.add(20).add(30).add(40).add(50).add(20)


// console.log(set)
// console.log(set.has(42))
// console.log(set.size)
// console.log(set.delete(20))
// console.log(set.size)
// console.log(set.clear())

// for(let entry of set){
//   console.log(entry)
// }

// ======

const arr = [
  {name: 'Alex', age: 25, budget: 4000},
  {name: 'William', age: 34, budget: 2434},
  {name: 'Jane', age: 54, budget: 5444},
  {name: 'Bony', age: 12, budget: 400544},
  {name: 'Gonron', age: 44, budget: 90000},
  {name: 'Ramzy', age: 12, budget: 3434444},
  {name: 'Bony', age: 12, budget: 400544},
]

// function unicValues(array){
//   return Array.from(new Set(array))
// } для примитивов

const keys = arr.map(item => item.name)

const uniqueArr = Array.from(new Set(arr.map(a => a.name)))
    .map(name => {
        return arr.find(a => a.name === name);
    });