const { Client, GatewayIntentBits, Partials } = require('discord.js');
const { token } = require('./config');
const commands = require('./commands');

const client = new Client({
  intents: [
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.DirectMessageReactions,
  ],
  partials: [Partials.Message, Partials.Channel, Partials.Reaction],
});

client.login(token);

client.on('ready', () => {
  console.log('Bot session started at:', new Date());
});

client.on('messageCreate', (message) => {
  if (message.client.bot) return;

  commands.forEach(({ regex, cb }) => {
    if (message.content.toLowerCase().match(regex)) {
      cb(message);
    }
  });
});
