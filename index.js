const Discord = require("discord.js");
const client = new Discord.Client();
const bot = new Discord.Client(); 

const KeepBotAlive = require('./KeepBotAlive')
const WorkStarted = require('./chat/automatic/WorkStarted.js')
const DailyStarted = require('./chat/automatic/DailyStarted.js')
const DailyCommands = require('./chat/commands/DailyCommands.js')

bot.login(process.env.TOKEN); 

bot.once('ready', () => {   
    console.log(`we are logged in as ${bot.user.tag}!`);
});

client.on("ready", () => {
    // check every second
    setInterval(() => {
      WorkStarted(client);
      DailyStarted(client);
    }, 1000)
})

client.on("guildCreate", guild =>{});

client.on("guildDelete", guild => {});

client.on("message", async message =>{
    if(message.author.bot) return;    
    if(message.channel.type === "dm") return;
});

bot.on("guildMemberAdd", member =>{});
       
bot.on('message', msg => { 
  DailyCommands(msg)
});

KeepBotAlive.listen(3000, () => console.log(
  "listening at http://localhost"));
client.login(process.env.TOKEN);
