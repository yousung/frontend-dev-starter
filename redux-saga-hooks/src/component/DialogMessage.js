import React from 'react';

const DialogMessage = ({message}) => {
  return (
    <div className="dialog-message-background">
      <div className="dialog-message">{message}</div>
    </div>
  );
};

export default DialogMessage;
