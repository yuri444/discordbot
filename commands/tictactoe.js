const { tictactoe } = require('reconlx');

module.exports = {
  name: 'tictactoe',
  async execute(msg, args) {
    const member = msg.mentions.members.first();
    if (!member)
      return msg.channel.send('@ een gebruiker om tictactoe te spelen');

    new tictactoe({
      player_two: member,
      message: msg,
    });
  },
};
