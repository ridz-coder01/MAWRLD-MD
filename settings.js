const fs = require('fs');
const chalk = require('chalk');
const { version } = require("./package.json")
global.owner = '237678687593'
global.versi = version
global.namaOwner = "Kᴇᴠɪɴ ᴛᴇᴄʜ x Rɪᴅᴢ Cᴏᴅᴇʀ"
global.packname = 'ɴᴇᴍᴇsɪs ᴍᴅ'
global.botname = 'ɴᴇᴍᴇsɪs ᴍᴅ'
global.botname2 = 'ɴᴇᴍᴇsɪs ᴍᴅ'
global.tempatDB = 'database.json' 
global.linkOwner = "https://wa.me/237678687593"
global.linkGrup = "https://whatsapp.com/channel/0029Vb73EYZFXUujAoHFor1i"
global.delayJpm = 3000
global.delayPushkontak = 6000
global.linkSaluran = "https://whatsapp.com/channel/0029Vb73EYZFXUujAoHFor1i"
global.idSaluran = "120363404529319592@newsletter"
global.namaSaluran = "Airbyte Synergetic Labs 🏔️"
global.dana = "256741297054" 
global.gopay = " Ridz Coder"
global.siputzx = "https://api.siputzx.my.id" 
global.wm = "ᴘᴏᴡᴇʀᴇᴅ ʙʏ Kᴇᴠɪɴ ᴛᴇᴄʜ x Rɪᴅᴢ Cᴏᴅᴇʀ"
global.image = {
menu: "https://files.catbox.moe/qhl7st.png", 
welcome: "https://files.catbox.moe/qhl7st.png", 
allmenu: "https://files.catbox.moe/qhl7st.png",
reply: "https://files.catbox.moe/qhl7st.png", 
qris: "https://files.catbox.moe/qhl7st.png"
} 
global.mess = {
	owner: `🚫 *Sorry this command is for my owner*`,
	admin: `🚫 *An not an admin.*`,
	botAdmin: `🚫 *Am not an admin*`,
	group: `🚫 *This command is for group*`,
	private: `🚫 *Bot in private mode*`,
	prem: `🚫 *You're not a premium user*.`,
	wait: `⏳ *processing your request,wait.*`,
	error: `❌ *An error occured while processing your request*`,
	done: `✅ *congs,your request has been successfully processed*.`
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})