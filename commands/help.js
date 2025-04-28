module.exports = {
  name: "help",
  description: "Help command",
  execute(ctx) {
    ctx.reply("Available commands:\n/start - Start the bot\n/help - Show this help message\n/upload - Upload a file\n/download - Download a file");
  }
};