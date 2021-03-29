import React, { useState } from 'react';

import Chats from '../components/Chats';
import { chats } from '../../mockData';

function ChatsContainer() {
    const [selectedChat, setSelectedChat] = useState(chats[0].id);

    const handleListItemClick = (chatId) => {
        setSelectedChat(chatId);
      };

    return (
        <div>
            <Chats handleListItemClick={handleListItemClick} selectedChat={selectedChat} />
        </div>
    )
}

export default ChatsContainer;
