const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(new Discord.MessageEmbed().setDescription(`Gerekli yetkin yok.`).setFooter(`C' Academy`).setColor("RANDOM").setTimestamp());
    let member = message.mentions.users.first() || client.users.cache.get(args.join(' '))
    if(!member) return message.channel.send(new Discord.MessageEmbed().setDescription(`Kullanıcı belirtmelisin.`).setFooter(`C' Academy`).setColor("RANDOM").setTimestamp());
    let vip = '792024461146587198'
    let vipuye = message.guild.member(member)
    let bReason = args.join(" ").slice(22);
    if (!bReason) bReason = 'Neden belirtilmemiş'
   let embed = new Discord.MessageEmbed()
   .setColor('RANDOM')
   .setDescription(`${message.author} tarafından ${bReason} sebebiyle ${member} üyesine mute atıldı.`)
    message.channel.send(embed)
    client.channels.cache.get('791723228212756511').send(embed)
    vipuye.roles.add(vip)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['sustur'],
    permLevel: 0
};

exports.help = {
    name: 'mute',
    description: 'onaylı',
    usage: 'onaylı'
};