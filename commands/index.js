const { sayings } = require('../assets/data.json');
// const { openWeatherToken } = require('../config');

const commands = [
  {
    regex: /(?<!\S)!advice(?!\S)/,
    cb: (message) => {
      message.reply(sayings[Math.floor(Math.random() * sayings.length)]);
    },
  },
  // {
  //   regex: /(?<!\S)!weather(?!\S)/,
  //   cb: (message) => {},
  // },
];

module.exports = commands;
