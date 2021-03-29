import React from 'react';
import Box from '@material-ui/core/Box';

import ChatsList from './ChatsList';
import ChatWindow from '../containers/ChatWindowContainer';
import styles from '../Chats.module.scss';

const Chats = ({ handleListItemClick, selectedChat }) => {
    return (
        <Box className={styles.container}>
           <ChatsList handleListItemClick={handleListItemClick} selectedChat={selectedChat} />
           <ChatWindow selectedChat={selectedChat} />
        </Box>
    )
}

export default Chats;

