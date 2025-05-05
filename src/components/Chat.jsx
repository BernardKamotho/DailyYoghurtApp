import React, { useState } from 'react';

const ChatBot = () => {
  const [messages, setMessages] = useState([{ sender: 'bot', text: "Hi, I am your Helper. Type 'quit' to end the conversation." }]);
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
    <div className="p-4 max-w-md mx-auto bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-2">Helper ChatBot</h2>
      <div className="h-64 overflow-y-auto border p-2 mb-2">
        {messages.map((msg, idx) => (
          <div key={idx} className={`mb-1 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
            <span className={`inline-block px-3 py-1 rounded-md ${msg.sender === 'user' ? 'bg-blue-100' : 'bg-gray-200'}`}>
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          className="flex-1 border rounded px-2 py-1"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button className="bg-blue-500 text-white px-3 py-1 rounded" type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatBot;
