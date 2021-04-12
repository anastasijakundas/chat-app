import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from 'react';
import { useSelector } from 'react-redux';
import io from 'socket.io-client';

import ChatWindow from '../components/ChatWindow';
import { chatSelector } from './../slices';
import { USER, BASE_URL } from '../../common/constants';

interface ChatWindowContainerProps {
  selectedChat: string;
}

const ChatWindowContainer: React.FC<ChatWindowContainerProps> = ({
  selectedChat,
}) => {
  const { chats } = useSelector(chatSelector);
  const [messageText, setMessageText] = useState('');
  const socket = io(BASE_URL);

  const chatData = chats.find((item) => item._id === selectedChat);

  const handleSubmitMessage = useCallback(() => {
    const message = {
      sender: USER,
      text: messageText,
      chatId: selectedChat,
    };

    socket.emit('sendMessage', message);

    setMessageText('');
  }, [messageText, selectedChat]);

  return (
    <ChatWindow
      chatData={chatData}
      messageText={messageText}
      setMessageText={setMessageText}
      handleSubmitMessage={handleSubmitMessage}
    />
  );
};

export default ChatWindowContainer;
