const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "",
    PREFIX: process.env.PREFIX || ".",
    BOT_NAME: process.env.BOT_NAME || "MAWRLD MD",
    MODE: process.env.MODE || "public",
    LINK_WHITELIST: "youtube.com,github.com",
 LINK_WARN_LIMIT: 3,
    LINK_ACTION: "mute",
    AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
    AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY MAWRLD MD🔮*",
   WELCOME: process.env.WELCOME || "true",
   ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
    ANTI_LINK: process.env.ANTI_LINK || "true",
    MENTION_REPLY: process.env.MENTION_REPLY || "false",
    MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/qwpimr.png",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/qwpimr.png",
    LIVE_MSG: process.env.LIVE_MSG || 
`> ʙᴏᴛ ɪs sᴘᴀʀᴋɪɴɢ ᴀᴄᴛɪᴠᴇ ᴀɴᴅ ᴀʟɪᴠᴇ

> ɢɪᴛʜᴜʙ : github.com/ridz-coder01/MARWLD-MD`,

    STICKER_NAME: process.env.STICKER_NAME || "Rɪᴅᴢ Cᴏᴅᴇʀ❦",
    CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
    CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,🥶,🫠,🔮",
    DELETE_LINKS: process.env.DELETE_LINKS || "true",
    OWNER_NUMBER: process.env.OWNER_NUMBER || "263714732501",
    OWNER_NAME: process.env.OWNER_NAME || "Rɪᴅᴢ Cᴏᴅᴇʀ❦",
    DESCRIPTION: process.env.DESCRIPTION || "*© 𝙱𝚁𝙾𝚄𝙶𝙷𝚃 𝚃𝙾 𝚈𝙾𝚄 𝙱𝚈 𝙼𝙰𝚆𝚁𝙻𝙳 𝙼𝙳*",
    READ_MESSAGE: process.env.READ_MESSAGE || "false",
    AUTO_REACT: process.env.AUTO_REACT || "false",
    ANTI_BAD: process.env.ANTI_BAD || "false",
     ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
    AUTO_STICKER: process.env.AUTO_STICKER || "false",
    AUTO_REPLY: process.env.AUTO_REPLY || "false",
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
 PUBLIC_MODE: process.env.PUBLIC_MODE || "false",
    AUTO_TYPING: process.env.AUTO_TYPING || "false",
    READ_CMD: process.env.READ_CMD || "false",
DEV: process.env.DEV || "263714732501",
    ANTI_VV: process.env.ANTI_VV || "true",
    ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox",
    AUTO_RECORDING: process.env.AUTO_RECORDING || "false",
   VERSION: process.env.version || "1.0.0",

    START_MSG: process.env.START_MSG || 
`*Hᴇʟʟᴏ ᴛʜᴇʀᴇ  𝙼𝙰𝚆𝚁𝙻𝙳 𝙼𝙳 ᴄᴏɴɴᴇᴄᴛᴇᴅ! 👋🏻* 

- *ʏᴏᴜʀ ʙᴏᴛ ᴘʀᴇғɪx: ➡️[ . ]*
> - ʏᴏᴜ ᴄᴀɴ ᴄʜᴀɴɢᴇ ᴜʀ ᴘʀᴇғɪx ᴜsɪɴɢ ᴛʜᴇ .ᴘʀᴇғɪx ᴄᴏᴍᴍᴀɴᴅ

> ᴅᴏɴᴛ ғᴏʀɢᴇᴛ ᴛᴏ sʜᴀʀᴇ, sᴛᴀʀ & ғᴏʀᴋ ᴛʜᴇ ʀᴇᴘᴏ ⬇️ 
https://github.com/ridz-coder01/MAWRLD-MD

> © 𝙱𝚁𝙾𝚄𝙶𝙷𝚃 𝚃𝙾 𝚈𝙾𝚄 𝙱𝚈 𝚁𝙸𝙳𝚉 𝚃𝙴𝙲𝙷 𝙸𝙽𝙲 🇺🇬🇿🇼`
};
