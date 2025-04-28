/*CMD
  command: /download
  help: Download a file
  need_reply: true
  auto_retry_time: 0
  answer: Please provide a file link to download.
  keyboard: 
  aliases: 
CMD*/
User.setProperty("command", "/download", "string");
Bot.runCommand("/process_download");