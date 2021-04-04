import React from "react";
import styles from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogItemElements = props.state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}
                                                                      friendsAvatar={d.avatar}/>);

    let dialogMessagesElements = props.state.messages.map(m => <Message key={m.id} message={m.message} id={m.id}/>);

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogItemElements}
            </div>
            <div className={styles.dialogsMessages}>
                {dialogMessagesElements}
            </div>
        </div>
    )
}

export default Dialogs;