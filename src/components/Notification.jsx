import React from 'react';
import './Notification.css';

const Notification = ({ symbol, volume }) => {
  return (
    <div className="notification">
      <p>Significant volume increase detected!</p>
      <p>Symbol: {symbol}</p>
      <p>Volume: {volume}</p>
    </div>
  );
};

export default Notification;
