require('dotenv').config();

const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_PRESENCES] });

client.on('ready', () => {
	console.log(`Запустился бот ${client.user.tag}!`);
});

client.on("messageCreate", (message) => {
	 if (message.content == "hi"){
		 message.reply("Hello World!")
	 }
})

client.login(process.env.TOKEN);
