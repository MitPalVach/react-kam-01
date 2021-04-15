import styles from './ProfileInfo.module.css';
import React from "react";
import Preloader from "../../Common/Preloader/Preloader";


const ProfileInfo = (props) => {

    let newPostElem = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElem.current.value;
        props.updateNewPostText(text);
    }

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img className={styles.profileImg}
                     src='img/owl_eyes.jpeg'
                     alt='owl'/>
            </div>
            <div className={styles.avatar}>
                {/*<img className={styles.avatarImg}*/}
                {/*     src="img/avatar.jpeg" alt="avatar"/>*/}
                <img className={styles.avatarImg}
                     src={props.profile.photos.large} alt="avatar"/>
                <p>{props.profile.contacts.vk}</p>
                <p>{props.profile.contacts.youtube}</p>
                <p>{props.profile.contacts.twitter}</p>
            </div>
            <div className={styles.myPosts}>
                <textarea ref={newPostElem} onChange={onPostChange} value={props.profilePage.newPostText}
                          className={styles.myPosts__input}
                          placeholder='Введите сообщение...'/>
                <button onClick={onAddPost} className={styles.myPosts__button}>Добавить на страницу</button>
            </div>
        </div>
    )
}

export default ProfileInfo;