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
.addField('• Developer', `Sakshyam`)
.addField('• Uptime', `${duration}`)
.addField('• Guild Count', `${client.guilds.size}`)
.addField('• User Count', `${client.users.size}`)
.addField('• Channel Count', `${client.channels.size}`)
.addField('• Memory Usage', `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)}MB`)
.addField('• Useful Links', `[Official website](https://discordbotlist.com/bots/akemi-0216) | [Invite me!](https://discord.com/oauth2/authorize/?permissions=8&scope=bot&client_id=${client.user.id}) | [Official server](https://discord.gg/b44VXcVccg)`)
.setFooter(`Bot created by Sakshyam`)
message.channel.send(embed);
}

module.exports.help = {
    name: "info",
    description: "Display a bot info for developers",
    usage: "info",
    type: "General"  
}
