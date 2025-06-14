import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ChatWindow from './components/ChatWindow';
import './App.css';

function App() {
  const [selectedContact, setSelectedContact] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleContactSelect = (contact) => {
    setSelectedContact(contact);
    setSidebarOpen(false);
  };

  return (
    <div className="app-container">
      <Navbar 
        selectedContact={selectedContact} 
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)} 
      />
      <div className="main-content">
        <Sidebar 
          isOpen={sidebarOpen} 
          onContactSelect={handleContactSelect} 
          selectedContact={selectedContact} 
        />
        <ChatWindow selectedContact={selectedContact} />
      </div>
    </div>
  );
}

export default App;

