require('dotenv').config(); // Load environment variables from a .env file

const { Client, GatewayIntentBits, ActivityType } = require('discord.js');
const express = require('express');

const app = express();
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
	],
});

// Express server to keep the bot alive
app.get('/', (req, res) => {
	res.send('Bot is running!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});

// Event Listener for Bot Ready
client.once('ready', () => {
	console.log('Bot is ready!');

	// Change bot status periodically
	const statuses = [
		{
			name: '🦄Junicorn bot weryfikacyjny.',
			type: ActivityType.Streaming,
			url: 'https://www.youtube.com/channel/UCfy1TWZVuP9D96PY69_zDoA',
		},
		{ name: 'Jedyny w swoim rodzaju', type: ActivityType.Playing }
	];

	let currentIndex = 0;
	setInterval(() => {
		const status = statuses[currentIndex];
		client.user.setActivity(status);
		currentIndex = (currentIndex + 1) % statuses.length;
	}, 20000); // Change status every 20 seconds
});

// Login the bot
client.login(
	'MTIzNjM5NzE4MTg0MjM2MjQxOA.Gvezfx.sy7vGU7SMwymYixv00pu5SZZGaZ_2iV3GSGoGE'
);
