const cnf = require('../config.json');
const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

module.exports.run = async (client, message, args) => {

const prefix = process.env.PREFIX;
const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
let embed = new Discord.RichEmbed()
.setTitle(`Akemiツ`)
.setColor('RANDOM')
.setDescription(`My prefix is: \`${prefix}\`\n`)
.setThumbnail(client.user.displayAvatarURL)
.addField('<a:DE_HypesquadGold:819503430141214751> Developer', `ꜱᴀᴋꜱʜʏᴀᴍ`)
.addField('<a:DE_HypesquadGold:819503430141214751> Uptime', `${duration}`)
.addField('<a:DE_HypesquadGold:819503430141214751> Guild Count', `${client.guilds.size}`)
.addField('<a:DE_HypesquadGold:819503430141214751> User Count', `${client.users.size}`)
.addField('<a:DE_HypesquadGold:819503430141214751> Channel Count', `${client.channels.size}`)
.addField('<a:DE_HypesquadGold:819503430141214751> Memory Usage', `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)}MB`)
.addField('<a:DE_HypesquadGold:819503430141214751> Useful Links', `[ <a:redBadge:819501788766928927> Official website](https://discordbotlist.com/bots/akemi-0216) | [ <a:redBadge:819501788766928927> Invite me!](https://discord.com/oauth2/authorize/?permissions=8&scope=bot&client_id=${client.user.id}) | [ <a:redBadge:819501788766928927> Official server](https://discord.gg/b44VXcVccg)`)
message.channel.send(embed);
}

module.exports.help = {
    name: "info",
    description: "Display a bot info for developers",
    usage: "info",
    type: "General"  
}
