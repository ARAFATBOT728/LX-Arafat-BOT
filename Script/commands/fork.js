module.exports.config = {
    name: "fork",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "SHAHADAT SAHU",
    description: "Send GitHub fork link with intro text",
    commandCategory: "other",
    usages: "fork",
    cooldowns: 0,
};

module.exports.run = async function({ api, event }) {
    const message = 
        "🌟 আসসালামু আলাইকুম সম্মানিত বট ইউজার 🌟\n\n" +
        "আপনি যদি আমাদের বটটি নিজের GitHub রিপোজিটরিতে Fork করতে চান, " +
        "তাহলে নিচের Fork Link-এ গিয়ে খুব সহজেই Fork করে নিতে পারবেন। " +
        "তাহলে আর দেরি না করে এখনই আমাদের GitHub Fork Link-এ চলে যান।\n\n" +
        "🔗 GitHub Fork Link: https://github.com/ARAFATBOT639/LX-ARAFAT-CHAT-BOT";

    return api.sendMessage(message, event.threadID, event.messageID);
};
