import React, { useState } from 'react';

import Chats from '../components/Chats';
import { chats } from '../../mockData';

function ChatsContainer() {
  const [selectedChat, setSelectedChat] = useState(chats[0].id);
  const [isCreateChatModalOpened, setCreateChatModalOpened] = useState(false);

  const handleListItemClick = (chatId) => {
    setSelectedChat(chatId);
  };

  const handleCreateChatButtonClick = () => {
    setCreateChatModalOpened(true);
  };

  const handleCloseChatCreationModal = () => {
    setCreateChatModalOpened(false);
  };

  return (
    <div>
      <Chats
        handleListItemClick={handleListItemClick}
        selectedChat={selectedChat}
        handleCreateChatButtonClick={handleCreateChatButtonClick}
        isCreateChatModalOpened={isCreateChatModalOpened}
        handleCloseChatCreationModal={handleCloseChatCreationModal}
      />
    </div>
  );
}

export default ChatsContainer;
