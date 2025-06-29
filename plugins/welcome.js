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


import { WAMessageStubType } from '@whiskeysockets/baileys'; // Asegúrate de importar correctamente
import fetch from 'node-fetch'; // Para obtener imágenes de perfil

export async function before(m, { conn, groupMetadata }) {
  // Verificar si el mensaje es un evento de grupo y si es de tipo bienvenida (27) o despedida (28, 32)
  if (!m.messageStubType || !m.isGroup) return;

  // Obtener la foto de perfil del usuario
  let pp = await conn.profilePictureUrl(m.messageStubParameters[0], 'image').catch(_ => 'https://files.catbox.moe/a5hq0g.jpg');
  let img = await (await fetch(pp)).buffer();

  // Obtener el nombre del usuario
  let usuario = `@${m.messageStubParameters[0].split('@')[0]}`;

  // Obtener metadatos del grupo
  let subject = groupMetadata.subject; // Nombre del grupo
  let descs = groupMetadata.desc || "*Descripción predeterminada del grupo*"; // Descripción del grupo

  // Mensaje de bienvenida personalizado
  if (m.messageStubType == 27) { // Evento de entrada al grupo
    let textWel = `
┏━━━━━━━━━━━━━┓
┃ 🌻𝐖𝐄𝐋𝐂𝐎𝐌𝐄 𝐔𝐒𝐔𝐀𝐑𝐈𝐎🌻 
┗━━━━━━━━━━━━━┛
${𝐮𝐬𝐮𝐚𝐫𝐢𝐨} 
★𝐁𝐢𝐞𝐧𝐯𝐞𝐧𝐢𝐝𝐨 𝐚𝐥 𝐠𝐫𝐮𝐩𝐨
★𝐋𝐞𝐞 𝐥𝐚 𝐝𝐞𝐬𝐜𝐫𝐢𝐩𝐜𝐢𝐨́𝐧
★𝐄𝐯𝐢𝐭𝐚 𝐬𝐞𝐫 𝐞𝐥𝐢𝐦𝐢𝐧𝐚𝐝𝐨.
> ✎ 𝐮𝐬𝐚 #help 𝐩𝐚𝐫𝐚 𝐯𝐞𝐫 𝐦𝐢 𝐥𝐢𝐬𝐭𝐚 𝐝𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨𝐬.
`;

    await conn.sendMessage(m.chat, {
      image: img, // Envía la foto de perfil del usuario
      caption: textWel,
      mentions: [m.sender, m.messageStubParameters[0]] // Menciona al usuario
    });
  }

  // Mensaje de despedida personalizado
  else if (m.messageStubType == 32 ) { // Evento de salida del grupo
    let textBye = `
┏━━━━━━━━━━━━━┓
┃ 🌻𝐆𝐎𝐎𝐃𝐁𝐘𝐄 𝐔𝐒𝐔𝐀𝐑𝐈𝐎🌻 
┗━━━━━━━━━━━━━┛
${usuario
𝐀𝐝𝐢𝐨́𝐬 𝐝𝐞𝐥 𝐆𝐫𝐮𝐩𝐨!!! 
★ 𝐕𝐮𝐞𝐥𝐯𝐞 𝐩𝐫𝐨𝐧𝐭𝐨 𝐚𝐥 𝐠𝐫𝐮𝐩𝐨!!!
> ✎ 𝐔𝐬𝐚 #help 𝐩𝐚𝐫𝐚 𝐯𝐞𝐫 𝐦𝐢 𝐥𝐢𝐬𝐭𝐚 𝐝𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨𝐬.
`;

    await conn.sendMessage(m.chat, {
      image: img, // Envía la foto de perfil del usuario
      caption: textBye,
      mentions: [m.sender, m.messageStubParameters[0]] // Menciona al usuario
    });
  }
  else if (m.messageStubType == 28 ) { // Evento de expulsión del grupo
    let textBan = `
┏━━━━━━━━━━━━━┓
┃ 🌻𝐆𝐎𝐎𝐃𝐁𝐘𝐄 𝐔𝐒𝐔𝐀𝐑𝐈𝐎🌻 
┗━━━━━━━━━━━━━┛
${usuario
𝐔𝐬𝐮𝐚𝐫𝐢𝐨 𝐞𝐱𝐩𝐮𝐥𝐬𝐚𝐝𝐨... 
★ 𝐄𝐥𝐢𝐦𝐢𝐧𝐚𝐝𝐨 𝐩𝐨𝐫 𝐧𝐨 𝐜𝐮𝐦𝐩𝐥𝐢́𝐫.!!!
> ✎ 𝐔𝐬𝐚 #help 𝐩𝐚𝐫𝐚 𝐯𝐞𝐫 𝐦𝐢 𝐥𝐢𝐬𝐭𝐚 𝐝𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨𝐬.
`;
    await conn.sendMessage(m.chat, {
      image: img, // Envía la foto de perfil del usuario
      caption: textBan,
      mentions: [m.sender, m.messageStubParameters[0]] // Menciona al usuario
    });

  }
}
