const axios = require('axios')


const quoteAPI = async () => {
  const url =  'https://api.quotable.io/random'
  const { data } = await axios.get(url)
  
  const quote = (
    `> ''*${data.content}*''   **-${data.author}** `
  )
  return quote
}

module.exports = quoteAPI