const { MessageEmbed } = require("discord.js");

exports.run = async (client, message) => {
  const commands = `connect\`\` - joins the voice channel you are in
   disconnect\`\` - leaves the voice channel you are in
   play [song name or youtube url]\`\` - plays songs from youtube
   pause\`\` - pauses currently playing songs in the server
   resume\`\` - resumes paused songs in the server
   queue\`\` - shows the song queue of the server
   skip\`\` - skips to the next song in the queue
   skipto [valid integer]\`\` - skips multiple songs from the queue
   stop\`\` - stops the song and clears the queue
   volume [valid integer 1-100]\`\` - adjusts volume & shows volume
   songinfo\`\` - shows the currently playing song info
   lyrics\`\` - gets lyrics for currently playing song
   shuffle\`\` - shuffles and randomizes the queue
   loop\`\` - enable/disable loop for the currently playing song
   remove [valid integer]\`\` - removes a song from the queue
   help\`\` - shows you this message about all commands and their usages`;

  const revised = commands
    .split("\n")
    .map((x) => "• " + "``" + client.config.prefix + x.trim())
    .join("\n");

  message.channel.send(
    new MessageEmbed()
      .setAuthor(
        "AquaFrost Help",
        "https://cdn-icons-png.flaticon.com/512/2095/2095982.png"
      )
      .setColor("FFFBFB")
      .setTimestamp()
      .setDescription(revised)
  );
};
