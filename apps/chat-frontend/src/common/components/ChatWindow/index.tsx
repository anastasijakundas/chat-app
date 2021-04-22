import React from 'react';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';

import Message from '../Message';
import styles from './ChatWindow.module.scss';
import { IMessage, ChatData } from '../../interfaces';

interface ChatWindowProps {
  chatData: ChatData;
  setMessageText: (messageText: string) => void;
  messageText: string;
  handleSubmitMessage: () => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({
  chatData: { title, description, messages } = {},
  setMessageText,
  messageText,
  handleSubmitMessage,
}) => {
  return (
    <Box className={styles.chatWindow}>
      <h3 className={styles.title}>Title: {title}</h3>
      {description && <p>Description: {description}</p>}
      <Paper variant="outlined" square className={styles.messagesWindow}>
        <div className={styles.messagesWrapper}>
          {messages?.map((message: any) => (
            <Message key={message._id} message={message} currentUser />
          ))}
        </div>
        <form noValidate autoComplete="off" className={styles.inputForm}>
          <TextField
            id="outlined-basic"
            variant="outlined"
            name="message"
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
          />
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleSubmitMessage}
            color="inherit"
          >
            <SendIcon color="primary" />
          </IconButton>
        </form>
      </Paper>
    </Box>
  );
};

export default ChatWindow;
