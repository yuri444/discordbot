const Discord = require('discord.js');
const { DiscordAPIError } = require('discord.js');

module.exports = {
  name: 'waarzegger',
  async execute(msg, args) {
    if (!args[0]) return msg.reply('Stel je vraag, ik voorspel de toekomst');
    let replies = [
      'ja',
      'nee',
      'natuurlijk niet',
      'maar natuurlijk',
      'sowieso',
    ];

    let result = Math.floor(Math.random() * replies.length);
    let question = args.slice().join(' ');

    let ballembed = new Discord.MessageEmbed()
      .addField('Jouw Vraag:', question)
      .addField('Mijn Antwoord:', replies[result]);

    msg.channel.send(ballembed);
  },
};
