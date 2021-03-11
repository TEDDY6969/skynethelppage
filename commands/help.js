const Discord = require("discord.js");
const fs = require("fs");
const cnf = require('../config.json');

module.exports.run = async (client, message, args) => {
  var command = args[0];
  var commandnum = 0;
  const prefix = process.env.PREFIX;

  if (command) {
        try {
          var file = require(`./${command}`);
         } catch (err) {
    message.channel.send({embed: {
                color: 16734039,
                description: "That command does not exist, Take a look at " + `${prefix}` + " help!"
            }})
  }
              
        let newembed = new Discord.RichEmbed()
          .setTitle(":grey_question: Help - " + `${file.help.type}` + " Command", message.guild.iconURL)
          .setColor("RANDOM")
          .setImage(client.AvatarURL)
          .setFooter(`Bot created by ${cnf.owner}`,)
          .addField(`${prefix} ` + file.help.usage, file.help.description)
        
        message.channel.send(newembed);  
  }

  var done = false
  
  var General = [];
  var Moderation = [];
  var Fun = [];
  var Music = [];
  var Utility = [];
  var Economy = [];
  var NSFW = [];
  var Owner = [];
  
  fs.readdir("./commands/", (err, files) => {
	if (err) return;
    commandnum = files.length;
    
    files.forEach(file => {
      let f = require(`./${file}`);
      var namelist = f.help.name;
      var desclist = f.help.description;
      var usage = f.help.usage;
      var type = f.help.type;
      
      if (type == "General") General.push([namelist, desclist, usage]);
      if (type == "Moderation") Moderation.push([namelist, desclist, usage]);
      if (type == "Fun") Fun.push([namelist, desclist, usage]);
      if (type == "Music") Music.push([namelist, desclist, usage]);
      if (type == "Utility") Utility.push([namelist, desclist, usage]);
	  if (type == "Economy") Economy.push([namelist, desclist, usage]);
      if (type == "NSFW") NSFW.push([namelist, desclist, usage]);
      if (type == "Owner") Owner.push([namelist, desclist, usage]);
      if (namelist == "userinfo") {
        done = true
      }      
    });
    
    if (done) {
      if (!command) {
		message.channel.send({embed: {
            color: 3447003,
            description: " <a:Hearth:819514793303212062> Please Wait "
        }}).then(msg=>{
        var embed = new Discord.RichEmbed()
          .setAuthor(" SkyNet ツ Help and Command list", message.guild.iconURL) 
          .setColor("RANDOM")
          .setImage(client.AvatarURL)
          .addField("<a:vrInstagram:819522520390041680> Information and Others", General.map((roles => roles[0])).join(", ") || `No commands` ,)
          .addField("<a:Setting:819578928527441940> Moderation", Moderation.map((roles => roles[0])).join(", ") || `No commands` ,)
          .addField("<a:WhiteHeart:819618778673184779> Fun", Fun.map((roles => roles[0])).join(", ")|| `No commands` ,)
		      .addField("<a:YayParty:819618033701617734> Features (Soon)", Music.map((roles => roles[0])).join(", ") || `Music!` ,)
		      .addField("<a:success:819622263577116704> Economy System", Economy.map((roles => roles[0])).join(", ") || `No commands` ,)
          .addField("<a:purple:819617929385214023> Utility", Utility.map((roles => roles[0])).join(", ") || `No commands` ,)
          .addField("<a:redBadge:819501788766928927> NSFW", NSFW.map((roles => roles[0])).join(", ") || `No commands` ,)
          .addField("<a:ver:819618891462344736> Command Information", `${prefix}` + " help <command>")
          .addField("<a:redBadge:819501788766928927> Help Us", `${prefix}` + "If You Want To Help Us Please Use The Following Links")
        .addField('<a:DE_HypesquadGold:819503430141214751> Useful Links', `[Invite](https://discordbotlist.com/bots/akemi-0216) | [ Support Server ](https://discord.gg/b44VXcVccg)`)
         msg.edit(embed);
      timestamp: new Date(),
        msg.edit("\u200B")
		})
      } else if (err) return;
    }
  });
}

module.exports.help = {
    name: "help",
    description: "Displays all the commands available",
    usage: "help",
    type: "General" 
}