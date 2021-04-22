import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import styles from '../ChatRooms.module.scss';
import { CreateChatRoomData } from '../interfaces';

interface CreateRoomModalProps {
  open: boolean;
  handleClose: () => void;
  room: CreateChatRoomData;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleCreateRoom: () => void;
}

const CreateRoomModal: React.FC<CreateRoomModalProps> = ({
  open,
  handleClose,
  room,
  handleInputChange,
  handleCreateRoom,
}) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      classes={{
        paper: styles.createChatRoomDialog,
      }}
    >
      <DialogTitle id="simple-dialog-title">Create room</DialogTitle>
      <form noValidate autoComplete="off" className={styles.createChatRoomForm}>
        <TextField
          id="outlined-basic"
          variant="outlined"
          placeholder="Title"
          name="title"
          value={room.title}
          onChange={handleInputChange}
        />
        <TextField
          id="outlined-basic"
          variant="outlined"
          placeholder="Description"
          name="description"
          value={room.description}
          onChange={handleInputChange}
        />
      </form>
      <Button variant="contained" color="primary" onClick={handleCreateRoom}>
        Create
      </Button>
    </Dialog>
  );
};

export default CreateRoomModal;
