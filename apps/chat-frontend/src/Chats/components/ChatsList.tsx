import React from 'react';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

import styles from '../Chats.module.scss';

interface ChatsListProps {
  handleListItemClick: (item: string) => void;
  selectedChat: string;
  handleCreateChatButtonClick: () => void;
  chats: { _id: string; title: string }[];
}

const ChatsList: React.FC<ChatsListProps> = ({
  handleListItemClick,
  selectedChat,
  handleCreateChatButtonClick,
  chats,
}) => {
  return (
    <Box className={styles.chatsListContainer}>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Chats
            <button onClick={handleCreateChatButtonClick}>Create +</button>
          </ListSubheader>
        }
        className={styles.list}
      >
        {chats?.map((chat) => (
          <ListItem
            key={chat._id}
            button
            onClick={() => handleListItemClick(chat._id)}
            selected={chat._id === selectedChat}
          >
            <ListItemText primary={chat.title} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ChatsList;
