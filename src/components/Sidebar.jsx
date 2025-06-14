

import React from 'react';
import contacts from '../data/contacts';
import { FaSearch } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = ({ isOpen, onContactSelect, selectedContact }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <div className="search-container">
          <div className="search-bar">
            <FaSearch className="search-icon" />
            <input 
              type="text" 
              placeholder="Search contacts..." 
              className="search-input"
            />
          </div>
        </div>
      </div>
      
      <div className="contacts-list">
        {contacts.map(contact => (
          <div 
            key={contact.id} 
            className={`contact ${selectedContact?.id === contact.id ? 'active' : ''}`}
            onClick={() => onContactSelect(contact)}
          >
            <div className="contact-avatar">{contact.avatar}</div>
            <div className="contact-info">
              <div className="contact-name">{contact.name}</div>
              <div className="contact-preview">{contact.lastMessage}</div>
            </div>
            <div className="contact-meta">
              <div className="contact-time">{contact.time}</div>
              {contact.online && <div className="online-indicator"></div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

