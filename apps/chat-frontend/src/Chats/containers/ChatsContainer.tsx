import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Chats from '../components/Chats';
import { getUsers, createNewChat, getChats } from '../thunks';
import { chatSelector } from './../slices';
import { ROUTES } from '../../Navigation/constants';
import { useQuery, useUser } from '../../common/hooks';

const ChatsContainer: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const query = useQuery();
  const chatQueryParameter = query.get('chatId');

  const user = useUser();

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

  const handleCloseChatCreationModal = useCallback(() => {
    setCreateChatModalOpened(false);
  }, []);

  const createChat = useCallback(() => {
    const recipient = users.find((item) => item._id === selectedUser);

    const chatData = {
      participants: [selectedUser, user.id],
      message: { sender: user.id, text: firstMessage },
      title: recipient.name,
    };
    console.log(chatData);
    dispatch(createNewChat(chatData));

    setFirstMessage('');
    handleCloseChatCreationModal();
  }, [
    user.id,
    firstMessage,
    dispatch,
    selectedUser,
    handleCloseChatCreationModal,
    users,
  ]);

  useEffect(() => {
    dispatch(getChats(user.id));
  }, [dispatch, user.id]);

  const availableUsers = useMemo(
    () => users.filter((item) => item._id !== user.id),
    [users, user.id]
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
        selectedUser={selectedUser}
      />
    </div>
  );
};

export default ChatsContainer;
