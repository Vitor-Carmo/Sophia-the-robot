const greetings = require('../../greetings')
const jokeAPI = require('../../services/jokeAPI')

const WorkStarted = (client) => {

  const week = new Date().getDay()
  const timeNow = new Date().toLocaleTimeString(
    "pt-BR", {timeZone: "America/Sao_Paulo"}
  );

  const weekend = week === 6 || week === 0
  const workHour = timeNow === "9:00:00 AM"
  const workStarted = workHour && !weekend

  if(workStarted) 
    client.channels.fetch(process.env.EVVE).then(channel => {
      jokeAPI().then(joke => {
        channel.send(
          greetings[Math.floor(Math.random() * greetings.length)] + 
          ", @everyone ! :vulcan: \n\n" + 
          "Agora são exatamente **" + 
          timeNow + 
          "** :stopwatch:\n" +
          "Daqui a mais ou menos **30 minutos** *~~( se o vitor tiver me programado corretamente )~~* começará a _**daily**_ " + 
          "então fique atento :wink:\n\n" + 
          "Então, para começar o dia bem, " +
          "irei contar uma piada " + 
          "sobre programação " +
          "em English para vocês :flag_us:\n\n"+
          "**Here is the joke:**\n\n" + 
          joke
        );
      })
    })
  
}


module.exports = WorkStarted