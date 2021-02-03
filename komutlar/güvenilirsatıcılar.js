const Discord = require('discord.js');
exports.run = function(client, message) {
const yardım = new Discord.MessageEmbed()
.setColor('RANDOM')
.setDescription(`**\`Güvenilir Satıcılar\`**



» \Güvenilir Satıcılar bu şekilde.\: **Bunun dışında hiç bir şekilde Şikayet kabul etmiyoruz.**
» \Ondan sonra Dolandırıldım o, Bu bizi ilgilendirmez sadece bu Satıcılara kefiliz.\: **Bu kişiler dışında kimseyle Alışveriş yapmayın!**
» \İyi Alışverişler.\`: **Teşekkürler C'Academy !`)

.setThumbnail(message.author.avatarURL({dynamic: true}))
.setTimestamp()
message.channel.send(yardım)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: "satıcılar",
  description: 'yardım kodu.',
  usage: 'satıcılar'
};