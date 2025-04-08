// src/Notification.js
import React from 'react';

const Notification = ({ message, onClose }) => {
  return (
    <div className="alert alert-success" role="alert" style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 1050 }}>
      {message}
      <button type="button" className="close" onClick={onClose} style={{ marginLeft: '10px' }}>
        &times;
      </button>
    </div>
  );
};

export default Notification;
