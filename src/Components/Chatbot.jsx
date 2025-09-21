import React, { useState } from "react";
import "../Styles/Chatbot.css";

const suggestedQuestions = [
  "What is a cow?",
  "How long do cows live?",
  "What do cows eat?",
  "How much milk does a cow produce?",
  "How to take care of cows?",
];

const cattleFAQs = [
  { q: ['what is a cow', 'define cow', 'tell me about cow'], a: "A cow is a domesticated bovine animal raised for milk, meat, and labor." },
  { q: ['how long do cows live', 'cow lifespan'], a: "Cows typically live for about 15 to 20 years." },
  { q: ['what do cows eat', 'cow diet'], a: "Cows eat grass, hay, silage, and grains." },
  { q: ['how much milk does a cow produce', 'milk production'], a: "On average, a dairy cow produces 6 to 7 gallons (22 to 26 liters) of milk per day." },
  { q: ['how to take care of cows', 'cow care'], a: "Provide good nutrition, clean water, shelter, regular health checkups, and vaccinations." },
  { q: ['signs of sick cow', 'cow illness signs'], a: "Signs include loss of appetite, lethargy, coughing, nasal discharge, and abnormal behavior." },
  { q: ['best breed for milk', 'milk breed'], a: "Holstein and Jersey cows are among the best dairy breeds." },
  { q: ['how to breed cows', 'cow breeding'], a: "Cows are bred by natural mating or artificial insemination." },
  { q: ['how long is cow pregnancy', 'cow gestation period'], a: "The gestation period of a cow is approximately 9 months (280 days)." },
  { q: ['how to prevent cow diseases', 'prevent diseases'], a: "Maintain hygiene, vaccinate regularly, and isolate sick animals." },
  { q: ['how to milk a cow', 'milking cows'], a: "Use clean hands or milking machines, and milk gently from the teats." },
];

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [showChat, setShowChat] = useState(false);

  const addMessage = (sender, text) => {
    setMessages(prev => [...prev, { sender, text }]);
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
    let reply = "Please call our doctor at +1-234-567-8901 for other questions.";

    for (let faq of cattleFAQs) {
      for (let question of faq.q) {
        if (msg.includes(question)) {
          reply = faq.a;
          break;
        }
      }
      if (reply !== "Please call our doctor at +1-234-567-8901 for other questions.") break;
    }

    setTimeout(() => addMessage("bot", reply), 500);
  };

  return (
    <>
      <button
        className="chat-toggle"
        onClick={() => setShowChat(prev => !prev)}
      >
        Chat
      </button>

      {showChat && (
        <div className="chat-window">
          <div className="chat-header">AI Cattle Chatbot</div>

          <div className="chat-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`message ${msg.sender}`}>
                {msg.sender === "user" ? "You: " : "Bot: "}
                {msg.text}
              </div>
            ))}
          </div>

          <div className="chat-suggestions">
            {suggestedQuestions.map((q, idx) => (
              <button key={idx} onClick={() => handleSend(q)}>
                {q}
              </button>
            ))}
          </div>

          <div className="chat-input-area">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type your message..."
            />
            <button onClick={() => handleSend()}>Send</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Chatbot;
