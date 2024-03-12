let obj = {name: 'weakMap'}

// const arr = [obj]

// obj = null

// console.log(obj) // null
// console.log(arr) // {name: 'weakMap'} - тут он в массиве сохранился и происходит утечка памяти

const map = new WeakMap([
  [obj, 'object data']
])

obj = null

// set get delete has


const cache = new WeakMap()

function cacheUser(user){
  if(!cache.has(user)){
    cache.set(user, Date.now())
  }
  return cache.get(user)
}

let Lena = {name: 'Elena'}
let Alex = {name: 'Alex'}

cacheUser(Lena)
cacheUser(Alex)

Lena = null

console.log(cache.has(Lena))
console.log(cache.has(Alex))

