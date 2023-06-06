const { Client, Events, GatewayIntentBits } = require("discord.js");
require("dotenv/config");
const token = process.env.TOKEN;

// Create a new client instance
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, (c) => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
});

// Keywords to match
const keywords = ["Hello Kirat", "Hey Kirat", "Hi Kirat"];

client.on("messageCreate", (message) => {
  // console.log(message);

  // return if the author is the bot itself
  if (message.author.bot) return;

  keywords.map((keyword) => {
    // Check if the message content matches a specific pattern
    if (message.content.includes(keyword)) {
      message.channel.send(
        `${message.author} SSSHHH! Do not say that again and again`
      );
    }
  });
});

client.login(token);
