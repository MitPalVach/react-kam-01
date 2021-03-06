import styles from './Dialogs.module.css';
import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    // debugger;
    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map(d =>
        <DialogItem key={d.id} name={d.name} id={d.id} friendsAvatar={d.avatar}/>);
    let messagesElements = state.messages.map(m =>
        <Message key={m.id} message={m.message} id={m.id}/>);

    let newMessageBody = state.newMessageBody;

    let onSendMessage = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsUsers}>
                {dialogsElements}
            </div>
            <div className={styles.dialogsMessages__wrapper}>
                <div className={styles.dialogsMessages}>
                    {messagesElements}
                </div>
                <div className={styles.dialogsMessages__inner}>
                    <textarea value={newMessageBody}
                              onChange={onNewMessageChange}
                              className={styles.dialogsMessages__input}
                              placeholder='Введите сообщение...'/>
                    <button className={styles.dialogsMessages__btn}
                            onClick={onSendMessage}>
                        Написать
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;