const axios = require("axios");

module.exports.config = {
  name: "botai",
  version: "1.0",
  hasPermission: 0,
  credits: "Kashif Raza + ChatGPT",
  description: "AI reply using DeepSeek via OpenRouter",
  commandCategory: "ai",
  usages: "Auto reply when 'bot' is mentioned",
  cooldowns: 2
};

// ✅ Your OpenRouter API key (PRIVATE – don't share publicly)
const OPENROUTER_API_KEY = "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";

module.exports.handleEvent = async function({ event, api }) {
  const body = event.body?.toLowerCase();
  const threadID = event.threadID;
  const messageID = event.messageID;

  if (!body || !body.includes("bot")) return;

  try {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "deepseek-chat",
        messages: [
          {
            role: "system",
            content: "Tum ek Urdu aur Roman Urdu samajhne wala intelligent Messenger bot ho. Har message ka useful, short aur human jaisa reply do."
          },
          {
            role: "user",
            content: event.body
          }
        ]
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
          "HTTP-Referer": "https://facebook.com", // Optional but recommended
          "X-Title": "MessengerBot"
        }
      }
    );

    const reply = response.data.choices[0].message.content;
    return api.sendMessage(reply, threadID, messageID);

  } catch (err) {
    console.error("❌ DeepSeek API Error:", err.message);
    return api.sendMessage("AI se reply lene mein error aaya 😢", threadID, messageID);
  }
};

module.exports.run = async function() {
  return; // Is command ko manually chalane ki zarurat nahi
};
