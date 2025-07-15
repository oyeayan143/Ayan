const { Configuration, OpenAIApi } = require("openai");

module.exports.config = {
  name: "botai",
  version: "1.0",
  hasPermission: 0,
  credits: "Kashif Raza",
  description: "Real AI reply using OpenAI GPT",
  commandCategory: "AI",
  usages: "Type something with 'bot'",
  cooldowns: 2
};

// ✅ Replace this with your actual API key (but NEVER share it publicly)
const configuration = new Configuration({
  apiKey: "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;

const openai = new OpenAIApi(configuration);

module.exports.handleEvent = async function({ event, api }) {
  const body = event.body?.toLowerCase();
  const threadID = event.threadID;
  const messageID = event.messageID;

  if (body && body.includes("bot")) {
    try {
      const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "Tum ek Urdu aur Roman Urdu bolne wala intelligent Messenger bot ho. Tum real insaan jaise natural jawab dete ho, lekin short aur useful."
          },
          {
            role: "user",
            content: event.body
          }
        ]
      });

      const reply = completion.data.choices[0].message.content;
      return api.sendMessage(reply, threadID, messageID);

    } catch (err) {
      console.error("❌ OpenAI Error:", err.message);
      return api.sendMessage("AI se reply lene mein error aaya. 😢", threadID, messageID);
    }
  }
};

module.exports.run = async function() {
  return; // Command trigger nahi karta, auto reply karta hai
};
