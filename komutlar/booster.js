const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL)
        .setColor('0x36393E')
        .setTitle(`${client.user.username} - Booster`)
        .setDescription(` | **1.** Sadece <@&774609526526967821> lerin olduğu bir oda açılır, Açılan odada konuşabilirsin.\n | **2.** Özel <@&774609526526967821> verilir.\n |  **3.** Sadece <@&774609526526967821> Yararlanabileceği Kekler atılır. \n |**4.** Hem Booster'lara özel atılan Kekler hemde Normal atılan PUB Kek her türlü sizin lehinize, **Seçim senin, kaçırma derim.** \n |**NOT:** Bir Keki Altmış kişi kullanıyorsa, Booster kanalına atılan Keki sadece Aktif Olan Boosterlar kullanıyor yani On, Onbeş kişi, Priv gibi düşünülebilir. \n`)  
        .setThumbnail(client.user.avatarURL)
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL)
        .setImage("https://media1.tenor.com/images/33e617e91d27dc7743b80baab0ab24be/tenor.gif")  
    return message.channel.send(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['help'],
  permLevel: 0,
};

exports.help = {
  name: 'booster',
  description: '',
  usage: 'booster'
};