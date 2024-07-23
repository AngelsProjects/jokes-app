import { useState } from 'react'

export default function ChatbotPage() {
  const [messages, setMessages] = useState([])

  const handleSendMessage = (message) => {
    // Logic for sending a message to the chatbot
    // Update the messages state with the bot response
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Jokes Chatbot</h1>
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.isBot ? 'bot' : 'user'}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Type a message"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSendMessage(e.target.value)
            e.target.value = ''
          }
        }}
      />
    </div>
  )
}
