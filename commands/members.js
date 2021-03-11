const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {  

  let onlineMembers = message.guild.members.filter(m => m.presence.status === 'online');
  let offlineMembers = message.guild.members.filter(m => m.presence.status === 'offline');
  let idleMembers = message.guild.members.filter(m => m.presence.status === 'idle');
  let dndMembers = message.guild.members.filter(m => m.presence.status === 'dnd');
  var online = 0;
  var offline = 0;
  var idle = 0;
  var donotdisturb = 0;
  
  onlineMembers.forEach(member => {
    online += 1;
  }); 
  
  offlineMembers.forEach(member => {
    offline += 1;
  }); 
  
  onlineMembers.forEach(member => {
    online += 1;
  });   
  
  idleMembers.forEach(member => {
    idle += 1;
  });  
  
  dndMembers.forEach(member => {
    donotdisturb += 1;
  }); 
  
  const embed = new Discord.RichEmbed()
    .setAuthor("Members", message.guild.iconURL)
    .setColor("RANDOM")
    .addField(" <a:DE_HypesquadGold:819503430141214751> Overall Members:", message.guild.memberCount || message.guild.members.size)
    .addField(" <a:DE_HypesquadGold:819503430141214751> Online Members:", online)
    .addField(" <a:DE_HypesquadGold:819503430141214751> Offline/Invisible Members:", offline)
    .addField(" <a:DE_HypesquadGold:819503430141214751> Idle Members:", idle)
    .addField(" <a:DE_HypesquadGold:819503430141214751> Do Not Disturb Members:", donotdisturb)
  
  message.channel.send(embed);
}

module.exports.help = {
    name: "members",
    description: "How many members are in the current server",
    usage: "members",
    type: "Utility" 
}