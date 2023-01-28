require('dotenv').config();

module.exports = {
  token: process.env.DISCORD_API_KEY,
  openWeatherToken: process.env.OPEN_WEATHER_API_KEY,
};
