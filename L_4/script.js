const person = {
  name: "Zalkar",
  age: 19,
  job: 'Frontend dev'
}

// Object

const OP = new Proxy(person, { // new Proxy(target, {}:catchers)
  get(target, prop) { // get(target, key)
    if(!(prop in target)){
      return prop
        .split('_') // separate a words by underSpace and return as array
        .map(p => target[p]) // getting a values from object
        .join(' ') // recreate from array to string using ' ' as a spacing
    }
    return target[prop] // obj[key]
  },
  set(target, prop, value) {
    if (prop in target) {
      target[prop] = value
    } else {
      throw new Error(`No ${prop} in this target`)
    }
  },
  has(target, prop){
    return ['age', 'job'].includes(prop)
  },
  deleteProperty(target, prop){
    console.log('Deleting...', prop)
    delete target[prop]
    return true
  }
})

// Function

const log = text => console.log(`Log: ${text}`)

const fp = new Proxy(log, {
  apply(target, thisArg, args){
    console.log('Logging now...')
    return target.apply(thisArg, args.toUppercase())
  }
})

// Classes

class Person {
  constructor(name, age){
    this.name = name
    this.age = age
  }
}

const PersonProxy = new Proxy(Person, {
  construct(target, args){
    console.log('Construct...')

    return new Proxy(new target(...args), {
      get(t, prop){
        console.log('getting prop', prop)
        return t[prop]
      }
    })
  }
})

const p = new PersonProxy('Zalkar', 19)