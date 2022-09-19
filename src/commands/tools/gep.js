const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('gep')
        .setDescription('Google Earth Pro information!'),
    async execute(interaction, client) {
        await interaction.reply('**Download:** https://www.google.com/earth/versions/download-thank-you/?usagestats=0 \n \n**Ruler Tool (useful for measuring horizontal lengths like windows):** https://gyazo.com/d58446cec35cc504bb36b749346041a9\n\n**Elevation (useful for measuring vertical distances like house heights)** of where your mouse is hovering is shown in the bottom right corner. Use this to measure building heights by calculating the difference in elevation between the ground and the top of a building.\n\nPress CTRL+SHIFT+C to automatically **copy coordinates** of where your mouse is hovering.')
    }
}