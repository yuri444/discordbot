const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

client.on('ready', () => {
  console.log('The client is online! ✅');
});

client.on('message', (msg) => {
  if (msg.author.bot) return;
  if (msg.content === 'ping') msg.channel.send('pong');
});

client.login(config.token);
