/*CMD
  command: /batch
  help: Create a link for multiple posts
  need_reply: true
  auto_retry_time: 0
  answer: Please send the files or messages you want to batch together. When done, type /done.
  keyboard: /done
  aliases: 
CMD*/
if (!user.telegramid || !User.getProperty("is_admin")) {
  Bot.sendMessage("This command is for admins only.");
  return;
}
User.setProperty("batch_mode", true, "boolean");
Bot.sendMessage("Batch mode enabled. Send your files now:");
