import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";

import styles from './ProfileInfo.module.css';


const ProfileInfo = (props) => {

    let newPostElem = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElem.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
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
                <button onClick={addPost} className={styles.myPosts__button}>Добавить на страницу</button>
            </div>
        </div>
    )
}

export default ProfileInfo;