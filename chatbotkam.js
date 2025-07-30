// chatbotkam.js – Chatbot o Kamili (bubble theme)

document.addEventListener("DOMContentLoaded", () => {
  // --- 1️⃣ Tworzymy widget chatbota ---
  const chatWidget = document.createElement("div");
  chatWidget.id = "chat-api-widget";
  chatWidget.innerHTML = `
    <div id="chat-toggle"><span>💬</span> Ask about Kamila</div>
    <div id="chat-box">
      <div id="chat-header">Kamila Assistant</div>
      <div id="chat-messages"></div>
      <div id="chat-questions">
        <button data-q="Who is Kamila?">Who is Kamila?</button>
        <button data-q="What did Kamila achieve?">What did Kamila achieve?</button>
        <button data-q="Why is Kamila special?">Why is Kamila special?</button>
        <button data-q="What will we miss about Kamila?">What will we miss about Kamila?</button>
      </div>
    </div>
  `;
  document.body.appendChild(chatWidget);

  // --- 2️⃣ Styl widgetu (bubble theme) ---
  const style = document.createElement("style");
  style.textContent = `
    #chat-api-widget {
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 9999;
      font-family: 'Georgia', serif;
    }

    /* 🔘 Przycisk wywołania chatbota */
    #chat-toggle {
      background: url('bubbles.png') no-repeat center center / cover;
      color: black;
      padding: 10px 16px;
      border-radius: 24px;
      font-size: 0.95rem;
      font-weight: 600;
      cursor: pointer;
      box-shadow: 0 4px 10px rgba(0,0,0,0.3);
      transition: transform 0.2s ease;
      display: flex;
      align-items: center;
      gap: 8px;
      border: 1px solid rgba(255,255,255,0.5);
    }

    #chat-toggle:hover {
      transform: scale(1.05);
    }

    /* 📦 Okienko chatbota */
    #chat-box {
      display: none;
      width: 360px;
      border-radius: 16px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.25);
      padding: 16px;
      margin-top: 10px;
      background: url('bubbles.png') no-repeat center center / cover;
      position: relative;
      overflow: hidden;
    }

    /* ⚪ Delikatna mgła w tle chatboxa dla lepszej czytelności */
    #chat-box::before {
      content: "";
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(255, 255, 255, 0.3);
      border-radius: 16px;
      z-index: 0;
    }

    #chat-header {
      background-color: rgba(212, 175, 55, 0.9);
      color: white;
      font-weight: 600;
      text-align: center;
      padding: 8px;
      border-radius: 8px;
      margin-bottom: 12px;
      position: relative;
      z-index: 1;
    }

    /* 🗨️ Pytania w formie przycisków */
    #chat-questions button {
      background: rgba(212, 175, 55, 0.9);
      color: white;
      border: none;
      padding: 10px 14px;
      border-radius: 20px;
      font-weight: 500;
      font-size: 0.9rem;
      cursor: pointer;
      margin: 4px 0;
      width: 100%;
      transition: background 0.2s ease, transform 0.2s ease;
      position: relative;
      z-index: 1;
    }

    #chat-questions button:hover {
      background: rgba(180, 140, 40, 0.95);
      transform: scale(1.03);
    }

    /* 💬 Wiadomości w chatboxie */
    #chat-messages {
      font-size: 0.9rem;
      max-height: 180px;
      overflow-y: auto;
      background: rgba(255, 255, 255, 0.7);
      padding: 10px;
      border-radius: 10px;
      margin-bottom: 10px;
      position: relative;
      z-index: 1;
    }

    #chat-messages p {
      margin: 6px 0;
      line-height: 1.4;
      background: #ffffff;
      color: #000;
      padding: 8px 12px;
      border-radius: 8px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }

    #chat-messages p strong {
      color: #d4af37;
    }
  `;
  document.head.appendChild(style);

  // --- 3️⃣ Obsługa logiki chatbota ---
  const toggle = document.getElementById("chat-toggle");
  const chatBox = document.getElementById("chat-box");
  const buttons = chatWidget.querySelectorAll("#chat-questions button");
  const chatMessages = document.getElementById("chat-messages");

  toggle.addEventListener("click", () => {
    chatBox.style.display = chatBox.style.display === "none" ? "block" : "none";
  });

  // --- 4️⃣ Odpowiedzi chatbota ---
  const answers = {
    "Who is Kamila?": "Kamila is our amazing Team Manager – a leader who always inspired and supported us with her energy and kindness.",
    "What did Kamila achieve?": "She successfully guided the team through many challenges, celebrated wins with us, and created an environment full of trust and respect.",
    "Why is Kamila special?": "Because she cared not only about the work, but also about the people behind it. That’s true leadership.",
    "What will we miss about Kamila?": "Her sense of humor, patience, and the way she could turn even the hardest day into something lighter."
  };

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const question = button.dataset.q;
      const answer = answers[question] || "I don’t have an answer for that.";

      // ✅ Dodajemy wiadomość użytkownika i odpowiedź chatbota
      chatMessages.innerHTML += `<p><strong>You:</strong> ${question}</p>`;
      chatMessages.innerHTML += `<p><strong>Assistant:</strong> ${answer}</p>`;

      chatMessages.scrollTop = chatMessages.scrollHeight;
    });
  });
});
