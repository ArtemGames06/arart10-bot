import * as dotenv from 'dotenv';
dotenv.config();

import { Client, Intents } from 'discord.js';
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_PRESENCES] });

client.on('ready', () => {
	console.log(`Запустился бот ${client.user.tag}!`);
});

client.login(process.env.TOKEN);
