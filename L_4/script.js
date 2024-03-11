// Theory
// const person = {
//   name: "Zalkar",
//   age: 19,
//   job: 'Frontend dev'
// }

// // Object

// const OP = new Proxy(person, {       // new Proxy(target, {}:catchers)
//   get(target, prop) { // get(target, key)
//     if(!(prop in target)){
//       return prop
//         .split('_') // separate a words by underSpace and return as array
//         .map(p => target[p]) // getting a values from object
//         .join(' ') // recreate from array to string using ' ' as a spacing
//     }
//     return target[prop] // obj[key]
//   },
//   set(target, prop, value) {
//     if (prop in target) {
//       target[prop] = value
//     } else {
//       throw new Error(`No ${prop} in this target`)
//     }
//   },
//   has(target, prop){
//     return ['age', 'job'].includes(prop)
//   },
//   deleteProperty(target, prop){
//     console.log('Deleting...', prop)
//     delete target[prop]
//     return true
//   }
// })

// // Function

// const log = text => console.log(`Log: ${text}`)

// const fp = new Proxy(log, {
//   apply(target, thisArg, args){
//     console.log('Logging now...')
//     return target.apply(thisArg, args.toUppercase())
//   }
// })

// // Classes

// class Person {
//   constructor(name, age){
//     this.name = name
//     this.age = age
//   }
// }

// const PersonProxy = new Proxy(Person, {
//   construct(target, args){
//     console.log('Construct...')

//     return new Proxy(new target(...args), {
//       get(t, prop){
//         console.log('getting prop', prop)
//         return t[prop]
//       }
//     })
//   }
// })

// const p = new PersonProxy('Zalkar', 19)

// Practice

// Wrapper

const withDefaultValue = (target, defaultValue = 0) => {
  return new Proxy(target, {
    get: (obj, prop) => (
      prop in target ? obj[prop] : defaultValue
    )
  })
}

const position = withDefaultValue(
  {
    x: 25,
    y: 35
  },
  0
)

// console.log(position) // position.y => 35, position.AnyUndefinedKey => 0


// Hidden properties

const withHiddenProps = (target, prefix = '_') => { // object and non usable prefix
  return new Proxy(target, {
    has: (obj, prop) => (prop in obj) && (!prop.startsWith(prefix)), // returns a key if it doesn't starts with prefix
    ownKeys: obj => Reflect.ownKeys(obj) // Reflect.ownKeys(obj) returns an array with keys of object (this operation is just like Object.keys(tagetObject))
      .filter(p => !p.startsWith(prefix)), // just filtering object by prefix when getting keys using ownKeys
    get: (obj, prop, receiver) => (prop in receiver)  //
    ? obj[prop]
    : void 0 // viod 0 === undefined
  })
}

const data = withHiddenProps({
  name: 'Vladilen',
  age: 25,
  _uid: 'qwerty12345678Aa'
})

// Optimization


const IndexedArray = new Proxy(Array, {
  construct(target, [args]){
    const index = {}
    args.forEach(item => (item[item.id] = item))

    return new Proxy(new target(...args), {
      get(arr, prop){
        switch (prop) {
          case 'push': 
            return (item) => {
              index[item.id] = item
              arr[prop].call(arr, item)
            }
          case 'findById':
            return id => index[id]
          default:
            return arr[prop]
        }
      }
    })
  }
})


const userData = [
  {id: 1, name: 'Alex', job: 'Fullstack', age: 25},
  {id: 2, name: 'Opra', job: 'Front-end', age: 23},
  {id: 3, name: 'Andy', job: 'Back-end', age: 19},
  {id: 4, name: 'Oleg', job: 'DevOps', age: 32 }
]


const users = new IndexedArray(userData)