import React, { useCallback, useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import ChatRoomsPage from '../components/ChatRoomsPage';
import { chatRoomSelector } from './../slices';
import { getChatRooms, createChatRoom } from '../thunks';
import { ROUTES } from '../../Navigation/constants';
import { CreateChatRoomData } from '../interfaces';
import { useUser } from '../../common/hooks';

const ChatRoomsPageContainer: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useUser();

  const { rooms } = useSelector(chatRoomSelector);

  const defaultRoomState: CreateChatRoomData = useMemo(
    () => ({
      title: '',
      description: '',
    }),
    []
  );

  const [room, setRoom] = useState<CreateChatRoomData>(defaultRoomState);
  const [isModalOpened, setModalOpened] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setRoom((prevState: CreateChatRoomData) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleModalClose = useCallback(() => {
    setModalOpened(false);
  }, []);

  const createRoomButtonClick = useCallback(() => {
    setModalOpened(true);
  }, []);

  const handleCreateRoom = useCallback(() => {
    const chatRoomData = {
      ...room,
      creator: user.id,
    };
    dispatch(createChatRoom(chatRoomData));
    setModalOpened(false);
    setRoom(defaultRoomState);
  }, [room, dispatch, defaultRoomState, user.id]);

  useEffect(() => {
    dispatch(getChatRooms());
  }, [dispatch]);

  const handleJoinClick = useCallback(
    (roomId: string) => {
      history.push(`${ROUTES.rooms}/${roomId}`);
    },
    [history]
  );

  return (
    <ChatRoomsPage
      createRoomButtonClick={createRoomButtonClick}
      room={room}
      handleInputChange={handleInputChange}
      handleCreateRoom={handleCreateRoom}
      isModalOpened={isModalOpened}
      handleModalClose={handleModalClose}
      rooms={rooms}
      handleJoinClick={handleJoinClick}
    />
  );
};

export default ChatRoomsPageContainer;
