const { MessageEmbed } = require("discord.js");

exports.run = async (client, message, args) => {
  const channel = message.member.voice.channel;
  if (!channel)
    return message.channel.send(
      "You must Join a voice channel before using this command!"
    );

  let queue = message.client.queue.get(message.guild.id);

  if (!args[0])
    return message.channel.send(
      new MessageEmbed()
        .setAuthor(
          "Master Volume Controller",
          "https://cdn-icons-png.flaticon.com/512/2095/2095954.png"
        )
        .setColor("BLUE")
        .setDescription("**Current volume is " + queue.volume + " **")
    );

  if (args[0] > 100)
    return message.channel.send(
      new MessageEmbed()
        .setAuthor(
          "Master Volume Error",
          "https://cdn-icons-png.flaticon.com/512/2095/2095954.png"
        )
        .setColor("RED")
        .setDescription("**Volume cannot exceed 100 :x: **")
    );

  queue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100);
  queue.volume = args[0];
  message.channel.send(
    new MessageEmbed()
      .setAuthor(
        "Master Volume Controller",
        "https://cdn-icons-png.flaticon.com/512/2095/2095954.png"
      )
      .setColor("BLUE")
      .setDescription("**Volume set to " + args[0] + " :white_check_mark: **")
  );
};
