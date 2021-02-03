const Discord = require('discord.js')


exports.run = async (client, message, args) => { 
  if (!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().setDescription(`Gerekli yetkin yok.`).setFooter(`C' Academy`).setColor("RANDOM").setTimestamp());
let guild = message.guild;
guild.fetchBans().then(bans =>message.channel.send(new Discord.MessageEmbed().setDescription(`Sunucumuzda \`${bans.size}\` banlanmış üye bulunmaktadır.`).setFooter(`C' Academy`).setColor("RANDOM").setTimestamp()))
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
}

exports.help = {
    name: 'bansay', 
  description: "",
  usage: ""
}
