/*import { WAMessageStubType } from '@whiskeysockets/baileys'; // Asegúrate de importar correctamente
import fetch from 'node-fetch'; // Para obtener imágenes de perfil
import uploadImage from '../lib/uploadImage.js'; // Importar la función de carga de imágenes

export async function before(m, { conn, groupMetadata }) {
  // Verificar si el mensaje es un evento de grupo y si es de tipo bienvenida (27) o despedida (28, 32)
  if (!m.messageStubType || !m.isGroup) return;

  // Obtener la foto de perfil del usuario
  let pp = await conn.profilePictureUrl(m.messageStubParameters[0], 'image').catch(_ => 'https://telegra.ph/file/2a1d71ab744b55b28f1ae.jpg');
  let img = await (await fetch(pp)).buffer();

  // Subir la imagen a qu.ax
  let uploadedImageUrl;
  try {
    uploadedImageUrl = await uploadImage(img); // Cargar la imagen en qu.ax
  } catch (error) {
    console.error('Error al cargar la imagen en qu.ax:', error);
    uploadedImageUrl = pp; // Si falla, usar la URL original de la imagen
  }

  // Obtener el nombre del usuario
  let usuario = `@${m.messageStubParameters[0].split('@')[0]}`;

  // Obtener metadatos del grupo
  let subject = groupMetadata.subject; // Nombre del grupo
  let descs = groupMetadata.desc || "*Descripción predeterminada del grupo*"; // Descripción del grupo

  // Generar imagen con la API
  let welcomeImageUrl = `https://api.siputzx.my.id/api/canvas/welcomev2?username=${encodeURIComponent(usuario)}&memberCount=6&avatar=${encodeURIComponent(uploadedImageUrl)}&background=https://files.catbox.moe/41ukry.jpg`;

  // Mensaje de bienvenida personalizado
  if (m.messageStubType == 27) { // Evento de entrada al grupo
    let textWel = `
┏━━━━━━━━━━━━
┃──〘 *BIENVENIDO/A* 〙──
┃━━━━━━━━━━━━
┃ *Hola ${usuario} 👋 Bienvenido/a a*
┃ *_${subject} ✨_*
┃
┃=> *_En este grupo podrás_*
┃ *_encontrar:_*
┠⊷ *Amistades 🫂*
┠⊷ *Desmadre 💃🕺*
┠⊷ *Relajo 💅*
┠⊷ *Un Bot Sexy 🤖*
┃
┃=> *_Puedes solicitar mi lista de_*
┃ *_comandos con:_*
┠⊷ *#menu*
┃
┃=> *_Aquí tienes la descripción_*
┃ *_del grupo, léela!!_*
┃
${descs}
┃
┃ *_🥳 Disfruta de tu_*
┃ *_estadía en el grupo 🥳_*
┃
┗━━━━━━━━━━━`;

    await conn.sendMessage(m.chat, {
      image: { url: welcomeImageUrl }, // Usar la imagen generada por la API
      caption: textWel,
      mentions: [m.sender, m.messageStubParameters[0]] // Menciona al usuario
    });
  }

  // Mensaje de despedida personalizado
  else if (m.messageStubType == 28 || m.messageStubType == 32) { // Evento de salida del grupo
    let textBye = `
┏━━━━━━━━━━━━
┃──〘 *ADIOS* 〙───
┃━━━━━━━━━━━━
┃ *_☠ Se fue ${usuario}_*
┃ *_Que dios lo bendiga️_*
┃ *_Y lo atropelle un tren 😇_*
┗━━━━━━━━━━`;

    await conn.sendMessage(m.chat, {
      image: { url: welcomeImageUrl }, // Usar la imagen generada por la API
      caption: textBye,
      mentions: [m.sender, m.messageStubParameters[0]] // Menciona al usuario
    });
  }
}*/


import { WAMessageStubType } from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

export async function before(m, { conn, participants, groupMetadata }) {
  if (!m.messageStubType || !m.isGroup) return !0;
  const fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net"}  
  let pp = await conn.profilePictureUrl(m.messageStubParameters[0], 'image').catch(_ => 'https://raw.githubusercontent.com/The-King-Destroy/Adiciones/main/Contenido/1745522645448.jpeg')
  let img = await (await fetch(`${pp}`)).buffer()
  let chat = global.db.data.chats[m.chat]
  let txt = 'ゲ◜៹ NEW MEMBER ៹◞ゲ'
  let txt1 = 'ゲ◜៹ BYE MEMBER ៹◞ゲ'
  let groupSize = participants.length
  if (m.messageStubType == 27) {
    groupSize++;
  } else if (m.messageStubType == 28 || m.messageStubType == 32) {
    groupSize--;
  }

  if (chat.welcome && m.messageStubType == 27) {
    let bienvenida = `★ *Bienvenido* a ${groupMetadata.subject}\n★ @${m.messageStubParameters[0].split`@`[0]}\n${global.welcom1}\n★ Ahora somos ${groupSize} Miembros.\n✦ Disfruta tu estadía en el grupo!\n> _*𝘗𝘰𝘸𝘦𝘳𝘦𝘥 𝘣𝘺:@𝘪𝘵𝘴.𝘮𝘭𝘢.𝘰𝘧𝘪𝘤𝘪𝘢𝘭.*_`    
    await conn.sendMini(m.chat, txt, dev, bienvenida, img, img, redes, fkontak)
  }
  
  if (chat.welcome && (m.messageStubType == 28 || m.messageStubType == 32)) {
    let bye = `★ *Adiós* de ${groupMetadata.subject}\n★ @${m.messageStubParameters[0].split`@`[0]}\n${global.welcom2}\n★ Ahora somos ${groupSize} Miembros.\n✦ Te esperamos pronto!\n> _*𝘗𝘰𝘸𝘦𝘳𝘦𝘥 𝘣𝘺:@𝘪𝘵𝘴.𝘮𝘭𝘢.𝘰𝘧𝘪𝘤𝘪𝘢𝘭.*_`
    await conn.sendMini(m.chat, txt1, dev, bye, img, img, redes, fkontak)
  }}
