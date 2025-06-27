const handler = async (m, { conn, command }) => {
  if (!m.isGroup) return;
  if (!m.isBotAdmin) return;
  if (!m.isAdmin) return;

  if (command === 'open') {
    await conn.groupSettingUpdate(m.chat, 'not_announcement');
    await conn.react(m.chat, m.key, '✅');
  }

  if (command === 'close') {
    await conn.groupSettingUpdate(m.chat, 'announcement');
    await conn.react(m.chat, m.key, '✅');
  }
};

handler.help = ['open', 'close'];
handler.tags = ['group'];
handler.command = /^open|close$/i;
handler.group = true;
handler.admin = true;
handler.botAdmin = true;

export default handler;
