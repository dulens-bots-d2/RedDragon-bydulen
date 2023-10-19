const autoReply = (msg) => {
    let R = ''
    if(msg.match(/දුලෙය|දුලාන්|දුලේන්|duleya|dulan|dulen/gi)){
        R = "```දුලේන් තමා... ඇයි_😒🤍...```  *ᴀᴜᴛᴏ ʀᴇᴘʟʏ • ʙʏ ʙᴏᴛ*"
         }
    if(msg.match(/දුලෙය|දුලාන්|දුලේන්|duleya|dulan|dulen/gi)){
        R = "sendSticker:dulen"
    }
    return R
}
const autoReply2 = (msg) => {
    let R = ''
    if(msg.match(/aaw|halo|manika|lamayo|😘|😍|❤️|love|adare/gi)){
        R = "sendAudio:115"
    }
    return R
}
const autoReply3 = (msg) => {
    let R = ''
    return R
}
module.exports = {
    autoReply,
    autoReply2,
    autoReply3,
    copyright:"Kumuthu Prabhasha"
}
