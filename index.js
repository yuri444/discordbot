const Discord = require('discord.js');
const client = new Discord.Client();
// const config = require('./config.json');

const prefix = '!';
const fs = require('fs');

client.commands = new Discord.Collection();
const commandFiles = fs
  .readdirSync('./commands/')
  .filter((file) => file.endsWith('.js'));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.on('ready', () => {
  console.log('The client is online! ✅');
});

client.on('message', (msg) => {
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;

  const args = msg.content.slice(prefix.length).split(' ');
  const command = args.shift().toLowerCase();

  if (command === 'test') client.commands.get('test').execute(msg, args);
  else if (command === 'gif') client.commands.get('gif').execute(msg, args);
  else if (command === 'image') client.commands.get('image').execute(msg, args);
});

client.login(process.env.TOKEN);
// client.login(config.token);
