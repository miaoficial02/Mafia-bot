const handler = async (m, { conn }) => {
  const ownerNumber = '542644131963'; // sin el +
  const ownerName = 'Mía';
  const instagram = 'https://instagram.com/its.mia.oficial';
  const github = 'https://github.com/miaoficial02';

  const vcard = `
BEGIN:VCARD
VERSION:3.0
Nombre:${ownerName};;;
FN:${ownerName} - Dueña del Bot
TEL;type=CELL;type=VOICE;waid=${ownerNumber}:${ownerNumber}
END:VCARD
`.trim();

  // Enviar contacto
  await conn.sendMessage(m.chat, {
    contacts: [{
      displayName: `${ownerName} - Dueña del Bot`,
      vcard
    }]
  }, { quoted: m });

  // Enviar mensaje adicional con redes
  const info = `
╭━━〔 👑 *INFORMACIÓN DEL OWNER* 👑 〕━━⬣
┃ ✨ *Nombre:* ${ownerName}
┃ 📱 *Número:* wa.me/${ownerNumber}
┃ 📸 *Instagram:* ${instagram}
┃ 💻 *GitHub:* ${github}
╰━━━━━━━━━━━━━━━━━━━━⬣
`.trim();

  await m.reply(info);
  await conn.react(m.chat, m.key, '👑'); // Reacción opcional
};

handler.help = ['owner'];
handler.tags = ['info'];
handler.command = /^owner$/i;

export default handler;
