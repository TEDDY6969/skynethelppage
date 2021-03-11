const Discord = require("discord.js");
const cnf = require('../config.json');

module.exports.run = async (client, message, args) => {
try {
const embed = new Discord.RichEmbed()
  .setTitle("Invite The Bot ")
  .setColor('RANDOM')
  .addField("Invite to Discord server", "[Invite the bot here (Recomended!)](" + `https://discord.com/api/oauth2/authorize?client_id=819172557067386891&permissions=8&scope=bot` + ") \n[Invite The Bot Here (Normal)](https://discord.com/api/oauth2/authorize?client_id=819172557067386891&permissions=8&scope=bot" + `${client.user.id})`)
  .addField("Website", `[Visit webiste](https://discordbotlist.com/bots/akemi-0216)`)
  .addField("Server", `[Join to official server](https://discord.gg/b44VXcVccg)`)
  .setFooter("Bot created by " + `Sakshyam`)
  .setTimestamp()
message.author.send({embed})

message.channel.send({embed: {
            color: 3447003,
            description: "Check a priv message!"
        }})
} catch (err) {
    message.channel.send({embed: {
                color: 16734039,
                description: "Something went wrong... :cry:"
            }})
}
}

module.exports.help = {
    name: "invite",
    description: "Sends a bot invite",
    usage: "invite",
    type: "General"  
}


