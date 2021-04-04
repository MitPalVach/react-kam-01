import React from "react";

import styles from './Message.module.css';


const Message = (props) => {

    let addPost = () => {

        alert('Привет, я мелкий сов!')
    }

    return (
        <div>
            <div className={styles.dialogsMessages__item}>{props.message}</div>
            <textarea ></textarea>
            <button onClick={addPost}>Написать</button>
        </div>
    )
}

export default Message;
