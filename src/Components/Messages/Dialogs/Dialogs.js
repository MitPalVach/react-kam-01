import React from "react";
import styles from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {


    let dialogItemElements = props.dialogItemsData.map(d => <DialogItem name={d.name} id={d.id}/>);

    let dialogMessagesElements = props.dialogMessagesData.map(m => <Message message={m.message}/>);

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