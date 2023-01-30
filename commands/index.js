const { sayings } = require('../assets/data.json');
const { translate } = require('../utils');

const commands = [
  {
    regex: /(?<!\S)!advice(?!\S)/,
    cb: (message) => {
      message.reply(sayings[Math.floor(Math.random() * sayings.length)]);
    },
  },
  {
    regex: /(?<!\S)!translate to=\w{4,} \w{1,}(?!\S)/,
    cb: async (message) => {
      const messageContent = message.content.split(' ');
      const language = messageContent
        .splice(0, 2)[1]
        .replace('to=', '')
        .toLowerCase();
      const sentence = messageContent.join(' ');

      const translation = await translate(language, sentence);
      message.channel.send(translation);
    },
  },
];

module.exports = commands;
