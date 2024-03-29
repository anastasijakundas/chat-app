import React from 'react';
import Box from '@material-ui/core/Box';

import ChatsList from './ChatsList';
import ChatWindow from '../containers/ChatWindowContainer';
import CreateChatModal from './CreateChatModal';
import styles from '../Chats.module.scss';
import { User } from '../../common/interfaces';

interface ChatsProps {
  handleListItemClick: (item: string) => void;
  selectedChat: string;
  handleCreateChatButtonClick: () => void;
  chats: { _id: string; title: string }[];
  isCreateChatModalOpened: boolean;
  handleCloseChatCreationModal: () => void;
  firstMessage: string;
  users: User[];
  setFirstMessage: (firstMessage: string) => void;
  createChat: () => void;
  setSelectedUser: (selectedUser: string) => void;
  chatQueryParameter: string;
  selectedUser: string;
}

const Chats: React.FC<ChatsProps> = ({
  handleListItemClick,
  selectedChat,
  handleCreateChatButtonClick,
  isCreateChatModalOpened,
  handleCloseChatCreationModal,
  firstMessage,
  users,
  setFirstMessage,
  createChat,
  setSelectedUser,
  chats,
  chatQueryParameter,
  selectedUser,
}) => {
  return (
    <>
      <Box className={styles.container}>
        <ChatsList
          handleListItemClick={handleListItemClick}
          selectedChat={selectedChat}
          handleCreateChatButtonClick={handleCreateChatButtonClick}
          chats={chats}
        />
        {chatQueryParameter && <ChatWindow />}
      </Box>
      <CreateChatModal
        open={isCreateChatModalOpened}
        handleClose={handleCloseChatCreationModal}
        users={users}
        firstMessage={firstMessage}
        setFirstMessage={setFirstMessage}
        createChat={createChat}
        setSelectedUser={setSelectedUser}
        selectedUser={selectedUser}
      />
    </>
  );
};

export default Chats;
