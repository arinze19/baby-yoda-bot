const { sayings } = require('../assets/data.json');

const commands = [
  {
    regex: /(?<!\S)!advice(?!\S)/,
    cb: () => sayings[Math.floor(Math.random() * sayings.length)],
  },
];

module.exports = commands;
