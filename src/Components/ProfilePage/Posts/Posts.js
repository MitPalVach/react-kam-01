import React from "react";
import Post from "../Post/Post";

import styles from './Posts.module.css'


const Posts = () => {
    return (
        <div className={styles.posts}>
            <Post likeCount='14' message='Привет, как ты?'/>
            <Post likeCount='21' message="Пишу свой первый пост"/>
            <Post/>
            <Post/>
        </div>
    )
}

export default Posts;