module.exports = {
  name: 'test',
  description: 'this is a test command',
  execute(msg, args) {
    msg.channel.send('test 1, 2, 3');
  },
};
