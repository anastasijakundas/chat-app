import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import PersonIcon from '@material-ui/icons/Person';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import styles from '../Chats.module.scss';
import { User } from '../../common/interfaces';

interface CreateChatModalProps {
  open: boolean;
  handleClose: () => void;
  users: User[];
  firstMessage: string;
  setFirstMessage: (firstMessage: string) => void;
  createChat: () => void;
  setSelectedUser: (selectedUser: string) => void;
  selectedUser: string;
}

const CreateChatModal: React.FC<CreateChatModalProps> = ({
  open,
  handleClose,
  users,
  firstMessage,
  setFirstMessage,
  createChat,
  setSelectedUser,
  selectedUser,
}) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      classes={{
        paper: styles.createChatDialog,
      }}
    >
      <DialogTitle id="simple-dialog-title">Create chat</DialogTitle>
      <List>
        {users.map((user) => (
          <ListItem
            key={user._id}
            button
            onClick={() => setSelectedUser(user._id)}
            selected={user._id === selectedUser}
          >
            <ListItemAvatar>
              <Avatar>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={user.name} />
          </ListItem>
        ))}
      </List>
      <form noValidate autoComplete="off" className={styles.createChatForm}>
        <TextField
          id="outlined-basic"
          variant="outlined"
          placeholder="Type message..."
          value={firstMessage}
          onChange={(e) => setFirstMessage(e.target.value)}
        />
      </form>
      <Button variant="contained" color="primary" onClick={createChat}>
        Send message
      </Button>
    </Dialog>
  );
};

export default CreateChatModal;
