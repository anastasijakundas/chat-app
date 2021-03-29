import React from 'react';

import ChatWindow from '../components/ChatWindow';
import { chats } from '../../mockData';

function ChatWindowContainer({ selectedChat }) {
  const chatData = chats.find((item) => item.id === selectedChat);

  return <ChatWindow chatData={chatData} />;
}

export default ChatWindowContainer;
