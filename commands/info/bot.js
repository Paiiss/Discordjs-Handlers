const { MessageEmbed } = require('discord.js')
const { dev, version, prefix } = require('../../config.json')

module.exports = {
    name : 'bot',
    category : 'info',
    aliases : ['allen', 'info'],
    description : 'Information from this bot',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {
        const embed = new MessageEmbed()
        .setTitle(client.user.username)
        .setColor('#FF7878')
        .setDescription(`Sebuah bot yang di buat oleh pais untuk pembelajaran percodingan node.js / js\n\n[🔴 Invite Me Now](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands)`)
        .setThumbnail(client.user.displayAvatarURL({dynamic: true,}))
        .addField("Developer", `\`${dev}\``)
        .addField("Version", `\`${version}\``)
        .addField('Prefix', `\`${prefix}\``)
        .setFooter(`Command used by : ${message.author.username}`, message.author.displayAvatarURL({dynamic: true,}))
        await message.channel.send(embed)

    }
}