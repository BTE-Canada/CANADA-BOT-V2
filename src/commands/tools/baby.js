const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('baby')
        .setDescription('baby'),
    async execute(interaction, client) {
        await interaction.reply('https://media.discordapp.net/attachments/749820367056535552/850441829119950858/Dil.jpg')
    }
}