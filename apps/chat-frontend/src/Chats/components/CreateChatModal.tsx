import React from 'react';
import Dialog from '@material-ui/core/Dialog';

function CreateChatModal({ open, handleClose }) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <h4>Create chat</h4>
      <h5>Users:</h5>
      <input placeholder="Type message..." />
      <button>Create</button>
    </Dialog>
  );
}

export default CreateChatModal;
