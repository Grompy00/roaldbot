require('dotenv').config();
const {Client, IntentsBitField} = require('discord.js')
const client = new Client({

    intents:[
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ]
})

//Respond with "Essentially"
client.on('messageCreate', (message) => {
    if(message.author.bot){
        return
    }
    if (message.content.includes("essentially")) {
        message.reply('essentially :percyshine:')
    }
})

client.on('messageCreate', (message) => {
    if(message.author.bot){
        return
    }
    let randomNum = Math.floor(Math.random() * 1000)
    if(message.content.includes("") && randomNum === 99){
        message.reply('Yeg')
    }

})
client.login(process.env.TOKEN
    
);

