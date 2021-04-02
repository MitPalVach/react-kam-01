import React from "react";

import styles from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={styles.profileImg}
                     src='img/owl_eyes.jpeg'
                     alt='owl'/>
            </div>
            <div className={styles.avatar}>
                <img className={styles.avatarImg}
                     src="img/avatar.jpeg" alt="avatar"/>
            </div>
            <div className={styles.myPosts}>
                <textarea className={styles.myPosts__input} placeholder='Введите сообщение...'/>
                <button className={styles.myPosts__button}>Отправить</button>
            </div>
        </div>
    )
}

export default ProfileInfo;