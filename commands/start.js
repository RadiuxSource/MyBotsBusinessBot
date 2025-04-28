const { Markup } = require("telegraf");

module.exports = {
  name: "start",
  description: "Start command",
  execute(ctx) {
    const keyboard = Markup.keyboard([
      ["/help", "/upload"],
      ["/download"]
    ]).resize();

    ctx.reply(
      "Welcome to MyBotsBusinessBot! Use the buttons below to navigate.",
      keyboard
    );
  }
};