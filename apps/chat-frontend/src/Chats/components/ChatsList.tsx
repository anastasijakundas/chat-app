import React from 'react';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

import styles from '../Chats.module.scss';
import { chats } from '../../mockData';

const ChatsList = ({
  handleListItemClick,
  selectedChat,
  handleCreateChatButtonClick,
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
        {chats.map((chat) => (
          <ListItem
            key={chat.id}
            button
            onClick={() => handleListItemClick(chat.id)}
            selected={chat.id === selectedChat}
          >
            <ListItemText primary={chat.header} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ChatsList;
