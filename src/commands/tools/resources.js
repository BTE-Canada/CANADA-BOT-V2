const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('resources')
        .setDescription('Some useful builder resources!'),
    async execute(interaction, client) {
        await interaction.reply('a')
    }
}