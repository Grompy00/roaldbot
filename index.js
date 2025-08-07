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

const userYegMap = new Map();

const oneInNChance = (n) => {
  if (n <= 0) throw new Error("N must be a positive integer");
  return Math.floor(Math.random() * n) === 0;
};

client.on("messageCreate", (message) => {
  const user = message.author;

  // Nothing if the message was from Roald
  if (user.bot) {
    return;
  }

  // Respond with "Essentially"
  if (message.content.toLowerCase().includes("essentially")) {
    message.reply("essentially <:percyshine:837514010404323449>");
  }

  const existingYegsForUser = userYegMap.get(user.id);

  // Respond with "Go fuck yourself."
  if (message.content.trim().toLowerCase() === "yeg") {
    if (typeof existingYegsForUser !== "undefined") {
      // User has yegged before, increment their yeg count
      existingYegsForUser++;
      userYegMap.set(user.id, existingYegsForUser);
    } else {
      // User's first yeg, set them in the Map with a value of 1
      existingYegsForUser = 1;
      userYegMap.set(user.id, existingYegsForUser);
    }

    // For every yeg, the Go fuck yourself chance increases
    const goFuckYourselfChance = Math.max(1, 10 - existingYegsForUser);
    if (oneInNChance(goFuckYourselfChance)) {
      message.reply("Go fuck yourself.");
    }
  }

  const yegPenalty = 20;
  // Yeg response chance decreases for every time the user has yeg-d
  const yegChance = 1000 + existingYegsForUser * yegPenalty;
  const keepItKrunkChance = 250;

  // Respond with "Yeg"
  if (message.content.includes("") && oneInNChance(yegChance)) {
    message.reply("Yeg");
  }

  // Respond with "#KeepItKrunk"
  if (message.content.includes("") && oneInNChance(keepItKrunkChance)) {
    message.reply("#KeepItKrunk");
  }
});

client.login(process.env.TOKEN);
