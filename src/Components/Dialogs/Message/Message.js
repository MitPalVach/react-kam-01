import React from "react";

import styles from './Message.module.css';


const Message = (props) => {

    // let onSendMessageClick = () => {
    //     alert('as')
    // }

    return (
        <div>
            <div className={styles.dialogsMessages__item}>
                {props.message}
            </div>
            {/*<div>*/}
            {/*    <textarea className={styles.dialogsMessages__input} placeholder='Введите сообщение...'></textarea>*/}
            {/*    <button className={styles.dialogsMessages__btn} onClick={onSendMessageClick}>Написать</button>*/}
            {/*</div>*/}
        </div>
    )
}

export default Message;
