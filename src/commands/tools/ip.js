const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ip')
        .setDescription('Sends our server IP in chat.'),
    async execute(interaction, client) {
        await interaction.reply('Our server IP is **btecanada.net**! It currently runs on **1.12.2**. Make sure to download the modpack for a better experience!')
    }
}