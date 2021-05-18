
const quoteAPI = require('../../services/quoteAPI')

const message = (
`Hey, @everyone! são exatamente **2:30 PM** :clock930: 
O que significa uma coisa ... **Daily Scrum Timeeeeeeeee!!!** :partying_face: :partying_face: :partying_face: 
Então, por favor entrem todos os **devs**  no canal de voz *Daily* :computer:


**Vocês devem responder as seguintes perguntas: **

+ *O que eu fiz ontem que ajudou o Time de Desenvolvimento a atender a meta da Sprint?*
+ *O que eu farei hoje para ajudar o Time de Desenvolvimento atender a meta da Sprint?*
+ *Eu vejo algum obstáculo que impeça a mim no atendimento da meta da Sprint?*

Depois de todos responderem essas perguntas, agora é partir código! :man_technologist:

`)


const DailyStarted = (client) => {

  const week = new Date().getDay()
  const timeNow = new Date().toLocaleTimeString(
    "pt-BR", {timeZone: "America/Sao_Paulo"}
  );
  const weekend = week === 6 || week === 0
  const dailyHour = timeNow === "2:30:00 PM"
  const dailyStarted = dailyHour && !weekend

  if(dailyStarted)
    client.channels.fetch(process.env.EVVE).then(channel => {
      quoteAPI().then(quote => {
        channel.send(message + quote)
      })
    })
} 

module.exports = DailyStarted