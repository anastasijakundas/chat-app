import React, { useState } from 'react';

import ChatWindow from '../components/ChatWindow';
import { chats } from '../../mockData';

function ChatWindowContainer({ selectedChat }) {
  const [messageText, setMessageText] = useState('');
  

  const chatData = chats.find((item) => item.id === selectedChat);

  const handleSubmitMessage = () => {
    console.log(messageText);
    setMessageText('');
  };

  return (
    <ChatWindow
      chatData={chatData}
      messageText={messageText}
      setMessageText={setMessageText}
      handleSubmitMessage={handleSubmitMessage}
    />
  );
}

export default ChatWindowContainer;
