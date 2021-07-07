const Discord = require('discord.js');

module.exports = {
  name: 'rpc',
  description: 'rock paper scissors',
  async execute(msg, args) {
    let embed = new Discord.MessageEmbed()
      .setTitle('Steen Papier Schaar')
      .setDescription('Maak je keuze');
    // .setTimestamp();
    let message = await msg.channel.send(embed);
    await message.react('⛰️');
    await message.react('✂️');
    await message.react('📰');

    const filter = (reaction, user) => {
      return (
        ['⛰️', '✂️', '📰'].includes(reaction.emoji.name) &&
        user.id === msg.author.id
      );
    };
    const choices = ['⛰️', '✂️', '📰'];
    const me = choices[Math.floor(Math.random() * choices.length)];
    msg
      .awaitReactions(filter, { max: 1, time: 60000, error: ['time'] })
      .then(async (collected) => {
        const reaction = collected.first();
        let result = new Discord.MessageEmbed()
          .setTitle('Result')
          .addField('Your Choice', `${reaction.emoji.name}`)
          .addField('Bots choice', `${me}`);
        await msg.edit(result);

        if (
          (me === '⛰️' && reaction.emoji.name === '✂️') ||
          (me === '✂️' && reaction.emoji.name === '📰') ||
          (me === '📰' && reaction.emoji.name === '⛰️')
        ) {
          msg.reply('Jij hebt verloren');
        } else if (me === reaction.emoji.name) {
          return msg.reply('Gelijkspel');
        } else {
          return msg.reply('Jij hebt gewonnen!');
        }
      })
      .catch((collected) => {
        msg.reply('game gecanceld, je had niet optijd gereageert');
      });
  },
};

