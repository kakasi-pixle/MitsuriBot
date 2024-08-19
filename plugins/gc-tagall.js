let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
  if (!(isAdmin || isOwner)) {
  global.dfail('admin', m, conn)
  throw false
  }
  let pesan = args.join` `
  let oi = `*𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝘼𝙎:* ${pesan}`
  let teks = `*𝘼𝘾𝙏𝙄𝙑𝙀𝙉𝙎𝙀 𝙑𝙍𝙂𝙎 😝*\n\n ${oi}\n\n➥ _*Mencıón Generαl:*_\n`
  for (let mem of participants) {
  teks += `➤⭐@${mem.id.split('@')[0]}\n`}
  teks += `└ *𝖬𝗂𝗍𝗌𝗎𝗋𝗂 𝖡𝗈𝗍 ⇝@mitsuri_bot*`
  conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
  }
  handler.help = ['tagall <mesaje>','invocar <mesaje>']
  handler.tags = ['group']
  handler.command = /^(tagall|invocar|invocacion|todos|invocación|aviso|despierten)$/i
  handler.admin = true
  handler.group = true
  export default handler