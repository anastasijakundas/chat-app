import React, { useCallback, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import ChatWindow from '../../common/components/ChatWindow';
import { USER } from '../../common/constants';
import { chatRoomSelector, receiveMessage } from './../slices';
import { getChatRoom } from '../thunks';
import socket from '../../socket';
import { SendMessageData } from '../interfaces';
import { Message } from '@chat-application/types';

const ChatRoomMessagesContainer = () => {
  const { openedRoom } = useSelector(chatRoomSelector);
  const dispatch = useDispatch();
  const { chatRoomId }: { chatRoomId: string } = useParams();

  const [messageText, setMessageText] = useState('');

  useEffect(() => {
    dispatch(getChatRoom(chatRoomId));
  }, [dispatch, chatRoomId]);

  useEffect(() => {
    socket.on('msgToClient', (message: Message) => {
      dispatch(receiveMessage(message));
    });
  }, [dispatch]);

  const handleSubmitMessage = useCallback(() => {
    const message: SendMessageData = {
      sender: USER,
      text: messageText,
      id: chatRoomId,
    };
    socket.emit('msgToServer', message);
    setMessageText('');
  }, [messageText, chatRoomId]);

  return (
    <ChatWindow
      chatData={openedRoom}
      setMessageText={setMessageText}
      messageText={messageText}
      handleSubmitMessage={handleSubmitMessage}
    />
  );
};

export default ChatRoomMessagesContainer;
