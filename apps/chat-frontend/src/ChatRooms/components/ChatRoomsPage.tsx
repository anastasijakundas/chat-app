import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import Room from './Room';
import CreateRoomModal from './CreateRoomModal';
import styles from '../ChatRooms.module.scss';
import { ChatRoom } from '@chat-application/types';
import { CreateChatRoomData } from '../interfaces';

interface ChatRoomsPageProps {
  createRoomButtonClick: () => void;
  room: CreateChatRoomData;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleCreateRoom: () => void;
  isModalOpened: boolean;
  handleModalClose: () => void;
  rooms: ChatRoom[];
  handleJoinClick: (roomId: string) => void;
}

const ChatRoomsPage: React.FC<ChatRoomsPageProps> = ({
  createRoomButtonClick,
  room,
  handleInputChange,
  isModalOpened,
  handleCreateRoom,
  handleModalClose,
  rooms,
  handleJoinClick,
}) => {
  return (
    <>
      <div className={styles.roomsListWrapper}>
        {rooms.map((room: ChatRoom) => (
          <Room key={room._id} roomData={room} handleJoinClick={handleJoinClick} />
        ))}
        <div>
          <IconButton
            color="secondary"
            aria-label="add item"
            onClick={createRoomButtonClick}
          >
            <AddCircleIcon />
          </IconButton>
        </div>
      </div>
      <CreateRoomModal
        room={room}
        handleInputChange={handleInputChange}
        handleCreateRoom={handleCreateRoom}
        open={isModalOpened}
        handleClose={handleModalClose}
      />
    </>
  );
};

export default ChatRoomsPage;
