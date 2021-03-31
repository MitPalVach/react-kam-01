import React from "react";

import styles from './MyPosts.module.css'


const MyPosts = () => {
    return (
        <div className={styles.myPosts}>
            <textarea className={styles.myPosts__input} placeholder='Введите сообщение...'/>
            <button className={styles.myPosts__button}>Отправить</button>
        </div>
    )
}

export default MyPosts;