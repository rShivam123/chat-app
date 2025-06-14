import React from 'react';
import { FaCheck, FaCheckDouble } from 'react-icons/fa';

const MessageBubble = ({ message }) => {
  const isUser = message.sender === 'user';
  
  return (
    <div className={`message ${isUser ? 'sent' : 'received'}`}>
      <div className="message-content">
        {message.content}
      </div>
      <div className="message-footer">
        <span className="message-time">{message.time}</span>
        {isUser && message.status && (
          <span className="message-status ml-1">
            {message.status === 'sent' && <FaCheck className="text-xs" />}
            {message.status === 'delivered' && <FaCheckDouble className="text-xs text-gray-400" />}
            {message.status === 'read' && <FaCheckDouble className="text-xs text-blue-500" />}
          </span>
        )}
      </div>
    </div>
  );
};

export default MessageBubble;