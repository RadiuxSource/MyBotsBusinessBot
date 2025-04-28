/*CMD
  command: /broadcast
  help: Broadcast a message to all users
  need_reply: true
  auto_retry_time: 0
  answer: Please send the message to broadcast to all users.
  keyboard: 
  aliases: 
CMD*/
if (!user.telegramid || !User.getProperty("is_admin")) {
  Bot.sendMessage("This command is for admins only.");
  return;
}
User.setProperty("broadcast_mode", true, "boolean");
Bot.sendMessage("Send the message to broadcast.");