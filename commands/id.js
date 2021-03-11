const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    var mention = message.guild.member(message.mentions.users.first());
    if(!mention) return message.channel.send({embed: {
            color: 16734039,
            description: "Mention a user to get their ID!"
        }})
    const lolid = new Discord.RichEmbed()
    .setThumbnail(mention.user.avatarURL)
    .setColor("RANDOM")
    .addField(' <a:DE_HypesquadGold:819503430141214751> Here Is ' + `${mention.user.username}\'s ID`, mention.id)
    message.channel.send(lolid)  
}

module.exports.help = {
    name: "id",
    description: "Display a user ID",
    usage: "id",
    type: "Utility"  
}