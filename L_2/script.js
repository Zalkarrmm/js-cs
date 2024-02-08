const obj = Object.create(
  {
    calculateAge() {
      return new Date().getFullYear() - this.birthYear
    }
  },
  {
    name: {
      value: 'Zac',
      enumerable: true, // iterable in loop for in key
      writable: true, // changable
      configurable: true, // u can delete and configure this property
    },
    birthYear: {
      value: 2004,
      enumerable: true,
      writable: true,
      configurable: true,
    },
    age: {
      get() {
        return new Date().getFullYear() - this.birthYear
      },
      set(value) {
        document.body.style.background = value
        console.log(value, 'setted')
      }
    }
  }
) // Object.create(prototype, property)

obj.name = 'Zalkar'

for (let key in obj) {
  if(obj.hasOwnProperty(key)){ // hasOwnProperty returns true if object has a PROPERTY not prototype
    console.log(key,':', obj[key])
  }
}