import fs from 'fs';

const filePath = './personalize.json';

let handler = async (m, { conn }) => {
    try {
        const data = JSON.parse(fs.readFileSync(filePath));

        // Cargar datos globales y predeterminados
        const globalConfig = data.global;
        const defaultConfig = data.default;

        const botName = globalConfig.botName || defaultConfig.botName;
        const currency = globalConfig.currency || defaultConfig.currency;
        const videos = globalConfig.videos.length > 0 ? globalConfig.videos : defaultConfig.videos;

        const randomVideoUrl = videos[Math.floor(Math.random() * videos.length)];

        const menuMessage = `
╔═════════════════════
║🌟 : 𝘼𝙡𝙮𝙖𝙆𝙪𝙟𝙤𝙪𝘽𝙤𝙩💗 
║👑 : 𝐎𝐖𝐍𝐄𝐑:@𝐈𝐓𝐒.𝐌𝐈𝐀.𝐎𝐅𝐈𝐂𝐈𝐀𝐋
║🔰 : 𝐕𝐄𝐑𝐒𝐈𝐎́𝐍: ${vs}
╚═════════════════════

💬¡Hola ! Soy 𝘼𝙡𝙮𝙖𝙆𝙪𝙟𝙤𝙪𝘽𝙤𝙩💗
¡¡esta es mi lista de comandos!! 
💰 𝐌𝐨𝐧𝐞𝐝𝐚 𝐚𝐜𝐭𝐮𝐚𝐥: ${currency}

    ↓ 𝐦𝐚́𝐬 𝐢𝐧𝐟𝐨𝐫𝐦𝐚𝐜𝐢𝐨́𝐧 ↓
https://atom.bio/hibqbqxdd

     👑𝕊𝐎́𝕃𝐎 𝐎𝕎𝐍𝐄ℝ👑
╔════ ≪ ⭐ ≫ ════╗
║✿ #setname ✏️
║✿ #setbanner 🖼️
║✿ #setmoneda 🪙
║✿ #viewbanner 📝
║✿ #deletebanner 📄
║✿ #resetpreferences ⚪
║✿ #update ⭕
║✿ #dsowner • #purgar 🗑️
║✿ #join 💎
╚════ ≪ ⭐ ≫ ════╝
💫𝐀𝔻𝐌𝐈ℕ𝐈𝐒𝐓𝐑𝔸𝐂𝐈𝕆𝐍💫
╔════ ≪ 🌙 ≫ ════╗
║✿ #kick 🚫 
║✿ #getplugin 🔌
║✿ #getpack 📦
║✿ #store 🏪
║✿ #status 🖥️
║✿ #ping 📍
║✿ #gemini 🔍
║✿ #Pinterest ✨
╚════ ≪ 🌙 ≫ ════╝
      🎲 𝐑𝔸𝐍𝐃𝕆𝐌 🎲
╔════ ≪ 🎲 ≫ ════╗
║✿ #rw 🌟
║✿ #winfo 🧸
║✿ #rollwaifu 🧸
║✿ #claim 💡
║✿ #harem 💗
║✿ #addrw 📝
║✿ #alya • #bot 🤖
║✿ #kaori ❤️
║✿ #Waifu 👄
║✿ #fakengl 🥷🏻
╚════ ≪ 🎲 ≫ ════╝
    📥 𝐃𝔼𝐒𝐂𝔸𝐑𝐆𝔸𝐒 📥
╔════ ≪ 🔄 ≫ ════╗ 
║✿ #playaudio  (audio}🎶
║✿ #ytmp4  (video)🎬
║✿ #tt • #tiktok + [enlace]
║✿ #sp • #Spotify + [enlace]
╚════ ≪ 🔄 ≫ ════╝
    🎰 𝐄ℂ𝐎ℕ𝐎𝕄𝐈́𝐀 🎰
╔════ ≪ 🎰 ≫ ════╗
║✿ #work 👷🏻‍♂️
║✿ #slut 😈
║✿ #robar 👨🏻‍💻
║✿ #deposit (cantidad) 🏦
║✿ #retirar (cantidad) 🏧
║✿ #transferir (cantidad) @usuario 📨
║✿ #perfil 🆔
​​╚════ ≪ 🎰 ≫ ════╝
⛩️ 𝐑𝐄𝔸𝐂𝐈𝕆𝐍𝐄𝕊 𝐀𝐍𝕀𝐌𝔼 ⛩️
╔════ ≪ ⛩️ ≫ ════╗
║✿ #abrazar 🫂
║✿ #aburrido 🙇🏻‍♂️
║✿ #bañarse 🛀🏻
║✿ #bleh 🤸🏻‍♂️
║✿ #comer 🍙
║✿ #dance 💃🕺
║✿ #enojado 🤦🏻‍♂️
║✿ #feliz 😊
║✿ #kiss 💋
║✿ #love ❤️
║✿ #matar 🔪
║✿ #morder 🦷
║✿ #nalguear 🍑
║✿ #punch 👊
║✿ #saludar 👋
║✿ #bofetada 🖐️
║✿ #dormir 🛌🏻
║✿ #smoke 🚬
║✿ #paja 🍆
╚════ ≪ ⛩️ ≫ ════╝
> ${copy} ${dev}
`;

        await conn.sendMessage(
            m.chat,
            {
                video: { url: randomVideoUrl },
                gifPlayback: true,
                caption: menuMessage,
                mentions: [m.sender]
            }
        );
    } catch (error) {
        conn.reply(m.chat, `❌ Error al cargar el menú: ${error.message}`, m);
    }
};

handler.help = ['menu'];
handler.tags = ['info'];
handler.command = ['menu', 'help'];

export default handler;

/* estilos de menu

┎───•✧•───⌬
┃
┖───•✧•  */
