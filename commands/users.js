/*CMD
  command: /users
  help: View bot statistics
  need_reply: false
  auto_retry_time: 0
  answer: Gathering user statistics...
  keyboard: 
  aliases: 
CMD*/
if (!user.telegramid || !User.getProperty("is_admin")) {
  Bot.sendMessage("This command is for admins only.");
  return;
}
var totalUsers = Bot.getProperty("totalUsers") || 0;
Bot.sendMessage("Total users: " + totalUsers);