const Discord = require('discord.js');

exports.run = async(client, message, args) => {
  if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(new Discord.MessageEmbed().setDescription(`Gerekli yetkin yok.`).setFooter(`C' Academy`).setColor("RANDOM").setTimestamp());
  if(!args[0]) return message.channel.send(new Discord.MessageEmbed().setDescription(`Kaldırılacak banlı kullanıcının IDsini girmelisin. (Tüm banları kaldırmak için toplu yazmalısın.`).setFooter(`C' Academy`).setColor("RANDOM").setTimestamp());
    if(args[0] === "toplu") {
      if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setDescription(`Gerekli yetkin yok.`).setFooter(`C' Academy`).setColor("RANDOM").setTimestamp());
        message.guild.fetchBans().then(bans => {
          bans.forEach(user => {
            message.guild.members.unban(user)
          });
        });
       message.channel.send(new Discord.MessageEmbed().setDescription(`Sunucudaki tüm banlar kaldırılıyor.`).setFooter(`C' Academy`).setColor("RANDOM").setTimestamp());
      return
    }
    if(isNaN(args[0])) return message.channel.send(new Discord.MessageEmbed().setDescription(`Kaldırılacak banlı kullanıcının IDsini girmelisin. (Tüm banları kaldırmak için toplu yazmalısın.`).setFooter(`C' Academy`).setColor("RANDOM").setTimestamp()).then(x => x.delete(5000))
    try {
      message.guild.members.unban(args[0])
      let x = args[0];
      
      let log = message.guild.channels.cache.find(`name`, "modlog");      
      client.users.fetch(args[0]).then(x => log.send(new Discord.MessageEmbed().setAuthor('Ban Kaldırıldı').setTimestamp().setColor("GREEN").setFooter(message.guild.name, message.guild.iconURL()).setDescription(`**Banı Kaldırılan:** <@${x.id}> | ${x.id} \n**Banı Kaldıran:** ${message.author} | ${message.author.id}`)))
    } catch(err) { return message.channel.send(new Discord.MessageEmbed().setDescription(`Ban Kaldırılamadı.`).setFooter(`C' Academy`).setColor("RANDOM").setTimestamp()).then(x => x.delete(5000)) }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['un-ban', 'ban-kaldır'],
  permLevel: 0,
};

exports.help = {
  name: 'unban',
  description: 'Sunucudan ban kaldırmanızı sağlar.',
  usage: 'unban id/toplu',
};