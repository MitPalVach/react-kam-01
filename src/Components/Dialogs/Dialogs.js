import styles from './Dialogs.module.css';
import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
// debugger;
    let dialogsElements = props.dialogsPage.dialogs.map(d =>
        <DialogItem key={d.id} name={d.name} id={d.id} friendsAvatar={d.avatar}/>);
    let messagesElements = props.dialogsPage.messages.map(m =>
        <Message key={m.id} message={m.message} id={m.id}/>);

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
                    <textarea value={props.newMessageBody}
                              onChange={props.updateNewMessageBody}
                              className={styles.dialogsMessages__input}
                              placeholder='Введите сообщение...'/>
                    <button className={styles.dialogsMessages__btn}
                            onClick={props.sendMessage}>
                        Написать
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;