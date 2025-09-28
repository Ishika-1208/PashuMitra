import React, { useState, useEffect } from "react";
import "../Styles/Chatbot.css";

const translations = {
  en: {
    chatHeader: "AI Cattle Chatbot",
    inputPlaceholder: "Type your message...",
    toggleButton: "Chat",
    suggestedQuestions: [
      "What is a cow?",
      "How long do cows live?",
      "What do cows eat?",
      "How much milk does a cow produce?",
      "How to take care of cows?",
    ],
    defaultBotReply:
      "Please call our doctor at +1-234-567-8901 for other questions.",
    cattleFAQs: [
      { q: ["what is a cow", "define cow", "tell me about cow"], a: "A cow is a domesticated bovine animal raised for milk, meat, and labor." },
      { q: ["how long do cows live", "cow lifespan"], a: "Cows typically live for about 15 to 20 years." },
      { q: ["what do cows eat", "cow diet"], a: "Cows eat grass, hay, silage, and grains." },
      { q: ["how much milk does a cow produce", "milk production"], a: "On average, a dairy cow produces 6 to 7 gallons (22 to 26 liters) of milk per day." },
      { q: ["how to take care of cows", "cow care"], a: "Provide good nutrition, clean water, shelter, regular health checkups, and vaccinations." },
    ],
  },
  hi: {
    chatHeader: "एआई पशु चैटबॉट",
    inputPlaceholder: "अपना संदेश टाइप करें...",
    toggleButton: "चैट",
    suggestedQuestions: [
      "गाय क्या है?",
      "गाय कितने समय तक जीवित रहती है?",
      "गाय क्या खाती है?",
      "एक गाय कितना दूध देती है?",
      "गायों की देखभाल कैसे करें?",
    ],
    defaultBotReply:
      "अन्य प्रश्नों के लिए कृपया हमारे डॉक्टर को +1-234-567-8901 पर कॉल करें।",
    cattleFAQs: [
      { q: ["गाय क्या है", "गाय के बारे में बताइए"], a: "गाय एक पालतू गोवंशीय जानवर है जो दूध, मांस और श्रम के लिए पालन किया जाता है।" },
      { q: ["गाय कितने समय तक जीवित रहती है", "गाय उम्र"], a: "गायें आमतौर पर लगभग 15 से 20 साल तक जीवित रहती हैं।" },
      { q: ["गाय क्या खाती है", "गाय का आहार"], a: "गायें घास, भूसा, सिलेज़ और अनाज खाती हैं।" },
      { q: ["एक गाय कितना दूध देती है", "दूध उत्पादन"], a: "औसतन, एक डेयरी गाय प्रति दिन 22 से 26 लीटर (6 से 7 गैलन) दूध देती है।" },
      { q: ["गायों की देखभाल कैसे करें", "गाय की देखभाल"], a: "अच्छा पोषण, साफ पानी, आश्रय, नियमित स्वास्थ्य जांच और टीकाकरण प्रदान करें।" },
    ],
  },
};

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [showChat, setShowChat] = useState(false);
  const [lang, setLang] = useState(localStorage.getItem("lang") || "en");

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const t = translations[lang];

  const addMessage = (sender, text) => {
    setMessages((prev) => [...prev, { sender, text }]);
  };

  const handleSend = (text = null) => {
    const userMsg = text ?? input.trim();
    if (!userMsg) return;
    addMessage("user", userMsg);
    setInput("");
    botReply(userMsg);
  };

  const botReply = (userMsg) => {
    const msg = userMsg.toLowerCase();
    let reply = t.defaultBotReply;

    for (let faq of t.cattleFAQs) {
      for (let question of faq.q) {
        if (msg.includes(question)) {
          reply = faq.a;
          break;
        }
      }
      if (reply !== t.defaultBotReply) break;
    }

    setTimeout(() => addMessage("bot", reply), 500);
  };

  return (
    <>
      <button className="chat-toggle" onClick={() => setShowChat((prev) => !prev)}>
        {t.toggleButton}
      </button>

      {showChat && (
        <div className="chat-window">
          <div className="chat-header">{t.chatHeader}</div>

          <div className="chat-suggestions">
            {t.suggestedQuestions.map((q, idx) => (
              <button key={idx} onClick={() => handleSend(q)}>
                {q}
              </button>
            ))}
          </div>

          <div className="chat-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`message ${msg.sender}`}>
                {msg.sender === "user" ? "You: " : "Bot: "}
                {msg.text}
              </div>
            ))}
          </div>

          <div className="chat-input-area">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder={t.inputPlaceholder}
            />
            <button onClick={() => handleSend()}>{t.toggleButton}</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Chatbot;
