import styles from './ProfileInfo.module.css';
import React from "react";


const ProfileInfo = (props) => {

    let newPostElem = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElem.current.value;
        props.updateNewPostText(text);
    }

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
                <textarea ref={newPostElem} onChange={onPostChange} value={props.newPostText}
                          className={styles.myPosts__input}
                          placeholder='Введите сообщение...'/>
                <button onClick={onAddPost} className={styles.myPosts__button}>Добавить на страницу</button>
            </div>
        </div>
    )
}

export default ProfileInfo;