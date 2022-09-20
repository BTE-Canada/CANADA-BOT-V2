const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("review")
    .setDescription("Trial Review command.")
    .addStringOption((option) =>
      option
        .setName("submissionid")
        .setDescription("Submission message ID.")
        .setRequired(true)
    )
    .addBooleanOption((option) =>
      option
        .setName("accept")
        .setDescription("Accept or Deny this trial?")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("feedback")
        .setDescription("Send this submission feedback.")
        .setRequired(false)
    ),
  async execute(interaction, client) {
    if (!interaction.member.roles.cache.has("812569861317459968"))
      return interaction.reply(
        "You don't have permission to review trial builds!"
      );

    const options = interaction.options;

    const submissionID = await options.getString("submissionid");

    console.log(`Submission ID is: ` + submissionID);

    if (isNaN(submissionID) || submissionID.length !== 19) {
      return interaction.reply(
        "That isn't a valid message ID! (Example: 1021270419833094214)"
      );
    }

    const trialSubmitChannel = await client.channels.fetch(
      "1011112815714648195"
    );
    let submissionMsg = await trialSubmitChannel.messages.fetch(submissionID);
    const reviewer = interaction.user.tag;
    const feedback = await options.getString("feedback");
    const member = submissionMsg.author.id;
    const memberPlus = await interaction.guild.members.fetch(member);

    console.log(member)

    await interaction.reply("Processing...");

    try {
      console.log("1");

      if (options.getBoolean("accept") === true) {
        if (submissionMsg.reactions.cache.has("✅")) {
          return interaction.followUp("That one has already been reviewed!");
        } else {
          interaction.followUp(
            `**Reviewed!** You have accepted this trial submission. ` +
              submissionMsg.author.tag +
              ` has been ranked to **novice builder**!`
          );

          console.log("5");
          member.send(
            `You have been **accepted** into our build team! Your rank is now **Novice Builder**.\nYou can build anywhere now as long as you follow our builder system, which can be found in our discord. Welcome aboard!\nReviewer: ` +
              reviewer +
              ` Feedback ` +
              feedback
          );
          console.log("6");
          submissionMsg.react("✅");

          client.channels.cache
            .get("858028703723290634")
            .send(
              `${member.tag}'s trial build was accepted by ` + reviewer + `.`
            );

          const noviceRole = interaction.guild.roles.cache.get("692801758761844746")
          memberPlus.roles.add(noviceRole)
          console.log('successfully reviewed build.')
        }
      }

      if (options.getBoolean("accept") === false) {
        if (submissionMsg.reactions.cache.has("✅")) {
          return interaction.followUp("That one has already been reviewed!");
        } else {
          interaction.followUp(
            `**Reviewed!** You have denied this trial submission. Feedback: ` +
              feedback
          );
          console.log("10");
          member.send(
            `Your trial build has been **denied**. But don't worry, this happens to most people! Use the feedback given to improve your build, then re-submit again.\nReviewer: ` +
              reviewer +
              ` Feedback: ` +
              feedback
          );
          console.log("11");
          client.channels.cache
            .get("858028703723290634")
            .send(
              `${member.tag}'s trial build was declined by ` +
                reviewer +
                `. Feedback: ` +
                feedback
            );
          submissionMsg.react("❌");
          console.log('successfully reviewed build.')
        }
      }
      console.log("7");
    } catch (err) {
      interaction.followUp(`There was an error while using this command!`);
    }
  },
};
