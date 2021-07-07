const randomPuppy = require('random-puppy');
const Discord = require('discord.js');

module.exports = {
  name: 'meme',
  async execute(msg, args) {
    const subReddits = ['dankmeme', 'meme', 'memes'];
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];

    const img = await randomPuppy(random);

    const embed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setImage(img)
      .setTitle(`this meme is from: r/${random} subreddit`)
      .setURL(`https://reddit.com/r/${random}`);

    msg.channel.send(embed);
  },
};
