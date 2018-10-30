const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./config.json');
const yt = require('ytdl-core');
config.token = process.env.token;

bot.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  console.log(`Bot has started with ${bot.users.size} users, in ${bot.channels.size} channels.`); 
  bot.user.setActivity(`with people's minds`);
});

bot.on('message',async message=>{
  //ignore self to avoid command loop
  if(message.author.bot) return;

  if(message.content === "play?") {
    msg = [
            "get ready to lose some MMR.",
            "time for another losing streak.",
            "it's a start of another raging session. Have fun.",
            "Time to play some cancer dota. GLHF.",
            "Are you sure you don't have anything better you would be doing.",
          ];
    index = Math.floor((Math.random()*10)) % msg.length; 
    message.channel.send("@everyone "+msg[index]);
  }

  if(message.content === "gg") {
    msg = [
            "I'm sure it was. My sincere condolences.",
            "Are you sure?",
            "Say whatever lets you sleep at night.",
            "Hope next time what you say is actually true.",
            "NOOO, it was not."
          ];
    index = Math.floor((Math.random()*10)) % msg.length; 
    message.reply(msg[index]);
  }
  
  if (!message.content.startsWith(config.prefix)) return;
  
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);//split into array of strings
  const command = args.shift().toLowerCase();
  
  if(command === ("assemble")){  
    message.channel.send('@everyone,you are all being summoned.');
  }
  
  if(command === "say") {
    const sayMessage = args.join(" ");
    //delete the command message
    message.delete()
    .then(msg => console.log(`Deleted message from ${msg.author.username}`))
    .catch(O_o=>{}); 
    message.channel.send(sayMessage);
  }

  if(command === "good game") {
    const msg = "No, it wasn't.";
    message.channel.send(msg);
  }

  if(command === "") {
    const msg = "Well I'll need something more than that. Try ![command].";
    message.channel.send(msg);
  }

  if(command === "win") {
    message.channel.send("You dream big huh?");
  }

  if(command === "joke") {

  }

  if(command === "pat") {
    message.channel.send("Purr purr??");
  }

  

});

bot.login(config.token).catch(err => console.log(err));