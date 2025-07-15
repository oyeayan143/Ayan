/**
* @author Zeeshan Altaf
* @warn Do not edit code or edit credits
* @Dont Change This Credits Otherwisw Your Bot Lol
*/
const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Ali Jan",
  description: "Bot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Karachi").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["Haldi 🤲 Lagane Ki Umar Hai Iski 😎 Aur Ladkiyan 👉 Chuna Laga Kar Ja Rahi 😜 Hai","😂Jalne Ko Aag Kahte Hai 🔥 Buji Ko Rakh Kahte Hai 💨 Aur Jo Aapke Pas Nahi Usse Dimag🧠 Kahte Hai 😜","Moongfali 🥜 Mai Dana 👎Nahi Trust 👉 Karne Ka Aab Zamana 🌎 Nahi 🤣","Bhai😎 Thoda☝ Break Laga 🙅🤘 Otherwise Do Char💑 Ka Or Breakup💔👫 Ho jayega😂","Apne Dimag 🧠 Ka Password Dena Akkal 👉 Install Karni 😜 Hai","Aapki Surat Mere ❤️ Dil Me Aise Bas 👌 Gayi Hai Jaise Chote Se 🚪 Darwaze Mein Bhains 🐂 Fas Gayi Hai 😬🤣","Nasheeli😌 Aankhe👁👁 + Katil💘 Smile😊 Bhai Ka High Attitude😎 Or Desi 🤕Style","Duniya Ka Sabse Muskil Kam Bina Dimag Wale Dosto Ko Jelna 😝🔥","g janu ap na q yad keya huma😒","Jo Uske ❤️ Pyaar Samjhe Woh Sabse Bada 🐴 Ghada Hai 😂","Teri Is Smile Par Girls To Kya Boys Bhi Fida Hai 😎😂","Mujhe Ignore Karna Band Karo 😤 Warna Tumhare Ghar Ka WiFi Password Leak Kar Dunga 😎📡","Tera Attitude Ice Cream Jaisa Hai 🍦 Bas Farq Ye Hai — Melt Hone Ki Ni Sochta 😏🔥","Apna Dil Sambhalo Janeman ❤️ Ye Har Kisi Pe Aa Jata Hai 😜🤣","Mujhse Pyaar Karlo, Free Me Data Milega 😁📲 Aur Saath Me Unlimited Ghum 😎💃","Main Itna Handsome Hoon, Mirror Bhi Mujhe Dekh Ke Screenshot Leta Hai 😎📸","Tumhare Jaise Cute Log 🥺 Jurassic Park Me Nahi Balkay Dil Ke Park Me Chahiyein ❤️🌳","Mujhe Follow Mat Karo 😏 Main Ghar Tak Chhod Aata Hoon 🛵💘","Tera Naam WhatsApp Group Jaisa Hai... Har Kisi Ki Zubaan Par Hai 😅📱","Tera Reply Aaya To Dil Ne Dance Kiya 💃🕺 Nahi Aaya To System Error 😭🔧","Tere Jaise Chehre Pe To Caption Bhi Soch Soch Ke Aata Hai 😍✍️","Mujhe Mat Dekh 😏 Warna Dil De Baithoge Aur Main EMI Pe Nahin Leta 😜💸","Tujhe Online Dekh Kar Lagta Hai Zindagi Abhi Baaki Hai Mere Dost ❤️📲","Zarurat Se Zyada Cute Logon Ko Block Kar Dena Chahiye... Tumse Shuru Karein? 😜🚫","Mujhse Dosti Kar Lo, Varna Google Pe Search Karte Rahoge ‘Perfect Friend’ 😎🔍","Log Kehte Hain Pyaar Andha Hota Hai... Shayad Isi Liye Tujhe Dekh Ke Dil Phisal Gaya 😍🙈","Dimag Se Gareeb Logon Se Social Distance Barkarar Rakhein 😷🧠","Tere Jaisa Dost Ho To Dushman Ki Kya Zarurat 😅🔥","Tumhara Naam Soch Soch Ke Status Likh Diya, Ab Tum Reply Kar Lo Varna Poetry Shuru Kar Dunga 😜✍️","Main Toh Thik Hoon, Bas Teri Chat History Mein Apni Value Dekh Ke Udaas Hoon 😔💬","Pyaar To Internet Jaise Hai — Kabhi Slow, Kabhi Chala Hi Nahi 😭📡","Main Waqt Ke Saath Nahi Badalta... Main Waqt Ka Baap Hoon! 😎⌛"];
