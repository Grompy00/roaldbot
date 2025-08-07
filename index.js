require("dotenv").config();
const { Client, IntentsBitField } = require("discord.js");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on("messageCreate", (message) => {
  // Nothing if the message was from Roald
  if (message.author.bot) {
    return;
  }

  // Respond with "Essentially"
  if (message.content.toLowerCase().includes("essentially")) {
    message.reply("essentially <:percyshine:837514010404323449>");
    return;
  }

  let randomNum = Math.floor(Math.random() * 1000);

  // Respond with "Go fuck yourself."
  if (message.content.trim().toLowerCase() === "yeg") {
    if (randomNum % 10 === 2) {
      message.reply("Go fuck yourself.");
      return;
    }
  }

  // Respond with "Yeg"
  if (message.content.includes("") && randomNum <= 1) {
    message.reply("Yeg");
    return;
  }

  // Respond with "#KeepItKrunk"
  if (message.content.includes("") && randomNum > 1 && randomNum <= 5) {
    message.reply("#KeepItKrunk");
    return;
  }
});

client.login(process.env.TOKEN);
