const handler = async (m, { conn }) => {
  const ownerNumber = '5492644131963';
  const ownerName = 'Mía';
  const github = 'https://github.com/miaoficial02';
  
  const info = `
╭━━〔 👑 *OWNER* 👑 〕━━⬣
┃ ✨ *Nombre:* ${ownerName}
┃ 📱 *Número:* wa.me/${ownerNumber}
┃ 💻 *GitHub:* ${github}
╰━━━━━━━━━━━━━━━━━━━━⬣
`.trim();

  await m.reply(info);
};

handler.help = ['owner'];
handler.tags = ['info'];
handler.command = /^owner$/i;

export default handler;
