const axios = require("axios");

module.exports.config = {
  name: "jinai",
  version: "1.0",
  hasPermission: 0,
  credits: "Kashif Raza + ChatGPT",
  description: "Reply AI when 'jin' is mentioned",
  commandCategory: "ai",
  usages: "auto reply using jin keyword",
  cooldowns: 2
};

// ✅ Your OpenRouter API Key here
const OPENROUTER_API_KEY = "sk-or-v1-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";

const HEADERS = {
  "Content-Type": "application/json",
  "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
  "HTTP-Referer": "https://facebook.com",
  "X-Title": "MessengerBot"
};

module.exports.handleEvent = async function({ event, api }) {
  const body = event.body?.toLowerCase();
  if (!body || !body.includes("jin")) return; // 🔥 Trigger word: "jin"

  try {
    const res = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openai/gpt-4o",
        messages: [
          {
            role: "system",
            content: "Tum Urdu aur Roman Urdu samajhne wala messenger AI ho, har message ka dil se jawab do, friendly aur short."
          },
          {
            role: "user",
            content: event.body
          }
        ]
      },
      { headers: HEADERS }
    );

    const reply = res.data.choices[0].message.content;
    return api.sendMessage(reply, event.threadID, event.messageID);

  } catch (err) {
    console.error("❌ OpenRouter Error:", err.response?.data || err.message);
    return api.sendMessage("Jin ko reply karne me error aaya 😅", event.threadID, event.messageID);
  }
};

module.exports.run = async () => {};
