import React from 'react';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';

import Message from '../../common/components/Message';
import styles from '../Chats.module.scss';
import { IMessage } from '../../common/interfaces';

interface ChatWindowProps {
  chatData: any; // TODO add type
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
      <h3>{title}</h3>
      {description && <p>{description}</p>}
      <Paper variant="outlined" square className={styles.messagesWrapper}>
        {messages?.map((message: IMessage) => (
          <Message key={message._id} message={message} currentUser/>
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
};

export default ChatWindow;
