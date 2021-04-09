import styles from './Message.module.css';
import React from "react";



const Message = (props) => {

    return (
        <div>
            <div className={styles.dialogsMessages__item}>
                {props.message}
            </div>
        </div>
    )
}

export default Message;
