const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('friyay')
        .setDescription('Is it friday????'),
    async execute(interaction, client) {
        const d = new Date()
        const day = d.getDay()
        if (day === 5) {
            await interaction.reply('OMG OMG OMG OMG OMG OMG OMG OMG!!!! :scream_cat:')
            await interaction.reply("IT'S ***FRIDAY***!!!!!!!!!!!!!!!!!!! YAYAYAYAYAYAYAYAYAYAY")
            await interaction.reply("<@306529453826113539><@306529453826113539><@306529453826113539><@306529453826113539><@306529453826113539>")
        } else {
            let m = ''
            switch(day) {
                case 0:
                    m = 'Sunday'
                    break
                case 1:
                    m = 'Monday'
                    break
                case 2:
                    m = 'Tuesday'
                    break
                case 3:
                    m = 'Wednesday'
                    break
                case 4:
                    m = 'Thursday'
                    break
                case 6:
                    m = 'Saturday'
                    break
                default:
                    m = "Error!"
                    break
            }
            let daysLeft = 5 - day
            if (day === 6) daysLeft = 6
            await interaction.reply(`:pleading_face: Sowwy, it's actually ${m}! There's still *${daysLeft} days* left before friday 😦`)
        }
    }
}