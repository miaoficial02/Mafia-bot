const handler = async (m, { conn }) => {
  const ownerNumber = '542644131963'; // sin +
  const ownerName = 'Mía';
  const instagram = 'https://instagram.com/its.mia.oficial';
  const github = 'https://github.com/miaoficial02';

  // Enviar contacto
  await conn.sendContact(m.chat, [[ownerNumber, `${ownerName} - Dueña del Bot`]], m);

  // Mensaje adicional
  const info = `
╭━━〔 👑 *INFORMACIÓN DEL OWNER* 👑 〕━━⬣
┃ ✨ *Nombre:* ${ownerName}
┃ 📱 *Número:* wa.me/${ownerNumber}
┃ 📸 *Instagram:* ${instagram}
┃ 💻 *GitHub:* ${github}
╰━━━━━━━━━━━━━━━━━━━━⬣
`.trim();

  await m.reply(info);
  await conn.react(m.chat, m.key, '👑');
};

handler.help = ['owner'];
handler.tags = ['info'];
handler.command = /^owner$/i;

export default handler;
