//#ENJOY BRO😍
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Kermd237@gmail.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Kgtech-cmr/KERM_MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/e7ce3b4767a99606edd67.jpg";
global.devs = "https://wa.me/237650564445 , https://wa.me/237656520674";
global.sudo = process.env.SUDO || "0505601311";
global.owner = process.env.OWNER_NUMBER || "49143922";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "fals";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kerm-session-39mi.onrender.com/wasiqr";

global.SESSION_ID =eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUtPT0YyUlNadzdvVFF0MVBodUExYXdGNWpPZE4yR1hGYkxTZ3Z5QjNtUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSEV3d3gvcXRVdmJpQmMwdThkY3BDcHoyOVJWMmFJVlhZMXJlN1VzOUhVdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjQVIwbWlXcVpRNk04SHozRmNsemxGTjBQUlgvcUIyMjJmVkViVmZmL0gwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnbHcwdGd5Ym9ENzdFbXgzK254MjVIcU5yakJST3k3Vmh6WUhNSytTS0VvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktQeGMwMVVCZ3IwWVlhc2RaTFNNQ0dOZklCQmZndk5vaTI4TGdUd2tCR0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InV6Z2h4c0RLb28xZFVyV1RhUzJyOEs1VmZpNWlUOXkyY0hmUjdkbnd0bEk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSU1FK2syc2d0QUdRNE9sOEk4blJzcE5KUHo0SmJadktWaDUybmptRFlHUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaDFIa1FSdEsvNnJpNm5qei9zN1NMRk9pdTFrVCtqNUl0WVk3azVvaTFudz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZieDcvbUxPL0ZCT3ZjSm9zQlprWllPR3oxMUowc0tFM3UxV0FMd3VPN2VxNW05d0lGKzQxbGJWUUlyVS9EMUFkbElCRnVjOVBtV05QZEN4QU1SYkFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYsImFkdlNlY3JldEtleSI6Ilp5ckJYM3NIaHI2blQ0SkY0b2ZwRVIwblY3cnNhWW4xTDhzZmxoZE14SEk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjdaUlNTN040UTNLTjR4ZWpRZkhUVXciLCJwaG9uZUlkIjoiZTI2MDBlZTMtY2FmNi00N2Y5LWIxMmUtNGZmMmYyZGQ2YzMxIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBIZHhXZWUxakFxQ2JTUTRUdXdVRXVtVEtEST0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0xUWDRVakhNSld2ejNhWW04cFNGeVlteVdjPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTGZOek5zR0VKdk5qcllHR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiV3hCTFEraW9aemZlYnE0ZHcxUDcyaWJsYXFhTGZ1Y2hGNVZ2Q28wck4xaz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiUXZFZEEwYkF3TzBocjhhckZZS0k0ZFo3VTNRbHNwQ2VmY0tXUWd4SW5xU1ZGZWpJR2RnZlY2blpPOWNTRmlkWE9ERUd4Y2xmWlRKaXFBaGx4cElqQ2c9PSIsImRldmljZVNpZ25hdHVyZSI6IkpFYmVxeDJGam91ZU9jVnFsRTlZSmZ3c09vQU8wVXNESWNMS3B2NC80ekF2VXlycW1vcyswSkw1UHFrN2NMMzBkWUZydm5aTmdJUE1YeC8vWkdSbkR3PT0ifSwibWUiOnsiaWQiOiI1MDk0OTE0MzkyMjo0QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjQyNDA0MjgwMDEyODQ3OjRAbGlkIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjUwOTQ5MTQzOTIyOjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVnNRUzBQb3FHYzMzbTZ1SGNOVCs5b201V3FtaTM3bklSZVZid3FOS3pkWiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI0MDk4MjMxLCJsYXN0UHJvcEhhc2giOiI0Q3E0RWsiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQURaUyJ9

  process.env.SESSION_ID ||
  "PUT YOUR SESSION HERE"
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || "!",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜ KG TECH⌝☜`",
  author: process.env.PACK_AUTHER || "💀𝐺𝛩𝑇𝛥𝑅 𝑊𝛩𝑅𝐿𝐷👑",
  packname: process.env.PACK_NAME || "Kerm-MD-V2",
  botname: process.env.BOT_NAME || "*ᵏᵍ┘𝙺𝙴𝚁𝙼_𝙼𝙳_𝚅𝟸𖤐*",
  ownername: process.env.OWNER_NAME || "𓄂⍣⃝ 𝙶𝙾𝚃𝙰𝚁𝄟✮͢≛𝚆𝙾𝚁𝙻𝙳𝄟✮⃝👑
",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "Kerm-md-v2").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
