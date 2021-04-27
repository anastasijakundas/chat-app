import React from 'react';
import classNames from 'classnames';

import styles from './Message.module.scss';
// import { Message as IMessage } from '@chat-application/types';
import { IMessage } from '../../../common/interfaces';

interface MessageProps {
  message: IMessage;
  isCurrentUser: boolean;
}

const Message: React.FC<MessageProps> = ({
  message: { text, sender },
  isCurrentUser,
}) => {
  const messageWrapperClasses = classNames(styles.messageWrapper, {
    [styles.currentUser]: isCurrentUser,
  });
  const messageClasses = classNames(styles.message, {
    [styles.currentUser]: isCurrentUser,
  });
  return (
    <div className={messageWrapperClasses}>
      <span>{sender.name}</span>
      <div className={messageClasses}>
        <div className={styles.messageTextContainer}>{text}</div>
      </div>
    </div>
  );
};

export default Message;
