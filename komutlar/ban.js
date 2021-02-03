const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(new Discord.MessageEmbed().setDescription(`Gerekli yetkin yok.`).setFooter(`C' Academy`).setColor("RANDOM").setTimestamp());
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
    if(!bUser) return message.channel.send(new Discord.MessageEmbed().setDescription(`Kullanıcı belirtmelisin.`).setFooter(`C' Academy`).setColor("RANDOM").setTimestamp());
    if(bUser.id === bot.user.id)  return message.channel.send(new Discord.MessageEmbed().setDescription(`Botu banlayamazsın.`).setFooter(`C' Academy`).setColor("RANDOM").setTimestamp());
    let bReason = args.join(" ").slice(22);
    if (!bReason) bReason = 'Neden belirtilmemiş'
    let incidentchannel = "791723228212756511"
    let banEmbed = new Discord.MessageEmbed()
    .setDescription(`${message.author} tarafından **${bReason}** sebebiyle ${bUser} üyesi **banlanıldı**.`)
    .setColor("RANDOM")
    .setTimestamp()
    message.channel.send(banEmbed)
    bUser.ban({ reason: `${bReason}` })
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yasakla"],
  permLevel: 0,
}

exports.help = {
  name: 'ban', 
description: "",
usage: ""
}
