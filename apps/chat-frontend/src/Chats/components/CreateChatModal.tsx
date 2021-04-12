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

interface CreateChatModalProps {
  open: boolean;
  handleClose: () => void;
  users: any; // TODO add user type
  firstMessage: string;
  setFirstMessage: (firstMessage: string) => void;
  createChat: () => void;
  setSelectedUser: (selectedUser: string) => void;
}

const CreateChatModal: React.FC<CreateChatModalProps> = ({
  open,
  handleClose,
  users,
  firstMessage,
  setFirstMessage,
  createChat,
  setSelectedUser,
}) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="xl"
      aria-labelledby="simple-dialog-title"
    >
      <DialogTitle id="simple-dialog-title">Create chat</DialogTitle>
      <List>
        {users.map((user) => (
          <ListItem
            key={user.id}
            button
            onClick={() => setSelectedUser(user._id)}
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
      <form noValidate autoComplete="off">
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
