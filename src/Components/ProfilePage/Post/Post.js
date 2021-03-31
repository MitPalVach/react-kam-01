import React from "react";

import styles from './Post.module.css';


const Post = (props) => {
    return (
        <div className={styles.postsItem}>
            <div className={styles.postsItem__inner}>
                <img className={styles.postsItem__avatar}
                     src="https://cs13.pikabu.ru/avatars/3173/x3173765-1776853641.png"
                     alt=""/>
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