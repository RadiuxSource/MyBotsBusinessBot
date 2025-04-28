/*CMD
  command: /stats
  help: Show bot uptime and stats
  need_reply: false
  auto_retry_time: 0
  answer: Gathering bot statistics...
  keyboard: 
  aliases: 
CMD*/
if (!user.telegramid || !User.getProperty("is_admin")) {
  Bot.sendMessage("This command is for admins only.");
  return;
}
var uptime = Bot.getProperty("uptime") || "N/A";
var totalUsers = Bot.getProperty("totalUsers") || 0;
Bot.sendMessage("Uptime: " + uptime + "\nTotal users: " + totalUsers);