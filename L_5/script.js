// Generators - функции последовательно выдающие результат ее работы

// function* strGenerator(){
//   yield 'H'
//   yield 'e'
//   yield 'l'
//   yield 'l'
//   yield 'o'
// }

// const str = strGenerator()

// function* numberGen(n = 10){
//   for(let i = 0; i < n; i++){
//     yield i
//   }
// }

// const num = numberGen(17)

// const iterator = {
//   [Symbol.iterator](n = 10){
//     let i = 0
//     return{
//       next(){
//         if(i < n){
//           return { value: ++i, done: false }
//         }
//         return { value: undefined, done: true }
//       }
//     }
//   }
// }

function* iter(n = 10){
  for(let i = 0; i < n; i++){
    yield i
  }
}

for(let k of iter(6)){
  console.log(k)
}


const pool = [
  {name: 'Alex', age: 25, budget: 4000},
  {name: 'William', age: 34, budget: 2434},
  {name: 'Jane', age: 54, budget: 5444},
  {name: 'Bony', age: 12, budget: 400544},
  {name: 'Gonron', age: 44, budget: 90000},
  {name: 'Ramzy', age: 12, budget: 3434444}
]

const amount = pool.reduce((total, person) =>  total + person.budget, 0)

const indexOfAlex = pool.findIndex(p => p.name === 'Alex') // returns an index of element

const findAlex = pool.find(p => p.name === 'Alex') // returns an element