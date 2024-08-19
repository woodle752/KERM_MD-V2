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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.devs = "https://wa.me/237650564445 , https://wa.me/237656520674";
global.sudo = process.env.SUDO || 
l.owner = process.env.OWNER_NUMBER || "49143922";

global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/e7ce3b4767a99606edd67.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kerm-session-39mi.onrender.com/wasiqr";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOE5Qci9ONGNuY2NlNThaalJHS2E5Slp6UHk1UHMydkQ5T254eUUvS2UwOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRnp1dW9McFU4eTFpTGNWUG85dTVyemI4NW56Wm1mLzJ1aCs5c3pOdldWND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwQjN1T2dQYzlqSVkrSlhOSEZiK0hJYUhvVDBjNndreHdjVUJlTVFZYW1jPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwSXRJUmZOblNEZ1R1aVg0ZCs1YUV1cDd0ZEtCWVo2bFlRZmw2Zi9UWTNFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJGaTZZMU8yNEh2RElJb01wN3dONVRxMVhIbW1vQytHWU5kVFR5ZVJQbGM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlA1ZlVwdk1uNmVacUJXS1MxazAxZDVFcHN4UW84RkJJdG5kY0dHNmFWbDA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUdOMWMrZXFWc05Td3VCZ0hZTjh4c1ZBR1VUK0dCOWlpdC93M1R4Q2JrQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQnkvcFFmSVExcXlRMkZ6RHZLMTVCTkhNdStzZXZlMCs0YzhrSEo0ei96QT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFvZEYzeU1LYXNGWlZrQ1FzK2dLVitkMVRLaCtRaGRreDBsUWhETGZnNFJqV3h2cVZzN1dOQ2hPQlRxb2FiS2pPQVRqWmh3d1p3UEM2alN3VlExN2pnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE4LCJhZHZTZWNyZXRLZXkiOiJvZnd0T1huZHFTNVptdU5SdnhIRUtrUjhpUTJ1dlJuSlN2TVlRY3dJTENrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjUwOTQ5MTQzOTIyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6Ijg2NDQ5QzAwNzVFQTZCQzkwM0NEQTBBQzI1RkQ3NjY2In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjQwNzY3Mjd9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjJCbXYyenBwUXY2eFBXcmVSWTduYkEiLCJwaG9uZUlkIjoiZGFiZTA1YjAtYWJmYy00ZWJkLWEyMTMtZTNhZDdmYmVjMjIyIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imh1bHdWMGNUVEVNZWd6RVNyVGE5N0VoS0U0OD0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUFNadjV5SnVLbDhUVDBGQXhuT2tDcHZxR1NRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTGZOek5zR0VLYWxqYllHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiV3hCTFEraW9aemZlYnE0ZHcxUDcyaWJsYXFhTGZ1Y2hGNVZ2Q28wck4xaz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiRll0amZKdFFnMEx6OTFteUNzK3Y1NVBJdng1QXBldlRrSXVvU2hSaXJpV3ZqOGlmb29QYnQrWCtXcWtUYW5XZi91VkxXYnV1L0tmQ3pvZFpWT2FmQnc9PSIsImRldmljZVNpZ25hdHVyZSI6Imo5NEh6MkpsN2NHYWFYN09KbHJKVnFTdzJHYU1hRHQ1WW1kL3dqb1RjWDByelVyT09reXBRM0Q5SzdNejhsdlBYZmxmcjUyVFlnV3c1Z2xHVVRkbmdBPT0ifSwibWUiOnsiaWQiOiI1MDk0OTE0MzkyMjozQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjQyNDA0MjgwMDEyODQ3OjNAbGlkIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjUwOTQ5MTQzOTIyOjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVnNRUzBQb3FHYzMzbTZ1SGNOVCs5b201V3FtaTM3bklSZVZid3FOS3pkWiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI0MDc2NzIyLCJsYXN0UHJvcEhhc2giOiI0Q3E0RWsiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQURaUyJ9

module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || "!",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜ KG TECH⌝☜`",
  author: process.env.PACK_AUTHER || "KG TECH",
  packname: process.env.PACK_NAME || "Kerm-MD-V2",
  botname: process.env.BOT_NAME || "*ᵏᵍ┘💀𝐺𝛩𝑇𝛥𝑅 𝑊𝛩𝑅𝐿𝐷👑
*",
  ownername: process.env.OWNER_NAME || "☞⌜ KG TECH⌝☜",
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
