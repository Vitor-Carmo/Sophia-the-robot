const axios = require('axios')


const jokeAPI = async () => {
  const url =  'https://v2.jokeapi.dev/joke/Programming'
  const response = await axios.get(url)

  if(!response.data.error){
    return response.data.type == "single" ? response.data.joke : (
      response.data.setup + 
      "\n" +
      response.data.delivery
    )
  }

  return(
    ':interrobang: Aparentemente deu erro ao chamar a API de contar piadas :sob: :sob: :sob: \nmas dependendo do seu senso de humor isso pode ser considerado algo bem engraçado :joy::joy::rofl: '
  )
    
}

module.exports = jokeAPI