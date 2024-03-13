const BASE_URL = "https://jsonplaceholder.typicode.com/users"

function sendRequest(method, url, body = null){

  const headers = {
    'Content-type': 'application/json'
  }

  return fetch(url, {
      method: method,
      body: JSON.stringify(body),
      headers: headers
    }).then((response) => {
      if(response.ok){
        return response.json()
      }
      
      return console.error(response.json().then((error) => {
          const e = new Error('Something working not correctly...')
          e.data = error
          throw e // throw - создает исключение и catch ловит ошибку в аргументе
      }))
  })
}

sendRequest('GET', BASE_URL)
  .then((res) => console.log(res))
  .catch((error) => console.error(res))

const body = { name: 'Zac', age: 19 }

// sendRequest('POST', BASE_URL, body)
//   .then((res) => console.log(res))
//   .catch((error) => console.error(res))

