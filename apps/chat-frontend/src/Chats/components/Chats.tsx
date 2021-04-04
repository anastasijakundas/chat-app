import React from 'react';
import Box from '@material-ui/core/Box';

import ChatsList from './ChatsList';
import ChatWindow from '../containers/ChatWindowContainer';
import CreateChatModal from './CreateChatModal';
import styles from '../Chats.module.scss';

const Chats = ({
  handleListItemClick,
  selectedChat,
  handleCreateChatButtonClick,
  isCreateChatModalOpened,
  handleCloseChatCreationModal,
}) => {
  return (
    <>
      <Box className={styles.container}>
        <ChatsList
          handleListItemClick={handleListItemClick}
          selectedChat={selectedChat}
          handleCreateChatButtonClick={handleCreateChatButtonClick}
        />
        <ChatWindow selectedChat={selectedChat} />
      </Box>
      <CreateChatModal
        open={isCreateChatModalOpened}
        handleClose={handleCloseChatCreationModal}
      />
    </>
  );
};

export default Chats;
