module.exports = (client) => {
  console.log("[Discord API]: Logged In As " + client.user.tag);
  client.user.setActivity(`AK PR's Music`, { type: "LISTENING" });
};
