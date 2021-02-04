import React from 'react'
import styles from './Messages.module.css'
import UserMessage from "./UserMessage/UserMessage";
import Dialog from "./Dialog/Dialog";


const Messages = (props) => {


    let usersMessageRender = props.dialogs.usersMessage.map(user => <UserMessage key={user.id} name={user.user} id={user.id}/>);
    let messagesRender = props.dialogs.messages.map(message => <Dialog key={message.id} text={message.message}/>);


    return (
        <div className={styles.messages}>
            <div className={styles.users}>
                {usersMessageRender}
            </div>
            <div className={styles.dialogs}>
                {messagesRender}
            </div>
        </div>
    )
}

    export default Messages;
