import React from 'react';
import classNames from 'classnames';

import styles from './Message.module.scss';
import { Message as IMessage } from '@chat-application/types';

interface MessageProps {
  message: IMessage;
  currentUser: boolean;
}

const Message: React.FC<MessageProps> = ({
  message: { text, sender },
  currentUser,
}) => {
  const messageClasses = classNames(styles.message, {
    [styles.currentUser]: currentUser,
  });
  return (
    <div className={messageClasses}>
      {/* <span>{sender.name}</span> */}
      <div className={styles.messageTextContainer}>{text}</div>
    </div>
  );
};

export default Message;
