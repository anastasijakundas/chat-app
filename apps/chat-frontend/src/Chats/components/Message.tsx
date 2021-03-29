import React from 'react';

import styles from '../Chats.module.scss';

function Message({ message }) {
    return (
        <div className={styles.message}>
            <span>{message.senderName}</span>
            <div className={styles.messageTextContainer}>{message.text}</div>
        </div>
    );
}

export default Message;
