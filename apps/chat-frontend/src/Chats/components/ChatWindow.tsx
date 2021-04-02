import React from 'react';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';

import Message from './Message';
import styles from '../Chats.module.scss';

function ChatWindow({ chatData, setMessageText, messageText, handleSubmitMessage }) {
  return (
    <Box className={styles.chatWindow}>
      <h3>{chatData?.header}</h3>
      <Paper variant="outlined" square className={styles.messagesWrapper}>
        {chatData?.messages?.map((message) => (
          <Message key={message.id} message={message} />
        ))}
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
}

export default ChatWindow;
