const handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!m.isGroup) return m.reply('❗ Este comando solo se puede usar en grupos.');
  if (!m.isBotAdmin) return m.reply('❗ El bot necesita ser administrador.');
  if (!m.isAdmin) return m.reply('❗ Solo los administradores pueden usar este comando.');

  if (command === 'open') {
    await conn.groupSettingUpdate(m.chat, 'not_announcement');
    return m.reply('✅ El grupo ha sido *abierto*. Todos pueden enviar mensajes.');
  }

  if (command === 'close') {
    await conn.groupSettingUpdate(m.chat, 'announcement');
    return m.reply('🔒 El grupo ha sido *cerrado*. Solo los administradores pueden enviar mensajes.');
  }
};

handler.help = ['open', 'close'];
handler.tags = ['group'];
handler.command = /^open|close$/i;
handler.group = true;
handler.admin = true;
handler.botAdmin = true;

export default handler;
