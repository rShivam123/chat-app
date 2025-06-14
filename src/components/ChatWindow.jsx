
import React, { useState, useEffect, useRef } from 'react';
import MessageBubble from './MessageBubble';
import TypingIndicator from './TypingIndicator';
import { FaPlusCircle, FaPaperclip, FaSmile, FaPaperPlane } from 'react-icons/fa';
import chats from '../data/chats';
import { getCurrentTime } from '../utils/helpers';

const ChatWindow = ({ selectedContact }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (selectedContact) {
      setMessages(chats[selectedContact.id] || []);
    } else {
      setMessages([]);
    }
    setIsTyping(false);
    setNewMessage('');
  }, [selectedContact]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    const message = {
      id: messages.length + 1,
      sender: 'user',
      content: newMessage.trim(),
      time: getCurrentTime(),
      status: 'sent'
    };

    setMessages(prev => [...prev, message]);
    setNewMessage('');

    // Simulate typing indicator
    setIsTyping(true);
    
    // Simulate bot response
    setTimeout(() => {
      setIsTyping(false);
      const botResponses = [
        "I understand. Can you tell me more about that?",
        "That's interesting. How does that make you feel?",
        "Thanks for sharing. What are your thoughts on this?",
        "I see. What would you like to do next?",
        "Got it. How can I assist you with that?",
        "That makes sense. What else would you like to discuss?",
        "Interesting perspective. Can you elaborate?"
      ];
      
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      
      const botMessage = {
        id: messages.length + 2,
        sender: 'contact',
        content: randomResponse,
        time: getCurrentTime()
      };
      
      setMessages(prev => [...prev, botMessage]);
    }, 2000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!selectedContact) {
    return (
      <div className="chat-window empty">
        <div className="empty-state">
          <div className="empty-icon">
            <i className="fas fa-comment-dots"></i>
          </div>
          <h2>Welcome to Chat App</h2>
          <p>Select a contact to start chatting</p>
        </div>
      </div>
    );
  }

  return (
    <div className="chat-window">
      <div className="chat-header">
        <div className="contact-info">
          <div className="contact-avatar">{selectedContact.avatar}</div>
          <div className="contact-details">
            <div className="contact-name">{selectedContact.name}</div>
            <div className="contact-status">
              <span className={`status-dot ${selectedContact.online ? 'online' : 'offline'}`}></span>
              <span>{selectedContact.online ? 'Online' : 'Offline'}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="messages-container">
        {messages.map(message => (
          <MessageBubble key={message.id} message={message} />
        ))}
        {isTyping && (
          <div className="typing-container">
            <TypingIndicator />
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      <div className="input-area">
        <div className="input-icons">
          <FaPlusCircle className="icon" />
          <FaPaperclip className="icon" />
        </div>
        <input
          type="text"
          className="message-input"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <div className="input-icons">
          <FaSmile className="icon" />
          <button 
            className="send-button"
            onClick={handleSendMessage}
            disabled={!newMessage.trim()}
          >
            <FaPaperPlane className="send-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;