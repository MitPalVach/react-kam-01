import styles from './Post.module.css';
import React from "react";


const Post = (props) => {
    return (
        <div className={styles.postsItem}>
            <div className={styles.postsItem__inner}>
                <img className={styles.postsItem__avatar}
                     src="img/avatar_to_all.png"
                     alt="avatar_to_all"/>
                <div className={styles.postsItem__messages}>
                    {props.message}
                </div>
            </div>
            <div className={styles.postsItem__activity}>
                <span className={styles.postsItem__like}>{props.likeCount} Нравится</span>
                <span className={styles.postsItem__send}>Написать сообщение</span>
            </div>
        </div>
    )
}

export default Post;