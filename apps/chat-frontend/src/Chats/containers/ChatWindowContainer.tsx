import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { chatSelector } from './../slices';
import { Message } from '@chat-application/types';
import { receiveMessage } from '../slices';
import socket from '../../socket';
import { useUser, useQuery } from '../../common/hooks';
import ChatWindow from '../../common/components/ChatWindow';
import { getChatData } from '../thunks';

const ChatWindowContainer: React.FC = () => {
  const dispatch = useDispatch();
  const { openedChat } = useSelector(chatSelector);
  const user = useUser();
  const query = useQuery();

  const chatQueryParameter = query.get('chatId');

  const [messageText, setMessageText] = useState('');

  useEffect(() => {
    if (chatQueryParameter) {
      dispatch(getChatData(chatQueryParameter));
    }
  }, [dispatch]);

  useEffect(() => {
    socket.on('receiveChatMessage', (message: Message) => {
      dispatch(receiveMessage(message));
    });
  }, [dispatch]);

  const handleSubmitMessage = useCallback(() => {
    const message = {
      sender: user.id,
      text: messageText,
      id: openedChat._id,
    };

    socket.emit('sendChatMessage', message);

    setMessageText('');
  }, [messageText, openedChat._id]);

  return (
    <ChatWindow
      chatData={openedChat}
      messageText={messageText}
      setMessageText={setMessageText}
      handleSubmitMessage={handleSubmitMessage}
    />
  );
};

export default ChatWindowContainer;