var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "bot 😘") || (event.body.toLowerCase() == "lovely bot")) {
     return api.sendMessage("G MERY JAN HUKAM KREN NA AP 😘🥀", threadID);
   };

    if ((event.body.toLowerCase() == "bot jani") || (event.body.toLowerCase() == "janu oye")) {
     return api.sendMessage("G JANEMAN 💕 :)", threadID);
   };

    if ((event.body.toLowerCase() == "Ali oye") || (event.body.toLowerCase() == "ali oye")) {
     return api.sendMessage("Ap miss kar rahi hain Ali jan ko 🙈", threadID);
   };

   if ((event.body.toLowerCase() == "how are you janu") || (event.body.toLowerCase() == "janu kaisi ho")) {
     return api.sendMessage("I AM FINE JANU WHAT ABOUT YOU ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "dmm bot") || (event.body.toLowerCase() == "kamena bot")) {
     return api.sendMessage("Ap na mujha gali dye mein totaly upset ho geya hon", threadID);
   };

   if ((event.body.toLowerCase() == "zeeshan") || (event.body.toLowerCase() == "zeeshan altaf")) {
     return api.sendMessage("zeeshan altaf is gr8 person , he was my owner", threadID);
   };

   if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hy")) {
     return api.sendMessage("Hello dear, ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "morning") || (event.body.toLowerCase() == "good morning")) {
     return api.sendMessage("ASSLAM O ALIKUM, good morning to ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "good night") || (event.body.toLowerCase() == "gud ny8")) {
     return api.sendMessage("ok dear gudny8, have a sweet dreams  ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "good afternoon") || (event.body.toLowerCase() == "afternoon")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "thanku") || (event.body.toLowerCase() == "thankx")) {
     return api.sendMessage("welcome janam, my pleasure ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "hello") || (event.body.toLowerCase() == "hello")) {
     return api.sendMessage("Hello dear, kesy ho ap ❤️", threadID);
   };

  if ((event.body.toLowerCase() == "bot ❤️") || (event.body.toLowerCase() == "bot 😘")) {
     return api.sendMessage("yes janu kesy yad keya mujha ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "bot smile") || (event.body.toLowerCase() == "bot smile do na")) {
     return api.sendMessage("kyu tum na mujha apni baji dye hai ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "bot shetup") || (event.body.toLowerCase() == "dafa ho ja bot")) {
     return api.sendMessage("Aby oye dont again call me dafa ho ja bot tery ma ka gr sa khata hon randi ka bachy", threadID);
   };

   if ((event.body.toLowerCase() == "hi bot") || (event.body.toLowerCase() == "hi BOT")) {
     return api.sendMessage("yes sweetheart ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "hiii") || (event.body.toLowerCase() == "hiii")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };

     if ((event.body.toLowerCase() == "Ahsan") || (event.body.toLowerCase() == "sheri")) {
     return api.sendMessage("Ahsan mera janu ha 🙈 me uski hony wali 3sri Dulhan hon🤗😘🙈", threadID);
   };

   if ((event.body.toLowerCase() == "Meri janu  kon bany gi") || (event.body.toLowerCase() == "meri janu kon bany gi")) {
     return api.sendMessage("Kya me apki janu ban jaon plzzzz aap mujhy bohut achyy lagty hai  plzzz mujh se shadi kar len 🥺🥺", threadID);
   };
   
   if ((event.body.toLowerCase() == "Jin") || (event.body.toLowerCase() == "jin")) {
     return api.sendMessage("Bulao bulao mujy bhi chumi leni hai Jin ki🙈🙈", threadID);
   };
   
   if ((event.body.toLowerCase() == "Zaini") || (event.body.toLowerCase() == "zaini")) {
     return api.sendMessage("Zaini sirf Jin ki jaan ha uska nam apni ghandi zaban na ly bandr😠", threadID);
   };

   if ((event.body.toLowerCase() == "Jin") || (event.body.toLowerCase() == "jin")) {
     return api.sendMessage("hyee hyee raha nhi jata na uske bagair mujy vi kbhi piyar se bula liya kro aesy 🙈", threadID);
   };
   
   if ((event.body.toLowerCase() == "Ali Jan") || (event.body.toLowerCase() == "ali jan")) {
     return api.sendMessage("Ali Jan mera hai oyeee usko tang na kr me maro gi bohut 😠😠", threadID);
   };
   if ((event.body.toLowerCase() == "Assalamualaikum") || (event.body.toLowerCase() == "assalam-0-ualaikum")) {
     return api.sendMessage("Walaikum Salam Dear Welcome to Group 😘 Kaisy hain aap 🙃", threadID);
   };

   if ((event.body.toLowerCase() == "🙄") || (event.body.toLowerCase() == "🙄🙄")) {
     return api.sendMessage("oper kya ha meri jan idr dekho na meri tarf 🙈", threadID);
   };
   
   if ((event.body.toLowerCase() == "🤔") || (event.body.toLowerCase() == "🤔🤔")) {
     return api.sendMessage("Chaprsi jaisi shakl ha teri phir itna soch raha na soch ziyada pagal ho jaye ga🤪😂😂😂", threadID);
   };
   if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "🤣")) {
     return api.sendMessage("Chwal dant to saaf kr lety 😂", threadID);
   };

   if ((event.body.toLowerCase() == "😜") || (event.body.toLowerCase() == "😉")) {
     return api.sendMessage("Aankh na maar thrki me ankh phor dongi 😠", threadID);
   };
   
   if ((event.body.toLowerCase() == "💋") || (event.body.toLowerCase() == "😘")) {
     return api.sendMessage("koi mujy bhi kiss de do 🥺", threadID);
   };
   if ((event.body.toLowerCase() == "🥺") || (event.body.toLowerCase() == "😥")) {
     return api.sendMessage("ary kya hua meri jan ko 🥺", threadID);
   };

   if ((event.body.toLowerCase() == "🙃") || (event.body.toLowerCase() == "🙃🙃")) {
     return api.sendMessage("seedha ho bengan jaisy shakl waly", threadID);
   };
   
   if ((event.body.toLowerCase() == "😳") || (event.body.toLowerCase() == "😳😳")) {
     return api.sendMessage("aesy mat dekh pyaar ho jye ga 🙈", threadID);
   };
   if ((event.body.toLowerCase() == "🙈") || (event.body.toLowerCase() == "🤭")) {
     return api.sendMessage("aly aly mery beshrm janu ko aj sharm aa rahi ha 😜🤣😂😂😂", threadID);
   };

   if ((event.body.toLowerCase() == "😐") || (event.body.toLowerCase() == "😒")) {
     return api.sendMessage("Chaprsi mu sahi kr apna 🤪🤭", threadID);
   };
   
   if ((event.body.toLowerCase() == "😴") || (event.body.toLowerCase() == "😴😴")) {
     return api.sendMessage("ja ja khotiya so ja 🤣", threadID);
   };
   if ((event.body.toLowerCase() == "😅") || (event.body.toLowerCase() == "😅😅")) {
     return api.sendMessage("teri tind se pani ku tapak raha aby 🤣", threadID);
   };

   if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "🥰🥰")) {
     return api.sendMessage("aly aly apni bandr jaisi shakl pr dil rakh kr khush raha ha 🤣🤣🤣", threadID);
   };
   
   if ((event.body.toLowerCase() == "@Meher Mehruu ") || (event.body.toLowerCase() == "Meher Mehruu ")) {
     return api.sendMessage("hye hye meri pagal Admin kash dil ki bhi admin hoti ,🙈", threadID);
   };
  
   if ((event.body.toLowerCase() == "does the bot have a brand") || (event.body.toLowerCase() == "does the bot owner have brand")) {
     return api.sendMessage("Yes my owner Ali Jan is brand", threadID);
   };
   mess = "{what is your name}"

  if (event.body.indexOf("Bot") == 0 || (event.body.indexOf("Bot") == 0)) {
    var msg = {
      body: `${name}, ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
