import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import io from 'socket.io-client';

import Chats from '../components/Chats';
import { getUsers, createNewChat, getChats } from '../thunks';
import { chatSelector } from './../slices';
import { USER } from '../../common/constants';

const ChatsContainer: React.FC = () => {
  const dispatch = useDispatch();

  // const socket = React.useMemo(() => io('http://localhost:3333/chat'), []);
  const { users, chats } = useSelector(chatSelector);
  const [selectedChat, setSelectedChat] = useState('');
  const [isCreateChatModalOpened, setCreateChatModalOpened] = useState(false);
  const [firstMessage, setFirstMessage] = useState('');
  const [selectedUser, setSelectedUser] = useState('');

  const handleListItemClick = (chatId) => {
    setSelectedChat(chatId);
  };

  const handleCreateChatButtonClick = useCallback(() => {
    setCreateChatModalOpened(true);
    dispatch(getUsers());
  }, [dispatch]);

  const handleCloseChatCreationModal = () => {
    setCreateChatModalOpened(false);
  };
 
  const createChat = () => {
    const chatData = {
      participants: [selectedUser, USER], // TODO change to authenticated user
      message: { sender: USER, text: firstMessage },
    };
    dispatch(createNewChat(chatData));

    setFirstMessage('');
  };

  useEffect(() => {
    dispatch(getChats('6068e7b86bbb4b1c3c6d548c'));
  }, [dispatch]);

  const availableUsers = useMemo(() => users.filter((user => user._id !== USER)), [users]);

  return (
    <div>
      <Chats
        handleListItemClick={handleListItemClick}
        selectedChat={selectedChat}
        handleCreateChatButtonClick={handleCreateChatButtonClick}
        isCreateChatModalOpened={isCreateChatModalOpened}
        handleCloseChatCreationModal={handleCloseChatCreationModal}
        users={availableUsers}
        createChat={createChat}
        firstMessage={firstMessage}
        setFirstMessage={setFirstMessage}
        setSelectedUser={setSelectedUser}
        chats={chats}
      />
    </div>
  );
}

export default ChatsContainer;
