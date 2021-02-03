const Discord = require('discord.js');
const client = new Discord.Client();
exports.run = async (bot, message, args) => {
      
if(!message.member.roles.cache.some(r => r.name === "YasinBey")) { return message.channel.send(new Discord.MessageEmbed().setDescription(`Gerekli yetkin yok.`).setFooter(`C' Academy`).setColor("RANDOM").setTimestamp()).then(m => m.delete(5000)); }
 let kisi = message.mentions.users.first() || bot.users.cache.get(args[0])
 let reason = args.slice(1).join(' ')
 if (!kisi) return message.channel.send(new Discord.MessageEmbed().setDescription(`Kullanıcıyı bulamadım.`).setFooter(`C' Academy`).setColor("RANDOM").setTimestamp()).then(m => m.delete(5000));
 if (!reason) reason = 'Neden belirtilmemiş'
  message.guild.members.ban(kisi)
     let embed = new Discord.MessageEmbed()
                .setColor(0xffa300)
                .setDescription(`${kisi} ${reason} Sebebi İle ${message.author} Gazabına Uğradı!`)
                .setImage("https://media.discordapp.net/attachments/735883009986789538/739134392823447633/BANGIFF.gif");
                message.channel.send(embed)
                bot.channels.cache.get("791723228212756511").send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yasakla"],
  permLevel: 0
};

exports.help = {
  name: 'yargı',
  description: 'Hz YasinBeyin Komutu',
  category: 'yetkili',
  usage: 'yargı @kişi'
}
