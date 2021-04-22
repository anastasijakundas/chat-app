import React from 'react';

import styles from '../Chats.module.scss';
import { IMessage } from '../../common/interfaces';

interface MessageProps {
  message: IMessage;
}

const Message: React.FC<MessageProps> = ({ message: { text, sender } }) => {
  return (
    <div className={styles.message}>
      {/* <span>{sender.name}</span> */}
      <div className={styles.messageTextContainer}>{text}</div>
    </div>
  );
};

export default Message;
