let handler = async (m, { conn, args, isAdmin, isBotAdmin, text }) => {
  if (!m.isGroup) throw '⚠️ Este comando solo se puede usar en grupos.'
  if (!isAdmin) throw '🚫 Solo los administradores pueden usar este comando.'
  if (!isBotAdmin) throw '🤖 El bot necesita ser administrador.'

  let action = m.command === 'open' ? 'not_announcement' : 'announcement'

  await conn.groupSettingUpdate(m.chat, action)
  m.react('✅')
}
handler.command = /^open|close$/i

export default handler
