module.exports = {
  name: 'test',
  description: 'this is a test command',
  execute(msg, args) {
    msg.channel.send('123');
  },
};
