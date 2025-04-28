const fs = require("fs");

module.exports = {
  name: "upload",
  description: "Upload a file",
  execute(ctx) {
    if (ctx.message.document) {
      const fileId = ctx.message.document.file_id;
      ctx.telegram.getFileLink(fileId).then((fileLink) => {
        ctx.reply(`File uploaded successfully! Access it here: ${fileLink}`);
      }).catch((err) => {
        ctx.reply("Failed to upload the file.");
        console.error(err);
      });
    } else {
      ctx.reply("Please attach a file to upload.");
    }
  }
};