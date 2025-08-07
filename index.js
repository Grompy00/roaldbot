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

const oneInNChance = (n) => {
    if (n <= 0) throw new Error("N must be a positive integer");
    return Math.floor(Math.random() * n) === 0;
  }

client.on("messageCreate", (message) => {
  // Nothing if the message was from Roald
  if (message.author.bot) {
    return;
  }

  // Respond with "Essentially"
  if (message.content.toLowerCase().includes("essentially")) {
    message.reply("essentially <:percyshine:837514010404323449>");
  }

  // Respond with "Go fuck yourself."
  if (message.content.trim().toLowerCase() === "yeg") {
    if (oneInNChance(10)) {
      message.reply("Go fuck yourself.");
    }
  }

  // Respond with "Yeg"
  if (message.content.includes("") && oneInNChance(1000)) {
    message.reply("Yeg");
  }

  // Respond with "#KeepItKrunk"
  if (message.content.includes("") && oneInNChance(250)) {
    message.reply("#KeepItKrunk");
  }
});

client.login(process.env.TOKEN);
