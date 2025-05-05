import React, { useState } from 'react';
import Footer from './Footer';

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: "Hi, I am your Helper. Type 'quit' to end the conversation." },
  ]);
  const [input, setInput] = useState('');

  const pairs = [
    [/(hi|hello|hey)/i, ["Hello, How can I assist you today?", "Hi there! How can I help?", "Hey, what's up?"]],
    [/how are you\?/i, ["I'm doing great, thanks for asking!", "I'm good, how about you?"]],
    [/am good/i, ["Nice to hear that", "That is good to hear", "That's wonderful to hear."]],
    [/\bwho\b|\bwhom\b/i, ["I was Developed by: Bernard Kim"]],
    [/purpose/i, ["I was Developed To serve you. Got anything else to ask?", "I'm lucky to be in existence.", "Are you not happy that I'm available?"]],
    [/question/i, ["Go on...", "I'm ready for the question", "Ask your question", "Okay, outline it..."]],
    [/color/i, ["I like all colors! What about you?", "I don't have a favorite color!"]],
    [/name/i, ["My name is: Helper", "I am Helper.", "I'm called Helper"]],
    [/(course|program)/i, ["We offer great programs in Android development and Full Stack Development. Would you like to know more about them?"]],
    [/android/i, ["We offer an Android development program where you'll learn how to build mobile apps using Java and Kotlin. Interested?"]],
    [/full\s?stack/i, ["Our Full Stack Development program covers both front-end (HTML, CSS, JavaScript) and back-end (Node.js, Django, etc.) technologies. Would you like to join?"]],
    [/(mobile\s?apps|applications)/i, ["We offer mobile apps training in Android and React Native"]],
    [/(.*)/, ["Sorry, I didn't understand that. Could you ask something else?", "Can you please clarify?", "Never understood that. Try again..."]],
  ];

  const getBotResponse = (input) => {
    for (let [pattern, responses] of pairs) {
      if (pattern.test(input)) {
        return responses[Math.floor(Math.random() * responses.length)];
      }
    }
    return "Sorry, something went wrong.";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    let botMessage;

    if (input.toLowerCase() === 'quit') {
      botMessage = { sender: 'bot', text: "Goodbye! Have a nice day." };
    } else {
      const response = getBotResponse(input);
      botMessage = { sender: 'bot', text: response };
    }

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput('');
  };

  return (
    <div className="minee">
        <div className="container mt-4">
      <div className="card shadow">
        <div className="card-body">
          <h5 className="card-title">Helper ChatBot</h5>
          <div className="border p-2 mb-3" style={{ height: '300px', overflowY: 'auto' }}>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`d-flex mb-2 ${msg.sender === 'user' ? 'justify-content-end' : 'justify-content-start'}`}
              >
                <div
                  className={`p-2 rounded ${
                    msg.sender === 'user' ? 'bg-primary text-white' : 'bg-light text-dark'
                  }`}
                  style={{ maxWidth: '75%' }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="d-flex gap-2">
            <input
              type="text"
              className="form-control"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
            />
            <button className="btn btn-primary" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
     
    </div>
    <Footer/>
    </div>
    
  );
};

export default ChatBot;
