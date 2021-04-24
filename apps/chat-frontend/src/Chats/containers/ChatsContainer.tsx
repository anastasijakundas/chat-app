import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Chats from '../components/Chats';
import { getUsers, createNewChat, getChats } from '../thunks';
import { chatSelector } from './../slices';
import { USER } from '../../common/constants';
import { ROUTES } from '../../Navigation/constants';
import { useQuery } from '../../common/hooks';

const ChatsContainer: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const query = useQuery();
  const chatQueryParameter = query.get('chatId');

  const { users, chats, openedChat } = useSelector(chatSelector);
  const [isCreateChatModalOpened, setCreateChatModalOpened] = useState(false);
  const [firstMessage, setFirstMessage] = useState('');
  const [selectedUser, setSelectedUser] = useState('');

  const handleListItemClick = useCallback(
    (chatId: string) => {
      history.push({
        pathname: `${ROUTES.chats}`,
        search: '?' + new URLSearchParams({ chatId }).toString(),
      });
    },
    [history]
  );

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

  const availableUsers = useMemo(
    () => users.filter((user) => user._id !== USER),
    [users]
  );

  return (
    <div>
      <Chats
        handleListItemClick={handleListItemClick}
        selectedChat={openedChat._id}
        handleCreateChatButtonClick={handleCreateChatButtonClick}
        isCreateChatModalOpened={isCreateChatModalOpened}
        handleCloseChatCreationModal={handleCloseChatCreationModal}
        users={availableUsers}
        createChat={createChat}
        firstMessage={firstMessage}
        setFirstMessage={setFirstMessage}
        setSelectedUser={setSelectedUser}
        chats={chats}
        chatQueryParameter={chatQueryParameter}
      />
    </div>
  );
};

export default ChatsContainer;
