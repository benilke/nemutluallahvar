const Discord = require('discord.js');
const ms = require('ms')
module.exports.run = (client, message, args) => {
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(new Discord.MessageEmbed().setDescription(`Gerekli yetkin yok.`).setFooter(`C' Academy`).setColor("RANDOM").setTimestamp());
let kullanici = message.mentions.members.first() || message.guild.members.cache.get(args[0])
  if (!kullanici) return message.channel.send(new Discord.MessageEmbed().setDescription(`Bir kullanıcı belirtmelisin.`).setFooter(`C' Academy`).setColor("RANDOM").setTimestamp());
     let embed = new Discord.MessageEmbed()
              .setAuthor(message.author.tag, message.author.displayAvatarURL())
              .setDescription(`${message.author} tarafından ${kullanici} üyesinin sesli susturma kaldırıldı!`)
              .setColor("RANDOM");
        message.channel.send(embed)
        
 kullanici.setMute(false,`Susturması kaldırıldı.`)
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'unvmute',
    description: 'seslide sustur',
    usage: "seslisustur"
};
