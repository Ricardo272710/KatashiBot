/* 
# Créditos a https://github.com/Undefined17
•• @Azami19 ••
*/
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import fetch from 'node-fetch'
let handler = async (m) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = 'https://telegra.ph/file/225955da888d3fab2f641.jpg'
let name = await conn.getName(who)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw `${mg} ${mid.smsconvert10}`
let media = await q.download()
let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
let link = await (isTele ? uploadImage : uploadFile)(media)
let caption = `🛑 ${mid.smsYT4}:\n${link}\n🥏 ${mid.smsconvert11}: ${media.length}\n🚀 ${mid.smsconvert12}: ${isTele ? '𝙉𝙊 𝙀𝙓𝙋𝙄𝙍𝘼' : '𝘿𝙀𝙎𝘾𝙊𝙉𝙊𝘾𝙄𝘿𝙊'}\n🔰 ${mid.smsconvert13}: ${await shortUrl(link)}`
conn.reply(m.chat, caption, m, { contextInfo: {externalAdReply :{mediaUrl: md, mediaType: 2, title: wm, body: botdate, thumbnail: 'https://telegra.ph/file/225955da888d3fab2f641.jpg', sourceUrl: 'https://chat.whatsapp.com/LivATkKnj6SGF67bCtpPoy' }}})}
handler.help = ['tourl']
handler.tags = ['herramientas']
handler.command = /^(tourl|upload)$/i
export default handler

async function shortUrl(url) {
let res = await fetch(`https://tinyurl.com/api-create.php?url=${url}`)
return await res.text()
}
