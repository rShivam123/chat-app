const chats = {
  1: [
    { id: 1, sender: "contact", content: "Hi there! How are you doing today?", time: "10:15 AM" },
    { id: 2, sender: "user", content: "I'm doing great, thanks for asking! How about you?", time: "10:16 AM", status: "read" },
    { id: 3, sender: "contact", content: "I'm good too. Just working on the project we discussed.", time: "10:18 AM" },
    { id: 4, sender: "user", content: "That's great to hear. When do you think you'll have the first draft ready?", time: "10:20 AM", status: "read" },
    { id: 5, sender: "contact", content: "I should have something to show you by tomorrow afternoon.", time: "10:22 AM" },
    { id: 6, sender: "user", content: "Perfect! Looking forward to seeing what you've created.", time: "10:23 AM", status: "delivered" },
  ],
  2: [
    { id: 1, sender: "contact", content: "Hello! Are you available for a quick call?", time: "9:00 AM" },
    { id: 2, sender: "user", content: "Yes, I can talk now. What's up?", time: "9:02 AM", status: "read" },
  ],
  3: [
    { id: 1, sender: "contact", content: "Meeting at 3pm still works?", time: "Yesterday" },
    { id: 2, sender: "user", content: "Yes, see you then!", time: "Yesterday", status: "read" },
  ],
  4: [
    { id: 1, sender: "user", content: "How's the design coming along?", time: "Yesterday", status: "read" },
    { id: 2, sender: "contact", content: "Almost done! Will share it today.", time: "Yesterday" },
  ],
  5: [
    { id: 1, sender: "contact", content: "Can we move our meeting to next week?", time: "Mon" },
    { id: 2, sender: "user", content: "Sure, what day works for you?", time: "Mon", status: "read" },
  ]
};

export default chats;