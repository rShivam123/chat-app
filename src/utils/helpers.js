// Format time to display in HH:MM format
export const formatTime = (date) => {
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

// Get current time in HH:MM format
export const getCurrentTime = () => {
  return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

// Get status icon based on message status
export const getStatusIcon = (status) => {
  switch (status) {
    case 'sent':
      return 'fa-check';
    case 'delivered':
      return 'fa-check-double';
    case 'read':
      return 'fa-check-double text-blue-500';
    default:
      return 'fa-check';
  }
};