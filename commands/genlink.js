/*CMD
  command: /genlink
  help: Create a link for a single post
  need_reply: true
  auto_retry_time: 0
  answer: Please send the file or message you want to generate a link for.
  keyboard: 
  aliases: 
CMD*/
if (!user.telegramid || !User.getProperty("is_admin")) {
  Bot.sendMessage("This command is for admins only.");
  return;
}
User.setProperty("genlink_mode", true, "boolean");
Bot.sendMessage("Send the file to generate a link.");