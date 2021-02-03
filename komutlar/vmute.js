const Discord = require('discord.js');
const ms = require("ms");

module.exports.run = (client, message, args) => {
  
    if (!message.member.roles.find("name", "Register Yetkilisi.")) { return message.channel.send(new Discord.MessageEmbed().setDescription(`Gerekli yetkin yok.`).setFooter(`C' Academy`).setColor("RANDOM").setTimestamp()).then(m => m.delete(5000)); }
let kullanici = message.mentions.members.first() || message.guild.members.get(args[0])
let süre = args[1]
let reason = args.slice(1).join(' ')
  if (!kullanici) return message.channel.send(new Discord.MessageEmbed().setDescription(`Bir kullanıcı belirtmelisin.`).setFooter(`C' Academy`).setColor("RANDOM").setTimestamp());
  if (kullanici.id === message.author.id) return message.channel.send(new Discord.MessageEmbed().setDescription(`Kendini susturamazsın.`).setFooter(`C' Academy`).setColor("RANDOM").setTimestamp());
  if(!süre) return message.channel.send(new Discord.MessageEmbed().setDescription(`Doğru bir zaman dilimi giriniz. Örneğin: **!voicemute @kişi 1s/m/h/d sebep**`).setFooter(`C' Academy`).setColor("RANDOM").setTimestamp());
  if (!sebep) return message.channel.send(new Discord.MessageEmbed().setDescription(`Sebep giriniz. Örneğin: **!voicemute @kişi 1s/m/h/d sebep**`).setFooter(`C' Academy`).setColor("RANDOM").setTimestamp());
     let embed =  new Discord.RichEmbed()
              .setAuthor(message.author.tag, message.author.displayAvatarURL)
              .setDescription(`${süre} süreliğine  tarafından ${sebep} sebebiyle susturuldu!`)
              .setColor("RANDOM");
  kullanici.setMute(true, `Susturan yetkili: ${message.author.tag} - Susturma süresi: ${süre} ms`)
        .then(() => message.channel.send(embed)).catch(console.error);
        setTimeout(() => {
 kullanici.setMute(false,`Süresi dolduğu için susturması kaldırıldı.`)
          let sembed = new Discord.RichEmbed()
              .setAuthor(message.author.tag, message.author.displayAvatarURL)
                .setDescription(` üyesinin, ${süre} sürelik susturulması, otomatik olarak kaldırıldı.`)
                .setColor("RANDOM");
        message.channel.send(sembed)
    }, ms(süre))
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["seslimute", "sesli-sustur"],
    permLevel: 0
};

exports.help = {
    name: 'vmute',
    description: 'seslide sustur',
    usage: "seslisustur"
};
