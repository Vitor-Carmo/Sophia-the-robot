
const prefix = '!'
const devs =  [
  '<@!385394348017319946>',
  '<@!740185267570212935>',
  '<@!461288735410225153>',
  '<@!358292375073980417>',
  '<@!474417077654913034>',
]

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function randomDevs(){
  
  const randomized = shuffle(devs)

  let msg = '**Aqui está a ordem certinha para vocês apresentarem a daily scrum xuxus :heart:**\n'

  for (var i = 0; i < devs.length; ++i) {
     msg += `${i + 1} - ${devs[i]}\n`
  } 

  return msg
}

const DailyCommands = (discord) =>{

  sendMessage(
    discord,
    'python', 
    'Todos sabemos Python é melhor que java!'
  )

  sendMessage(
    discord,
    'sorteio',
    randomDevs()
  )
  
  sendMessage(
    discord,
    'atraso', 
    'Quem se atrasar pra daily scrum é corno kkkkkkk'
  )


  if(discord.content.startsWith(prefix + 'ultimo') ){
    const target_one = discord.content.split(' ')[1]
    if(devs.indexOf(target_one) === -1){
      discord.channel.send(
         `"${target_one}"??? Não! não desta vez, <@!${discord.author.id}>!  :rage:`, 
        {files: [
          "https://media.giphy.com/media/12h4pgk1SRtLuo/giphy.gif"
          ]
        }
      );

      return
    }


    discord.channel.send(
       `iiiiiiiiiiiii  O ${target_one} foi o ultimo a sair tem que pagar coxinha para todo mundo agora :pinched_fingers:`
    );
  } 
}

const sendMessage = (discord,comand, message ) =>{
  if(discord.content.startsWith(prefix + comand) ){
    discord.channel.send(message);
  } 
}

module.exports = DailyCommands