const { prefix } = require('../../config.json')
module.exports = {
    name : 'say',
    category : 'Fun',
    aliases : ['say'],
    description : 'Say',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

     run : async(client, message, args) => {
        // const msg = await message.channel.send(`Cek`)
        // console.log(msg)
        if (!args[0]) return message.reply(`Enter query text, for example: ${prefix}say handsome pais`)
        message.channel.bulkDelete(1);
        message.channel.send(message.content.slice(5))
     }
}