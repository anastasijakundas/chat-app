import React, { useCallback, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import ChatWindow from '../../common/components/ChatWindow';
import { chatRoomSelector, receiveMessage } from './../slices';
import { getChatRoom } from '../thunks';
import socket from '../../socket';
import { SendMessageData } from '../interfaces';
import { Message } from '@chat-application/types';
import { IMessage } from '../../common/interfaces';
import { useUser } from '../../common/hooks';

const ChatRoomMessagesContainer = () => {
  const { openedRoom } = useSelector(chatRoomSelector);
  const dispatch = useDispatch();
  const { chatRoomId }: { chatRoomId: string } = useParams();

  const user = useUser();

  const [messageText, setMessageText] = useState('');

  useEffect(() => {
    dispatch(getChatRoom(chatRoomId));
  }, [dispatch, chatRoomId]);

  useEffect(() => {
    socket.on('msgToClient', (content) => {
      dispatch(receiveMessage(content));
    });
  }, [dispatch]);

  const handleSubmitMessage = useCallback(() => {
    const message: SendMessageData = {
      sender: user.id,
      text: messageText,
      id: chatRoomId,
    };
    socket.emit('msgToServer', message);
    setMessageText('');
  }, [messageText, chatRoomId, user.id]);

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
