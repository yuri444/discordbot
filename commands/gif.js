const fetch = require('node-fetch');

module.exports = {
  name: 'gif',
  description: 'this is a gif command',
  async execute(msg, args) {
    let tokens = msg.content.split(' ');
    let keywords = 'excited'; // standaard keyword
    if (tokens.length > 1) {
      keywords = tokens.slice(1, tokens.length).join(' ');
    }
    let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&imit=8i`;
    let response = await fetch(url);
    let json = await response.json();
    let index = Math.floor(Math.random() * json.results.length);
    msg.channel.send(json.results[index].url);
  },
};
