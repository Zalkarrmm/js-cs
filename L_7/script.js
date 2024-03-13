// const BASE_URL = "https://jsonplaceholder.typicode.com/users"

// function sendRequest(method, url, body = null){
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest()
  
//     xhr.open(method, url)
  
//     xhr.responseType = 'json'
    
//     xhr.setRequestHeader('Content-type', 'application/json')

//     xhr.onload = () => {
//       if(xhr.status < 400 ){
//         resolve(xhr.response)
//       }else {
//         reject(xhr.response)
//       }
//     }
  
//     xhr.onerror = () => {
//       reject(xhr.response)
//     }

//     xhr.send(JSON.stringify(body))
//   })
// }

// const body = { name: 'Zac', age: 19 }

// sendRequest('POST', BASE_URL, body)
//   .then((res) => console.log(res))
//   .catch((error) => console.error(res))

