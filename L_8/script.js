// const arr1 = ['aa', 'bb', 'cc', 'dd', 'ee']
// const arr2 = ['rr', 'pp', 'oo']

// const obj1 = {
//   ko: 1,
//   lo: 2,
//   po: 3,
//   to: 4
// }

// const obj2 = {
//   re: 12,
//   te: 22,
//   ge: 32,
//   ye: 42
// }

// const concatted = [...arr2, ...arr1, 'ggg']

// const concattedObj = {...obj1, ...obj2} // if some keys are same then new object sets to new only prop of last obj
// // console.log({...obj1, ...obj2})

// const nums = [1, 2, 3, 4, 5]
// // console.log(Math.max(...nums))
// // console.log(Math.max.apply(null, nums))

// const sum = (a,b, ...rest) => {
//   return a + b + rest.reduce((a, i) => a + i, 0)
// }


// console.log(sum(...nums))



function calc(a, b){
  return [
    a + b,
    a - b,
    undefined,
    a * b,
  ]
}

const [
  sum,
  git, // ignores
  sub = 'non',
  ...other // create an array of rest 
  ] = calc(2, 3)

console.log(sum,git, sub, other);